<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button class="btn btn-primary" @click="btnClickEvent">
        <slot name="icon"></slot>
    </button>
  </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props:{
        message:{
            default:'default input'
        }
    },
    methods:{
      btnClickEvent(){
        alert("先弹出默认文案");
        this.$emit('子组件btnClickEvent');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
