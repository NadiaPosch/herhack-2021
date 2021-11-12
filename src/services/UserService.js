export async function getAllUsers() {
    const response = await fetch("http://localhost:9008/api/user");
    return response.json();
}

export async function getUserById(id) {
    const response = await fetch(`http://localhost:9008/api/user/${id}`);
    return response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: data }),
    });
    return response.json();
}

export async function getUserByUsername(name) {
    if (!name) return null;

    const users = await getAllUsers();
    const id = users.find(({ username }) => username === name)?.id;
    const result = await getUserById(id);
    return !result.errors ? result : null;
}
