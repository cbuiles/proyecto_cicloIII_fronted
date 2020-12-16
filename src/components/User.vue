<template>
  <div id="User">
    <form method="post">
      <label for="ingreso" id="enunciado">Ingreso:</label>
      <input type="text" name="valor" v-model="valor" />
      <label for="tipo" id="enunciado">Tipo de ingreso:</label>

      <div id="seleccion-ingreso">
        <select name="ingreso" id="ingreso" v-model="seleccionado">
          <option value="" disabled>Seleccione un ingreso</option>
          <option value="salario" selected>Salario</option>
          <option value="ocasional">Ocasional</option>
          <option value="inversion">Inversión</option>
        </select>
      </div>

      <input type="button" value="Enviar" @click="putIngresos" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data: function () {
    return {
      seleccionado: "",
      valor: "",
    };
  },
  methods: {
    putIngresos() {
      axios
        .put("http://127.0.0.1:8000/user/ingresos/", {
          tipo: this.seleccionado,
          valor: parseInt(this.valor),
          constante: true,
        })
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style>
#User {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
form {
  padding: 0;
  border: 1px solid black;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #283747;
  color: #e5e7e9;
}

input[type="text"] {
  border: 1px solid #999;
  border-radius: 0;

  -webkit-appearance: none;
}

#seleccion-ingreso *,
input[type="text"] {
  width: 200px;
  height: 30px;
}

input[type="button"] {
  cursor: pointer;
  margin-top: 30px;
  display: block;
  width: 200px;
  height: 30px;
  background-color: #e5e7e9;
}
#enunciado {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0 20px 0;
}
</style>