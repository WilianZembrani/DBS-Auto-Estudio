const db = require("../../database/connection");

exports.list = (callback) => {
  const sql = `
  SELECT 
    p.id,
    p.name,
    p.price,
    p.stock,
    COALESCE(c.name, 'Sem categoria') AS category
  FROM products p
  LEFT JOIN categories c ON p.category_id = c.id
`;
  db.query(sql, callback);
};

exports.list;

exports.create = (dados, callback) => {
  const sql = "INSERT INTO products SET ?";
  db.query(sql, dados, callback);
};

exports.update = (dados, id, callback) => {
  const sql = "UPDATE products SET ? WHERE id = ?";
  db.query(sql, [dados, id], callback);
};

exports.delete = (id, callback) => {
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], callback);
};
