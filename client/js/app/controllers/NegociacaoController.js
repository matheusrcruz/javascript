class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacaoView = new NegociacaoView($('#negociacoesView'));
    this._negociacaoView.update(this._listaNegociacoes);
    this._mensagem = new Mensagem();

    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem)
  }

  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._create());
    this._negociacaoView.update(this._listaNegociacoes)
    
    this._mensagem.text = 'Negociacao adicionada com sucesso'
    this._mensagemView.update(this._mensagem)

    this._clearForm();
  }
  _create() {
    return new Negociacao(
      DateHelper.textToDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }
  _clearForm() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}
