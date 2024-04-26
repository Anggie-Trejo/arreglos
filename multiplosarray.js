//var numero;
//var longitud;
const arreglomultiplos=(numero, longitud)=>
{
    var arreglo=[];
    var x=1;
  for (let i=1; 1<=longitud;i++)
  {
    arreglo.push(numero*x);
    x++;
  }
  return arreglo;
};
console.log(arreglomultiplos(2,5));




