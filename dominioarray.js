//Saber el dominio de un arreglo 
/**Escribe una función para determinar si una matriz es 
 * positivamente dominante 
 * 
 * Una matriz es postitivamente dominante cuando la 
 * mayoria de sus elementos son positivos 
 */

const arreglito=[-1,-3,5,4,6767];

function recorrer(el)
{
  console.log(el)
}
console.log(arreglito)


function compara(el)
{
    return el <  0
}
var negativos= arreglito.filter(compara)
//declaro el arreglo negativos que guardará mis numeros negativos 
 console.log (negativos)
 //El arreglo tiene 5 elementos 
if (negativos.length>=3)//si 3 o mas de sus elementos son negativos 
//en esta caso el arreglo negativos contiene los elementos que son negativos 
//si su tamaño es mayor que 3
//su dominio será negativo 
{
   
   console.log("falso , el dominio es negativo")
}else 
{
    //si es menor entonces será dominio positivo 
    console.log("verdadero, el dominio es positivo")
}


 