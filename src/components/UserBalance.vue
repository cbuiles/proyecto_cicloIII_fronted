<template>
  <div id="UserBalance">
    <h2></h2>
    <h2>
      Tu saldo es: <span> {{ balance }} COP </span>
    </h2>
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
#UserBalance {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#UserBalance h2 {
  font-size: 50px;
  color: #283747;
}
#UserBalance span {
  color: crimson;
  font-weight: bold;
}
</style>