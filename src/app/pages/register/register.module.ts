import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxCaptchaModule } from 'ngx-captcha';

import { IonicModule } from '@ionic/angular';
import { RecaptchaModule } from 'ng-recaptcha';
import { RegisterPage } from './register.page';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RecaptchaModule,
    NgxCaptchaModule,
    ComponentsModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
