export async function createProduct(dados) {
  const response = await fetch("http://localhost:3000/api/products/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) {
    throw new Error("Erro ao criar produto");
  }
  const data = await response.json();
  return data;
}
export async function listProducts(search = "", category_id = "") {
  const response = await fetch(
    `http://localhost:3000/api/products?search=${encodeURIComponent(search)}&category_id=${encodeURIComponent(category_id)}`,
  );

  if (!response.ok) {
    throw new Error("Erro ao listar produtos");
  }

  const data = await response.json();
  return data;
}
export async function updateProduct(id, dados) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) {
    throw new Error("Erro ao atualizar produto");
  }
  const data = await response.json();
  return data;
}

export async function productDelete(id) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Erro ao deletar produto");
  }
  const data = await response.json();
  return data;
}
