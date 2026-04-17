const categoryService = require("./categoryService");

exports.createCategory = (req, res) => {
  const dados = req.body;
  categoryService.createCategory(dados, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Não foi possivel criar a categoria",
      });
    }
    res.status(200).json(results);
  });
};

exports.listCategories = (req, res) => {
  categoryService.listCategories((err, results) => {
    if (err) {
      res.status(500).json({
        message: "Não foi possivel listar as categorias",
      });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.updateCategory = (req, res) => {
  const dados = req.body;
  const id = req.params.id;
  categoryService.updateCategory(dados, id, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Não foi possivel atualizar a categoria",
      });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  categoryService.deleteCategory(id, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Não foi possivel deletar a categoria",
      });
    } else {
      res.status(200).json(results);
    }
  });
};
