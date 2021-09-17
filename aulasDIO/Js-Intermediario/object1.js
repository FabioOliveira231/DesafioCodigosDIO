// Creating Objects with key : value

let meuCarro = {
    modelo : "Corolla",
    ano : 2018,
    exibeInfo : function () {
        console.log("Meu carro é do Modelo: " + this.modelo + " e ano: " + this.ano);
    }
};
meuCarro.exibeInfo();

