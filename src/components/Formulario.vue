<template>
  <div class="jumbotron">
    <h2>Ingreso de gastos</h2>
    <hr />

    <form novalidate autocomplete="off" @submit.prevent="enviar()">
        <!-- ------------ -->
        <!-- CAMPO NOMBRE -->
        <!-- ------------ -->
        <div class="form-group">
              <label for="nombre">Nombre</label>
              <input 
                  type="text"
                  id="nombre"
                  class="form-control"
                  v-model="$v.f.nombre.$model"
              >
              <!-- CARTELES DE VALIDACIÓN -->
              <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                  <div v-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos {{$v.f.nombre.minLength.$params.min}} caracteres</div>
                  <div v-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener como máximo {{$v.f.nombre.maxLength.$params.max}} caracteres</div>
              </div>
        </div>
        <!-- ------------------- -->
        <!--  CAMPO DESCRIPCION  -->
        <!-- ------------------- -->
        <div class="form-group">
              <label for="edad">Descripcion</label>
              <input 
                  type="text"
                  id="descripcion"
                  class="form-control"
                  v-model="$v.f.descripcion.$model"
              >
              <!-- CARTELES DE VALIDACIÓN -->
              <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
              </div>
        </div>
        <!-- --------------- -->
        <!--  CAMPO IMPORTE  -->
        <!-- --------------- -->
        <div class="form-group">
              <label for="importe">Importe</label>
              <input 
                  type="number"
                  id="importe"
                  class="form-control"
                  v-model.number="$v.f.importe.$model"
              >
              <!-- CARTELES DE VALIDACIÓN -->
              <div v-if="$v.f.importe.$error && $v.f.importe.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.importe.required.$invalid">Este campo es requerido</div>
              </div>
        </div>
        <!-- ------------ -->
        <!-- BOTÓN ENVÍO  -->
        <!-- ------------ -->
        <div class="form-group">
              <input 
                  type="submit"
                  :disabled="$v.$invalid"
                  class="btn btn-success mt-4"
                  value="Agregar gasto"
              >
        </div>
    </form>
  </div>
</template>

<script>
  import { required, minLength, maxLength } from '@vuelidate/validators'

  export default  {
    name: 'src-components-formularioVue',
    props: [],
    mounted () {
    },
    data () {
      return {
        f: this.resetForm(),
        url : 'https://5f92eb01eca67c001640a201.mockapi.io/formulario'
      }
    },
    validations: {
      f: {
        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },
        descripcion: { 
          required
        },
        importe: { 
          required,
        }
      }
    },
    methods: {
      /* Retardo */
      delay : ms => new Promise(resolve => setTimeout(resolve, ms)),

      /* Envio de datos del formulario a MockAPI */
      async sendDatosFormAxios(datos) {
        try {
          let res = await this.axios.post(this.url, datos, {'content-type': 'application/json'})
          await this.delay(500)
          console.log(res.data)
        }
        catch(error) {
          console.log('HTTP POST ERROR', error)
        }
      },
      
      /* envío del formulario */
      async enviar() {
        this.$v.$touch() //Chequea las validaciones
        if(!this.$v.$invalid) {
          let form = this.f
          console.log(form)
          await this.sendDatosFormAxios(form)
          this.f = this.resetForm()
          this.$v.$reset()
        }
      },
      
      /* valor inicial de los campos de datos del formulario */
      resetForm() {
        return {
          nombre: '',
          descripcion : '',
          importe : ''
        }
      }
    }  
  }

</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
