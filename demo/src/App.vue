<template>
  <div id="app">

    <router-view />
  </div>
</template>
<script>

export default {
  
  data() {
    return {

    }
  },
  methods: {


  },

  created() {

  },
  computed: {

  }
}
</script>
<style>
#app {
  text-align: center;
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  background-color: rgba(87, 86, 86, 0.2);
  border-radius: 25px;
  box-shadow: 5px 2px 35px -7px #ff9a9e;
}

body {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-90deg, #76def3 0%, #86c4ee 100%);
}
</style>
