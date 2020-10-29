export default {
    methods: {
        formatearFechaHora(fyh) {
            return new Date(fyh).toLocaleString()
        },
        importeEnPesos(valor) {
            return "$" + valor
        }
    }
    
}