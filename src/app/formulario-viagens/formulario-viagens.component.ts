import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule

@Component({
  selector: 'app-formulario-viagens',
  standalone: true,
  templateUrl: './formulario-viagens.component.html',
  styleUrls: ['./formulario-viagens.component.css'],
  imports: [CommonModule, FormsModule]
})
export class FormularioViagensComponent {
  formData = {
    destino: '',
    dataIda: '',
    dataVolta: '',
    passageiros: '',
    email: ''
  };

  onSubmit() {
    if (!this.formData.destino || !this.formData.dataIda || !this.formData.dataVolta || !this.formData.passageiros || !this.formData.email) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const numPassageiros = +this.formData.passageiros;
    if (numPassageiros < 1 || numPassageiros > 5) {
      alert('O número de passageiros deve estar entre 1 e 5.');
      return;
    }
    alert('Formulário enviado com sucesso!');

    console.log('Formulário enviado:');
    console.log('Destino:', this.formData.destino);
    console.log('Data de Ida:', this.formData.dataIda);
    console.log('Data de Volta:', this.formData.dataVolta);
    console.log('Número de Passageiros:', numPassageiros);
    console.log('E-mail de Contato:', this.formData.email);

  }
}
