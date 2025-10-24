export async function getUserAlmbums(userId) {
    try {
        const response = await fetch(`http://localhost:3001/albums/${userId}`);
        const  data  = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
