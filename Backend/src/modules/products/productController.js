const productService = require("./productService");
const cloudinary = require("../../config/cloudinary");
const fs = require("fs");

exports.listProducts = (req, res) => {
  const search = req.query.search || "";
  const category_id = req.query.category_id || "";

  productService.list(search, category_id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Erro ao listar produtos" });
    }
    res.json(results);
  });
};

exports.createProduct = async (req, res) => {
  try {
    const dados = {
      name: req.body.name,
      category_id: Number(req.body.category_id),
      description: req.body.description,
      stock: Number(req.body.stock),
      price: Number(req.body.price),
    };

    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    productService.create(dados, async (err, results) => {
      if (err) {
        console.log("ERRO AO CRIAR PRODUTO:", err);
        return res.status(500).json({ error: "Erro ao criar produto" });
      }

      const productId = results.insertId;
      const imagens = [];

      if (req.files && req.files.length > 0) {
        for (const file of req.files) {
          try {
            const result = await cloudinary.uploader.upload(file.path);

            imagens.push(result.secure_url);

            if (
              file.path &&
              typeof file.path === "string" &&
              !file.path.startsWith("http")
            ) {
              const fs = require("fs");

              if (fs.existsSync(file.path)) {
                fs.unlinkSync(file.path);
              }
            }
          } catch (uploadError) {}
        }
      }

      if (imagens.length > 0) {
        productService.saveImages(productId, imagens, (err2) => {
          if (err2) {
            console.log("ERRO AO SALVAR IMAGENS:", err2);
          } else {
            console.log("IMAGENS SALVAS COM SUCESSO");
          }
        });
      }

      return res.status(201).json({
        message: "Produto criado com sucesso",
        imagensSalvas: imagens.length,
      });
    });
  } catch (error) {
    console.log("ERRO GERAL:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const dados = req.body;

  productService.update(dados, id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro ao atualizar produto" });
    } else {
      res.status(200).json({ message: "Produto atualizado com sucesso" });
    }
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  productService.delete(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro ao deletar produto" });
    } else {
      res.status(200).json({ message: "Produto deletado com sucesso" });
    }
  });
};
