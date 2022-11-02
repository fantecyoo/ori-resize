<template>
  <div class="hello">
    <div class="container">
      <div style="height:100px;width: 100px;">1</div>
      <Resizer />
      <div style="flex:1">2</div>
    </div>
  </div>
</template>

<script>
import Resizer from './resize/resizer.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Resizer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.container{
  display: flex;
  width: 100%;
}
</style>
