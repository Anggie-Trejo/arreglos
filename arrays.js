console.log("hola");
//ARRAY 
const products=["Maruchan", "Dragoncitos","café"];
console.log(products);
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);

const products2=["Maruchan",20.0,"Dragoncitos",2.0];
console.log(products2);

const matrix=[[0,1],[2,3],[4,5]];
console.log(matrix);
console.log(matrix[2][1]);
console.log(matrix[1][0]);

for(let i=0; i<=2; i++)
{
    console.log(products[i]);
}

for(let i=0; i< products.length; i++)
{
    console.log(products[i]);
}

//while 
//do while 
let count=0;
while(count <=2)
{
    console.log(count)
    count++
}

do
{
 count++
 console.log(`count is: ${count}`)
} while (count <=100)

 // productos2.forEach((element,index) => console.log(element,index)); 
 
 function foo(x)
 {
    console.log(`El item actual es: ${x}`);
 }
 products2.forEach(e => foo(e));