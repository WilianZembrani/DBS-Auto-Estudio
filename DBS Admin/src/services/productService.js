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
