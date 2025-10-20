export async function login({ email, password }) {
    try {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error trying to login.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
