<template>
    <div>
        <h2>Todos</h2>
        <router-link to="/">Home</router-link>
        <hr>
        <AddTodo @add-todo="addTodo" />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
        </select>
        <hr>
        <Loader v-if="loading" />
        <TodoList
                v-else-if="filteredTodos.length"
                v-bind:todos="filteredTodos"
                @remove-todo="removeTodo"
        />
        <p v-else>No todos!</p>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';

    import TodoList from '../components/TodoList';
    import AddTodo from '../components/AddTodo';
    import Loader from '../components/Loader';

    export default {
        name: 'App',
        components: {
            TodoList,
            AddTodo,
            Loader
        },
        computed: {
            filter: {
                get() {
                    return this.$store.state.filter;
                },
                set(value) {
                    this.updateFilter(value);
                }
            },
            loading() {
                return this.$store.state.loading;
            },
            filteredTodos () {
                return this.$store.getters.filteredTodos(this.filter);
            }
        },
        mounted() {
            this.fetchTodos();
        },
        methods: {
            ...mapMutations([ 'removeTodo', 'addTodo', 'updateFilter', 'updateFilter' ]),
            ...mapActions([ 'fetchTodos' ])
        }
    }
</script>
