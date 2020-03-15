import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        loading: false,
        filter: 'all'
    },
    mutations: {
        saveTodos(state, todos) {
            state.todos = todos;
            state.loading = false;
        },
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, id) {
            state.todos = state.todos.filter(t => t.id !== id);
        },
        updateFilter(state, filter) {
            state.filter = filter;
        }
    },
    actions: {
        async fetchTodos({ commit }) {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            const json = await response.json();

            commit('saveTodos', json);
        }
    },
    getters: {
        filteredTodos: (state) => (filter) => {
            if (filter === 'completed') {
                return state.todos.filter(t => t.completed);
            }

            if (filter === 'not-completed') {
                return state.todos.filter(t => !t.completed);
            }

            return state.todos;
        }
    }
});
