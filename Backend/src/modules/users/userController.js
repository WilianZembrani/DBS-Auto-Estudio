const userService = require("./userService");

exports.listUsers = (req, res) => {
  userService.list((err, results) => {
    if (err) {
      return res.status(500).send("Não foi possivel listar os usuarios");
    }
    res.status(200).json(results);
  });
};

exports.listEmployees = (req, res) => {
  userService.listEmployees((err, results) => {
    if (err) {
      return res.status(500).send("Não foi possivel listar os funcionarios");
    }
    res.status(200).json(results);
  });
};

exports.createEmployee = (req, res) => {
  const { name, email, job_title, password } = req.body;

  if (!name || !email || !job_title || !password) {
    return res.status(400).json({
      message: "Preencha todos os campos",
    });
  }

  userService.createEmployee(
    { name, email, job_title, password },
    (err, results) => {
      if (err) {
        console.log("ERRO:", err);
        return res.status(500).json({
          message: "Erro ao criar funcionário",
        });
      }

      return res.status(201).json({
        message: "Funcionário criado com sucesso",
      });
    },
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userService.login(email, password, (err, results) => {
    if (err) {
      return res.status(400).send({ error: err });
    }

    res
      .status(200)
      .json({ message: "Login realizado com sucesso", user: results });
  });
};

exports.createUser = (req, res) => {
  const dados = req.body;

  userService.create(dados, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao criar usuario", err);
    }
    res.status(201).json(results);
  });
};

exports.updateUser = (req, res) => {
  const dados = req.body;
  const id = req.params.id;

  userService.update(dados, id, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao atualizar usuario");
    }
    res.status(200).json(results);
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  userService.delete(id, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao deletar usuario");
    }
    res.status(200).json(results);
  });
};
