const categoryService = require("./categoryService");

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
