export async function createProduct(dados) {
  const response = await fetch("http://localhost:3000/api/products/", {
    method: "POST",
    body: dados,
  });
  if (!response.ok) {
    throw new Error("Erro ao criar produto");
  }
  return await response.json();
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
  const formData = new FormData();

  formData.append("name", dados.name || "");
  formData.append("category_id", Number(dados.category_id));
  formData.append("description", dados.description || "");
  formData.append("stock", dados.stock ? Number(dados.stock) : 0);
  formData.append("price", dados.price ? Number(dados.price) : 0);

  dados.images?.forEach((img) => {
    if (img instanceof File) {
      formData.append("imagens", img);
    }
  });

  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar produto");
  }

  return await response.json();
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
