<template>
    <ul>
        <TodoItem
            v-for="(todo, i) in todos"
            v-bind:key="todo.id"
            v-bind:todo="todo"
            v-bind:index="i"
            @remove-todo="removeTodo"
        />
    </ul>
</template>

<script>
    import TodoItem from './TodoItem';

    export default {
        name: 'TodoList',
        components: {
            TodoItem
        },
        props: {
            todos: {
                type: Array
            }
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id);
            }
        }
    }
</script>

<style scoped>
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
</style>
