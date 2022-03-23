class NegociacaoView{

    constructor(element){
        this._element = element
    }
  
    _template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.negociacoes.map(negociacao=>`
                    <tr>
                        <td>${DateHelper.dateToText(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    `).join('')}
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, array)=> total + array.volume, 0.0)}
                </td>
            </tfoot>
         </table>
        `;
    }

    update(model){
        this._element.innerHTML = this._template(model);   
    }
}


