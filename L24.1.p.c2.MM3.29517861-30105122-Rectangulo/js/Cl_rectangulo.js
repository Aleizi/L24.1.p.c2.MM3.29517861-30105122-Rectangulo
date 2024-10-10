import Cl_cuadrado from "./Cl_cuadrado";

export default class Cl_rectangulo extends Cl_cuadrado {
    constructor(base, altura) {  
        super(base);
        this.altura = altura;
        this.are_rec = 0;  
        this.peri_rec = 0;

}






prcesar_medida(){

    this.are_rec = this.base*this.altura;
    this.peri_rec = (this.base*2)+(this.altura*2);

}

area_Rec(){
    return this.are_rec;
}
    

peri_Rec(){
    return this.peri_rec;
}

}





