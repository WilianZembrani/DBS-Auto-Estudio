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
      c.name AS category,
      pi.url AS image_url
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id
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

  db.query(sql, values, (err, rows) => {
    if (err) return callback(err);

    const grouped = {};

    rows.forEach((row) => {
      if (!grouped[row.id]) {
        grouped[row.id] = {
          id: row.id,
          name: row.name,
          price: row.price,
          stock: row.stock,
          description: row.description,
          category_id: row.category_id,
          category: row.category,
          images: [],
        };
      }

      if (row.image_url) {
        grouped[row.id].images.push(row.image_url);
      }
    });

    const result = Object.values(grouped);

    callback(null, result);
  });
};
exports.create = (dados, callback) => {
  const sql = "INSERT INTO products SET ?";
  db.query(sql, dados, callback);
};

exports.update = (id, dados, callback) => {
  const { images, ...productData } = dados;

  const sql = "UPDATE products SET ? WHERE id = ?";

  db.query(sql, [productData, id], (err) => {
    if (err) return callback(err);

    // 👉 só adiciona novas imagens, NÃO apaga as antigas
    if (images && images.length > 0) {
      const values = images.map((img) => [id, img]);

      const sqlInsert = `
        INSERT INTO product_images (product_id, url)
        VALUES ?
      `;

      return db.query(sqlInsert, [values], (err2) => {
        if (err2) return callback(err2);

        return callback(null, {
          message: "Produto atualizado e novas imagens adicionadas",
        });
      });
    }

    return callback(null, {
      message: "Produto atualizado sem alteração de imagens",
    });
  });
};

exports.delete = (id, callback) => {
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], callback);
};
