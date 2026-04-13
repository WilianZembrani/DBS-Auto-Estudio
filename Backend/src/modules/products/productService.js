const db = require("../../database/connection");
const { search } = require("./productRoutes");

exports.list = (search, callback) => {
  let sql = `
    SELECT 
      p.id,
      p.name,
      p.price,
      p.stock,
      p.description, 
      p.category_id, 
      c.name AS category
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
  `;

  let values = [];

  if (search) {
    sql += " WHERE p.name LIKE ?";
    values.push(`%${search}%`);
  }

  db.query(sql, values, callback);
};
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
