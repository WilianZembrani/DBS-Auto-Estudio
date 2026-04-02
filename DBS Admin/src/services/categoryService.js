export async function listCategories() {
  const response = await fetch("http://localhost:3000/api/categories");
  if (!response.ok) {
    throw new Error("Erro ao listar categorias");
  }
  const data = await response.json();
  return data;
}
