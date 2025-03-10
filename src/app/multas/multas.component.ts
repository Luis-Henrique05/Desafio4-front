import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.css']
})
export class MultasComponent {
  multas: any[] = [];
  novaMulta = { placa: '', descricao: '', pontos: 0 };

  cadastrarMulta() {
    this.multas.push({ ...this.novaMulta });
    this.novaMulta = { placa: '', descricao: '', pontos: 0 };
  }
}
