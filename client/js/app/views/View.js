 //Herança
class View{
    constructor(element){
        this._element = element;
    }
    template(){
        throw new Error('O metodo template deve ser implementado')
    }
    update(model){
        this._element.innerHTML = this.template(model)
    }
   
}