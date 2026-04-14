const officeService = require("./officeService");

exports.listOffices = (req, res) => {
  const search = req.query.search || "";

  officeService.list(search, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao listar serviços");
    }
    res.status(200).json(results);
  });
};

exports.createOffice = (req, res) => {
  const dados = req.body;

  officeService.create(dados, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao criar serviço");
    }
    res.status(200).json(results);
  });
};

exports.updateOffice = (req, res) => {
  const dados = req.body;
  const id = req.params.id;
  officeService.update(dados, id, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao atualizar serviço");
    }
    res.status(200).json(results);
  });
};

exports.deleteOffice = (req, res) => {
  const id = req.params.id;
  officeService.delete(id, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao deletar serviço");
    }
    res.status(200).json(results);
  });
};
