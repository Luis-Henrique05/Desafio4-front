import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-motoristas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent {
  motoristas: any[] = [];
  novoMotorista = { nome: '', cpf: '', cnh: '', pontos: 0 };

  cadastrarMotorista() {
    this.motoristas.push({ ...this.novoMotorista });
    this.novoMotorista = { nome: '', cpf: '', cnh: '', pontos: 0 };
  }

  consultarPontuacaoAlta() {
    return this.motoristas.filter(motorista => motorista.pontos >= 10);
  }
}
