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

      return res.status(201).json({
        message: "Produto criado com sucesso",
        imagensSalvas: imagens.length,
      });
    });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);

  const dados = {};

  if (req.body.name !== undefined) {
    dados.name = req.body.name;
  }

  if (req.body.category_id !== undefined) {
    const categoryId = Number(req.body.category_id);
    dados.category_id = isNaN(categoryId) ? null : categoryId;
  }

  if (req.body.description !== undefined) {
    dados.description = req.body.description;
  }

  if (req.body.stock !== undefined) {
    const stock = Number(req.body.stock);
    dados.stock = isNaN(stock) ? 0 : stock;
  }

  if (req.body.price !== undefined) {
    const price = Number(req.body.price);
    dados.price = isNaN(price) ? 0 : price;
  }

  let imagens = [];

  if (req.files && req.files.length > 0) {
    let uploadsFinalizados = 0;

    req.files.forEach((file) => {
      cloudinary.uploader.upload(file.path, (err, result) => {
        uploadsFinalizados++;

        if (!err && result) {
          imagens.push(result.secure_url);
        }

        if (uploadsFinalizados === req.files.length) {
          if (imagens.length > 0) {
            dados.images = imagens;
          }

          productService.update(id, dados, (err2, result2) => {
            if (err2) {
              console.log(err2);
              return res
                .status(500)
                .json({ error: "Erro ao atualizar produto" });
            }

            return res.json({
              message: "Produto atualizado com sucesso",
              result: result2,
            });
          });
        }
      });
    });

    return;
  }

  productService.update(id, dados, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Erro ao atualizar produto" });
    }

    return res.json({
      message: "Produto atualizado com sucesso",
      result,
    });
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
