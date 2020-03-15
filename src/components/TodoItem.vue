<template>
    <li v-bind:class="{done: todo.completed}">
        <span>
            <input
                type="checkbox"
                v-bind:checked="todo.completed"
                @change="todo.completed = !todo.completed"
            />
            <strong>{{ index + 1 }}</strong>
        </span>
        {{ todo.title | toUpperCase }}
        <button
            class="rm"
            @click="$emit('remove-todo', todo.id)"
        >
            &times;
        </button>
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        filters: {
            toUpperCase(value) {
                return value.toUpperCase();
            }
        }
    }
</script>

<style scoped>
    li {
        display: flex;
        border: 1px solid #bebebe;
        padding: 10px;
        justify-content: space-between;
    }

    li + li {
        margin-top: 2px;
    }

    input {
        margin-right: 10px;
    }

    .rm {
        color: #fff;
        background: #f00;
        border-radius: 50%;
        border: none;
    }

    .done {
        text-decoration: line-through;
    }
</style>
