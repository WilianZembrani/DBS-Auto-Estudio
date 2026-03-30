export async function listOffices() {
  try {
    const response = await fetch("http://localhost:3000/api/offices");
    if (!response.ok) {
      throw new Error("Erro ao listar serviços");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createOffice(dados) {
  try {
    const response = await fetch("http://localhost:3000/api/offices", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar serviço");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
