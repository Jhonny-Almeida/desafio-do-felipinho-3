class heroi {
 constructor(nome, idade, tipo){
    this.heroi = nome
    this.idade = idade
    this.tipo = tipo // guerreiro - mago - monge - ninja
 }
}
 tipo = "monge"
function atacar(){
   if(tipo === "mago"){
      console.log("o " + tipo + " atacou usando magia")
   }
   else if(tipo === "guerreiro"){
      console.log("o " + tipo + " atacou usando espada")
   }
   else if(tipo === "monge"){
      console.log("o " + tipo + " atacou usando artes marciais")
   }
   else if(tipo === "ninja"){
      console.log("o " + tipo + " atacou usando shurikens")
}
}
atacar()