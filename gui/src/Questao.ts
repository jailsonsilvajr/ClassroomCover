export class Questao{
    texto : string;
    id : string;
    QuestionarioId : string;    

    constructor(alternativa : string)
    {
        this.texto =  alternativa;
        this.id = "";
        this.QuestionarioId = "";
    }   

}