<template>
  <div id="User">
    <form method="post">
      <label for="ingreso" id="enunciado">Ingreso:</label>
      <input type="text" name="valor" v-model="valor" />
      <label for="tipo" id="enunciado">Tipo de ingreso:</label>

      <div id="seleccion-ingreso" class="select">
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
  border: 2px solid black;
  line-height: 28px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  background-color: #1947e5;
  color: #e5e7e9;
}

input[type="text"] {
  border: 1px solid #999;
  border-radius: 0;

  -webkit-appearance: none;
}

input[type="text"] {
  width: 150px;
  height: 20px;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  border: 1px solid #000;
  font-size: 14px;
  line-height: 28px;
  color: #000;
  cursor: pointer;
}

select {
  /* Additional resets for further consistency */
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}

.select {
  width: 150px;
  height: 20px;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  border: 1px solid #000;
  font-size: 13px;
  line-height: 28px;
  color: #000;
  cursor: pointer;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 1.5em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  filter: drop-shadow(0px 5px 0px #18191f);
}

input[type="button"] {
  margin-top: 20px;
  width: 200px;
  background-color: #18191f;
  color: #fff;
  border: none;
  height: 50px;
  border-radius: 16px;
  font-size: 21px;
  font-weight: 800;
}
#enunciado {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0 20px 0;
}
</style>