import { Injectable } from "@angular/core";
import { IFeedback } from "../shared/feedback";

@Injectable({
    providedIn: 'root'
})
export class AppService{
    constructor(){}

    salvarFeedback(payload:IFeedback, formId:string){        
        const todosForms = this.pegueTodosFormularios()
        todosForms[formId] =payload
        return localStorage.setItem('feedback',JSON.stringify(todosForms))

    }

    pegarFeedback(formId: string){
        const todosForms = this.pegueTodosFormularios()
        return todosForms[formId] || null

        
    }

    private pegueTodosFormularios(){
        const data = localStorage.getItem('feedback')

        return data ? JSON.parse(data) : null
    }
}