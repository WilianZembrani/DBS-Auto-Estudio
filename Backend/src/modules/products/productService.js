const db = require("../../database/connection");
const { search } = require("./productRoutes");

exports.saveImages = (productId, imagens, callback) => {
  const values = imagens.map((url) => [productId, url]);

  db.query(
    "INSERT INTO product_images (product_id, url) VALUES ?",
    [values],
    callback,
  );
};

exports.list = (search, category_id, callback) => {
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
WHERE 1=1
  `;

  let values = [];

  if (search) {
    sql += `
      AND (
        p.name LIKE ?
        OR p.description LIKE ?
        OR c.name LIKE ?
      )
    `;
    values.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  if (category_id) {
    sql += ` AND p.category_id = ?`;
    values.push(category_id);
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
