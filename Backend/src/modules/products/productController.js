const productService = require("./productService");

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

exports.createProduct = (req, res) => {
  const dados = req.body;
  productService.create(dados, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro ao criar produto" });
    } else {
      res.status(201).json({ message: "Produto criado com sucesso" });
    }
  });
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
