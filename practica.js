let num1 = 14322;
 let value = num1 % 2;
if(value === 0){
console.log("numero par");
console.log(num1);
}
else{

    console.log("numero impar");
}


const banana = 30.5, orange = 10, apple = 15.5;

 let pagoTotal = banana + orange + apple;
 let descuento = (30/100)*pagoTotal;
 let costoFinal = pagoTotal - descuento;

 console.log(`El pago total es: ${pagoTotal}`);
 console.log(`El descuento es: ${descuento}`);
 console.log(`El costo final es: ${costoFinal}`);

const valor = 'hola';
if(valor){
    console.log("es verdad");
}
if(valor=="hola"){
    console.log("es verdad");
}
else{
    console.log("es falso")
}

const monto = 1000;
 const deuda =900;
 const tarjeta = false;
 const prestamo = true;

//[CONDICIONALES]

 // condicional simple
if(monto>=deuda){
console.log("puedes pagar")
}else{
console.log("no puedes")
}
// operador ternario
if (monto>=deuda ? console.log("pagas"):console.log("no pagas"));

// condicional anidado

if(monto>=deuda){
console.log("puedes pagar tu deuda");
}else if(tarjeta === true){
console.log("puedes pagarlo con tarjeta");
}else if(prestamo === true){
    console.log("puedes pagarlo con prestamo");  
}else{
    console.log("no puedes pagralo");
}

//switch-case
const paymethod = prestamo;
switch(paymethod){
case prestamo:{
console.log("puedes realizar tu pago con prestamo");
break;
}
case tarjeta:{
console.log("pudes realizar el pago con tarjeta de credito");
break;
}
default: 
console.log("no se puede pagar con ningun metodo");
break;
}

let edad = 27
if (edad) {
 var dobleDeEdad = edad + edad
 console.log(`El doble de tu edad actual es ${dobleDeEdad}`) // El doble de tu edad actual es 54
 console.log(`edad actual ${edad} años`); // edad actual 27 años
}
console.log(`Doble ${dobleDeEdad}`);// doble 54
console.log(`${edad} años` );
console.log(num1);





/*USO DE METODOS DE STRING */

const fullName = 'jose diaz';
//length()
console.log(fullName.length); // devuelve la longitud de la cadena

const company = "GeekFlare";

//toUpperCase
const upperCaseCompany = company.toUpperCase();
console.log(upperCaseCompany); // DEvuelve la cadena escrita en mayusculas

 //toLowerCase()
const lowerCaseCompany = company.toLowerCase();
console.log(lowerCaseCompany); // Devuelve la  cadena escrita en minusculas

//slice()
console.log(company.slice(4 , 7)); // Nos devuelve un segmento de cadena "Fla"
console.log(company.slice(-9 , -5));   // Nos devuelve un segmento de cadena "Geek"

//substring()
console.log(company.substring(4, 6)); // devuelve una subcadena  "Fl"

// reeplace()
const statement = "Visit the site Google";
console.log(statement.replace("Google", "GeekFlare"));

//indexOf()
console.log(company.indexOf("e"));// devuelve "1"
console.log(company.indexOf("e", 4)); //devuelve "8"

//split()
const statement1 = "Visit, the, site, GeekFlare";
console.log(statement1.split(" "));
console.log(statement1.split(", "));