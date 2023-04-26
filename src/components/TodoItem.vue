<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" ref="checkbox" v-model="todo.completed">   <!--при изменение checkbox меняется todo.completed  v-on:change="todo.completed = !todo.completed" -->
            <strong>{{index + 1}}</strong>
            {{ uppercase }}
        </span>
        <button class="rm" 
            v-on:click="$emit('remove-todo', todo.id)"
        >&times;</button> <!-- emit это обращение к родительскому классу -->
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true // если todo не передан то компанент не фунгует 
        },
        index: Number
    },
    computed: {
        uppercase() {
            // console.log(value)
            return this.todo.title.toUpperCase()
        }        
    },
    updated() {
        this.$refs.checkbox.checked = this.todo.completed
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;   
    }
    .rm {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    input{
        margin-right: 1rem;
    }
    .done {
        text-decoration: line-through;
    }
</style>