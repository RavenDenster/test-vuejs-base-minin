<template>
    <div>
      <h2>Todo application</h2>
      <router-link to="/">Home</router-link>
      <hr>
      <AddTodo
        @add-todo="addTodo"
      />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
      <hr>
      <Loader v-if="loading"/>
      <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
      />
      <p v-else>No todos!</p>
    </div>
  </template>

  <script>
  import AddTodo from '@/components/AddTodo.vue'
  import TodoList from '@/components/TodoList.vue'
  import Loader from '@/components/Loader.vue'
  
  export default {
    name: 'App',
    data() {
      return {
        todos: [],
        loading: true,
        filter: 'all',
      }
    }, 
    computed: { // filteredTodos работает как обычная переменная
        filteredTodos() {
            if(this.filter === 'all') {
                return this.todos
            }

            if(this.filter === 'completed') {
                return this.todos.filter(t => t.completed)
            }

            if(this.filter === 'not-completed') {
                return this.todos.filter(t => !t.completed)
            }
        }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false
        })
    },
    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id)
      },
      addTodo(todo) {
        this.todos.push(todo)
      }
    },
    components: {
      TodoList, AddTodo, Loader
    },
  }
  </script>