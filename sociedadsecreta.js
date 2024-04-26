//Preparar constantes 
//prpearar funciones 
//obtener la primer letra de cada nombre 
//ordenar alfabeticamente 
//imprimir 

const member1= ["Esperanza","Franco","Nia"];
const member2= ["Phoebe","Ross","Chandler","Josy","Monica","Rachel"];
const member3= ["Harry","Ron","Hermione"];

function secretName(arr)
{
    let res=[];
    arr.forEach((e) => res.push(e.charAt(0)) );
    return res.sort().join("");// el join lo junta sin las comillas
}   
console.log(secretName(member1));
console.log(secretName(member2));
console.log(secretName(member3));