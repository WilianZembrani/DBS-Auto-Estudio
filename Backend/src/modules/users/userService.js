const db = require("../../database/connection");

exports.list = (callback) => {
  const sql = "SELECT * FROM users";
  db.query(sql, callback);
};

exports.listEmployees = (callback) => {
  const sql = `
    SELECT id, name, email, job_title 
    FROM users 
    WHERE role = 'employee'
  `;
  db.query(sql, callback);
};

exports.createEmployee = (dados, callback) => {
  const sql = `
    INSERT INTO users (name, email, password, job_title, role)
    VALUES (?, ?, ?, ?, 'employee')
  `;
  db.query(
    sql,
    [dados.name, dados.email, dados.password, dados.job_title],
    callback,
  );
};

exports.create = (dados, callback) => {
  const sql = "INSERT INTO users SET ?";
  db.query(sql, dados, callback);
};

exports.update = (dados, id, callback) => {
  const sql = "UPDATE users SET ? WHERE id=?";
  db.query(sql, [dados, id], callback);
};

exports.delete = (id, callback) => {
  const sql = "DELETE FROM users WHERE id=?";
  db.query(sql, [id], callback);
};

exports.login = (email, password, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) return callback("Erro no servidor");

    if (results.length === 0) {
      return callback("Usuário não encontrado");
    }

    const user = results[0];

    if (user.password !== password) {
      return callback("Senha inválida");
    }

    return callback(null, user);
  });
};
