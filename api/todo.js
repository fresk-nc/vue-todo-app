export default {
    async fetchTodos() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
        return await response.json();
    }
}
