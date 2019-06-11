export class Aluno {
    nome : string;
    cpf: string;


    constructor(){
        this.clean();
    }
    clean(): void {
        this.nome = "";
        this.cpf = "";
    }

}