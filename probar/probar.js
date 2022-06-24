
let a
a = Math.pow(2, 3) + 4;
console.log(a)









class Utilidad {
    constructor (nombre,telefono,eMail){
        this.nombre = nombre,
        this.telefono =telefono, 
        this.eMail = eMail

    }
}

const util = new Utilidad ('seba','433546','nose');
console.log(util);



const readline =require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('seleccione opcion', (opt)=>{
    const pobando = new Utilidad (opt);
    console.log(opt)
    readline.close();
})