# [JAVA SCRIPT]
Lenguaje de programacion interpretado y de alto nivel,que surgió como una tecnología del lado del navegador para hacer que las aplicaciones web fueran más dinámicas.
# CARACTERISTICAS DE JAVASCRIPT
## Interpretado y orientado a objetos- 
Con el lenguaje Javascript no se realiza un proceso de compilación a código máquina si no que necesita de un interprete para poder obtener el lenguaje máquina. 
## Dinamicamente tipado- 
En Javascript no se define el tipo de una variable a la hora de instanciarla. El tipo de la variable se asigna atendiendo al valor que le asignemos a la variable. Además si vamos cambiando el valor asignado a la variable, esta podrá cambiar de tipo de datos. Es por esto que al tipado de Javascript, además de débil se le considera como tipado dinámico. 
## Multiparadigma- 
Soporta multiples formas de trabajar, por lo que es mas versatil.(Estudiaremos  el enfoque estructurado)

# QUE ES UNA VARIABLE
Una variable es un elemento (dato) con nombre y valor, este valor puede cambiar durante el curso de la ejecución de un programa. 
## Variablas en JavaSCript
JavaScript Utiliza variables como nombres simbólicos para valores en tu aplicación. Los nombres de las variables, llamados identificadores, se ajustan a ciertas reglas. Un identificador de JavaScript debe comenzar con una letra, un guión bajo ( _ ) o un signo de dólar ( $ ).
Estas variables pueden  declararse de la siguiente manera:

1. var: miNombre = "jose";  // Para declarar variables locales y globales.Si  una variable se declara con  VAR de manera local, tambien estara presente de manera global.               
2. let: miApellido = "diaz"; // Para declarar una variable global y local(con ámbito de bloque),ademas se puede redefinir la variable. si se declara dentro del bloque entonces no estara disponible en todo el codigo
3. const: miEdad = "32";    // Para declarar una variable  global y local (con ámbito de bloque), si se declara dentro de un bloque no se puede tener acceso desde cualquier parte del codigo. Ademas no se puedde redefinir la variable.

![alt text](<Captura desde 2024-05-13 17-25-05.png>)



# TIPOS DE DATOS
JavaScript tiene la característica de ser un lenguaje débilmente tipado con tipado dinámico, es decir, que todos los tipos de datos se pueden asignar o reasignar a las variables que los almacenan. Por ejemplo, una variable que almacena un dato numérico puede posteriormente almacenar un dato de tipo booleano.
## Ejemplo de tipos de datos
1. Undefined: Que no tiene un valor asignado
2. Boolean: Representa una entidad logica (tue, false)
3. Number: Datos numericos
4. String:  Se utiliza para representar datos textuales. 
5. BigInt: l tipo BigInt es un primitivo numérico en JavaScript que puede representar números enteros con precisión arbitraria. 
6. Symbol: Un símbolo es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto.

![alt text](<Captura desde 2024-05-13 17-23-43.png>)



## String-Metodos
Cuando se trata de JavaScript, un método es una función puesta en un objeto o una serie de instrucciones para completar una tarea única. por ejemplo: si desea saber la logitud de una cadena, eliminar espacios en blanco o reemplazar cierta parte de la cadena recurrimos a los metods propios de string disponibles length() trim() replace() respectivamente.

```bash
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
```

## Numeros
Esta teoria se usa representar y manipular valores numéricos cómo 37 o -9.25. El constructor "Number" contiene constantes y métodos para trabajar con números. Valores de otro tipo pueden ser convertidos a números usando la función Number().

![alt text](<Captura desde 2024-05-15 17-49-32.png>)

## booleanos
## condicionales
Los condicionales son estructuras de control de flujo que permiten a un programa tomar decisiones basadas en la evaluación de una o varias condiciones.
Los condicionales nos permiten realizar bifurcaciones en el flujo del programa, ejecutando ciertas instrucciones solo si se cumple una determinada condición.

1. condicional simple  

```bash
if(){
    ---codigo---
}else{
    ----codigo----
}
```

2. condicional anidado 
```bash
if(){
    --codigo--
}else if(){
    ----codigo--
}else if(){
    --codigo----
}else if(){
    ---codigo---
}else{
    ---codigo---
}
```
2. switch-case   
```bash
switch(){
    case(){
        --codigo---
        break;
    }
    case(){
        --codigo---
        break;
    }
    case(){
        --codigo---
        break;
    }
    default:
    ----codigo---
    break;
}
```

## OPerador ternario
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
```bash
if (monto>=deuda ? console.log("pagas"):console.log("no pagas"));
```
## Authors

- [JOSE-DIAZ-ROJAS](https://github.com/JOSE-DIAZ-ROJAS/)