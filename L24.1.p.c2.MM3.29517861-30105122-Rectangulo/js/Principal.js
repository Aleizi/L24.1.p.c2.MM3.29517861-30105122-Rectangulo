import Cl_rectangulo  from "./Cl_rectangulo.js";
import Cl_cuadrado from "./Cl_cuadrado.js"



let rectangulo1 = new Cl_rectangulo(4,2);
let rectangulo2 = new Cl_rectangulo(3,5);

let rect = new Cl_rectangulo();

rect.prcesar_medida(rectangulo1);
rect.prcesar_medida(rectangulo1);

let salida = document.getElementById("Salida");
salida.innerHTML =`
Base del rectangulo: ${rect.base} <br>
Altura del rectangulo: ${rect.altura} <br>
Area resultante: ${rect.area_Rec().toFixed(2)} <br>
Perimetro resultante: ${rect.peri_Rec()} <br>
`






