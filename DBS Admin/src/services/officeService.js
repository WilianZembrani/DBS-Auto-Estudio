export async function listOffices(search = "") {
  try {
    const response = await fetch(
      `http://localhost:3000/api/offices?search=${search}`,
    );
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

export async function updateOffice(id, dados) {
  try {
    const response = await fetch(`http://localhost:3000/api/offices/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar serviço");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteOffice(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/offices/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Erro ao deletar serviço");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
