import { Student } from './models/student';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  estudante: Student = {} as Student;

  nomeCompleto = 'João';
  nome = 'Bruno Dias';
  idade = 41;
  link = "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"

  alerta() {
    alert("Seja bem-vindo(a)!");
  }
}
