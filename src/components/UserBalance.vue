<template>
  <div id="UserBalance">
    <div id="container">
      <h2>Tu saldo es:</h2>
      <p>
        <span> {{ balance }} COP </span>
      </p>
      <img src="../assets/save_money.svg" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserBalance",
  data: function () {
    return {
      balance: 0,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap");

#UserBalance {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
#container {
  width: 400px;
  height: 400px;
  background-color: aliceblue;
  border-radius: 16px;
  border: 2px solid white;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
}
#UserBalance h2 {
  font-size: 50px;
  color: #283747;
}
span {
  color: crimson;
  font-weight: bold;
  font-size: 40px;
  background-image: url(../assets/save_money.svg);
}
img {
  width: 150px;
  height: 150px;
}
</style>