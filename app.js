var app = new Vue({
el: "#Monty",
data: {
    contador: 100,
   
},
methods: {
    Agregar(){

        this.contador = this.contador + 20 ;
    },
    Disminuir(){
      
        this.contador = this.contador - 15 ;
    },
}
});
