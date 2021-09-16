function obj(){
    let meuCarro = new Object();
    meuCarro.marca = "Corolla";
    meuCarro.ligar = function(){
        console.log("Ligando meu carro...Vrummmmm!!!")
        
    }
   console.log("Marca do Meu Carro: " + meuCarro.marca)
   meuCarro.ligar();
};
obj();