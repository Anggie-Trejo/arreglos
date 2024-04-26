//Preparar constante 
//declarar funcion por aceptar un arr por parametro
//loo por el arr 
//tomar el valor abs de c/elemento
//sumar todos los valores absolutos


const res1=[-1,5,6,3];
const res2=[14,3.5,6];
const res3=[8,15,100];

function sumResistance(arr)
{
    const arr2=[];
    arr.forEach((e) => arr2.push(Math.abs(e)));
    let res = 0; 
    arr2.forEach((e) => (res = res + e));
    console.log(`${res} ohms`);
}

function sumResistance2(arr)
{
    let res=0;
    for(let i=0; i<arr.lenght; i++)
     {
        res += Math.abs(arr[i]);
     }
     return res;
}
//push arregla elementos en la ultima posicion 
sumResistance(res3);
const try2=sumResistance2(res1);
console.log(try2);
