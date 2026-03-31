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
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
