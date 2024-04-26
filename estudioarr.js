const c=Array.of("X","Y", "Z",9,8,7); //array of (del constuctor arreglos)
console.log(c);

const d=Array(100).fill(false);//para llenar un arreglo de 100 elementos con false 
console.log(d);

const colores=["Rojo","Verde","azul"];
console.log(colores);//cree un arreglo colores 
//va a imprimir "Rojo", "Verde", "azul"

colores.push("negro");//es para agregar un elemento a, en este 
//caso agregar negro al arreglo colores 
console.log(colores);
//va a imprimir "Rojo", "Verde", "azul", "negro"

colores.pop();//pop quita el ultimo elemento del arreglo 
console.log(colores);//va a imprimir  rojo, verde, azul

colores.forEach(function(el,index)//el es de elementos 
//index o i es de la posición 
{
  console.log(`<li id="${index}" > ${el}</li>`);
 } );
 //el id le esta dando un id 
 /**Imprime:
  * <li id="0" > Rojo </li>
  * <li id="1" > Verde</li>
  * <li id="2" > azul </li>
  * 
  */

 var arr1=[20,15,2,3,5];
 function recorrer(el)
 {
    console.log(el)
 }
 //arr1.forEach(recorrer); //imprime los elementos del arreglo

 //ordenar elementos de array 
 function menor(a,b)
 {
    return a-b;//para ordenar de menor a mayor 
    //b-a para ordenar de mayor a menor
 }
 var ordenando=arr1.sort(menor)//crea otro arreglo ordenado del anterios 
 //sort es una funcion para devolver un valor numerico
 ordenando.forEach(recorrer) 


 function suma(valorAnt, el)
 {
    return valorAnt+el//suma el valor anterior + el actual
 }
  var sumatoria=arr1.reduce(suma)//aqui declaramos la variable
  console.log("total:")
  console.log(sumatoria) 

 //filtrar elementos del array 
 function filter(el)
 {
    return el>10

 } 
  var filtrado=arr1.filter(filter)

  console.log("elementos mayores a 10")
  filtrado.forEach(recorrer);
