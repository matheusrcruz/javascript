class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }
 adiciona(negociacoes){
        return this._negociacoes.push(negociacoes)
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }
}