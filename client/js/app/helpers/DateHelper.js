class DateHelper{
    constructor(){
        throw new Error('A classe DateHelper mão pode ser instaciada tente acessar seus atributos direto')
    }

  static dateToText(data){
        return `${data.getDate()}/${(data.getMonth()+ 1)}/${data.getFullYear()}`;  
    }

   static textToDate(text){
       if(!/\d{4}-\d{2}-\d{2}/.test(text))
       {
        throw new Error('Deve estar no formato aaaa-mm-dd')
       }
        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }
}