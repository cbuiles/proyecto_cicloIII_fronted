<template>
  <div id="app">
    <div class="header">
      <h1>SmartSpend APP</h1>
      <nav>
        <button @click="init">Inicio</button>
        <button @click="ingresos">Ingresos</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    init: function () {
      this.$router.push({ name: "user" });
    },
    ingresos: function () {
      this.$router.push({ name: "user_balance" });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap");
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 5vh;
  min-height: 100px;
  color: #e5e7e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.header h1 {
  width: 20%;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.header nav button {
  margin: 15px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 90vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
