import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent {
  veiculos: any[] = [];
  novoVeiculo = { placa: '', modelo: '', proprietario: '' };

  cadastrarVeiculo() {
    this.veiculos.push({ ...this.novoVeiculo });
    this.novoVeiculo = { placa: '', modelo: '', proprietario: '' };
  }
}
