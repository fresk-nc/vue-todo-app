<template>
  <div id="app">
    <h1>Todo application</h1>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr>
    <TodoList
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo
  },
  data: () => {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed);
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed);
      }

      return this.todos;
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => this.todos = json)
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
