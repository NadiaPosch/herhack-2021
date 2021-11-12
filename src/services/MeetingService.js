export async function getAllMeetings() {
    const response = await fetch("http://localhost:9008/api/meeting");
    return response.json();
}

export async function getMeetingById(id) {
    const response = await fetch(`http://localhost:9008/api/meeting/${id}`);
    return response.json();
}

export async function createMeeting(data) {
    const response = await fetch(`/api/meeting`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ meeting: data }),
    });
    return response.json();
}

export async function getMeetingByName(name) {
    if (!name) return null;
    const meetings = await getAllUsers();
    const id = meetings.find(({ name }) => name === name)?.id;
    const result = await getUserById(id);
    return !result.errors ? result : null;
}
