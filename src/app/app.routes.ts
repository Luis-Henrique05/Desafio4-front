import { Routes } from '@angular/router';
import { MotoristasComponent } from './motoristas/motoristas.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { MultasComponent } from './multas/multas.component';

export const routes: Routes = [
  { path: 'motoristas', component: MotoristasComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'multas', component: MultasComponent },
  { path: '', redirectTo: '/motoristas', pathMatch: 'full' }
];
