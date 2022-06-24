function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let newArray=[];
  for (let i = 0;i < array.length;i++){
   if (array[i]>100){
    newArray.push(array[i]);
   }
  }
  return newArray;
}


mayorA=[100,55,22,120,101,162,33,165,2]
mayorACien(mayorA)