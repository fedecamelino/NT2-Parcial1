<template>

  <div class="jumbotron">
    <h2>Tabla de gastos</h2>
    <hr />

    <div v-if="gastos.length">
      <table class="table text-left"> 
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Importe</th>
          <th scope="col">Fecha</th>
        </tr>
        <tr v-for="(gasto, index) in gastos" :key="index">
          <td scope="col"> <p>{{ gasto.id }}</p> </td>
          <td scope="col"> <p>{{ gasto.nombre }}</p> </td>
          <td scope="col"> <p>{{ gasto.descripcion }}</p> </td>
          <td scope="col"> <p>{{ importeEnPesos(gasto.importe) }}</p> </td>
          <td scope="col"> <p>{{ formatearFechaHora(gasto.createdAt) }}</p> </td>                   
        </tr>
        <tr>
          <td scope="col"> <u><p>Gasto total</p></u> </td>
          <td scope="col"> <p :style="{color: colorGastoTotal}">{{gastoTotal}}</p> </td>
        </tr>
      </table>
    </div>
    <div v-else class="alert alert-warning"> <h5>No hay gastos cargados</h5> </div>
  </div>

</template>

<script>

  import filters from '../filters'

  export default  {
    name: 'src-components-tabla',
    props: [],
    mixins: [filters],
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        url: 'https://5f92eb01eca67c001640a201.mockapi.io/formulario',
        gastos: []
      }
    },
    methods: {
      /* Pedido de datos almacenados en MockAPI */
      async getDatosFormAxios() {
        try {
          let res = await this.axios(this.url)
          this.gastos = res.data
          console.log(res.data)
        }
        catch(error) {
          console.log('HTTP GET ERROR', error)
        }
      }
    },
    computed: {
      gastoTotal() {
        let total = 0
        this.gastos.forEach(gasto => {
          total = total + gasto.importe
        })
        return total
      },
      colorGastoTotal() {
        let color
        if (this.gastoTotal < 1000) {color = 'green'}
        else if (this.gastoTotal>= 1000 && this.gastoTotal<=5000) {color = 'magenta'}
        else {color = 'orange'}

        return color
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {

  }
</style>
