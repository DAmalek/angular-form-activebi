import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IFeedback } from '../shared/feedback';
import { AppService } from '../services/app.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_RADIO_DEFAULT_OPTIONS,
  MatRadioModule,
} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
})
export class AppComponent {
  constructor(
    private fb: FormBuilder,
    private AppService: AppService,
  ) {}

  feedbackArr: IFeedback[] = [];
  radio = '';
  form = this.fb.group({
    notaExpActive: [null, [Validators.required]],
    notaExpConsultores: [null, [Validators.required]],
    descricaoExpClient: [null, []],
    indicao: [null, [Validators.required]],
    sobreActive: [null, [Validators.required]],
  });

  geradorFormId(){
    return Math.random() + ''
  }

  handdleClick() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.valid) {
      this.AppService.salvarFeedback(this.form.value as IFeedback, this.geradorFormId());
      console.log(this.form, 'clicked');

      this.form.reset();
    }
  }
}
