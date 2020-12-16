<template>
  <div id="UserBalance">
    <h2></h2>
    <h2>
      Tu saldo es: <span> {{ valor }} COP </span>
    </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserBalance",
  data: function () {
    return {
      valor: 0,
    };
  },
  created: function(){
        this.tipo = this.$route.params.tipo
        let self = this

        axios.get("https://desafio6-frontend.herokuapp.com/user/ingresos/" + this.tipo)
        .then((result) => {
            self.valor = result.data.valor
            })
            .catch((error) => {
            alert("ERROR Servidor");
            });
  }         
}
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