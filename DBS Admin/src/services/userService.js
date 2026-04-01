export async function loginService(dados) {
  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!response.ok) {
      throw new Error("Erro ao fazer login");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function listEmployees() {
  try {
    const response = await fetch("http://localhost:3000/api/users/employees", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Erro ao listar funcionários");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(dados) {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!response.ok) {
      throw new Error("Erro ao criar usuário");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createEmployee(dados) {
  try {
    const response = await fetch("http://localhost:3000/api/users/employees", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!response.ok) {
      throw new Error("Erro ao criar funcionário");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(id, dados) {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!response.ok) {
      throw new Error("Erro ao atualizar usuário");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Erro ao deletar usuário");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
