import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Validations } from '../../../../utils/form-validations';
import { user } from '../../../../utils/constants';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-sing-in',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css',
  standalone: true,
})
export class SingInComponent implements OnInit {
  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  signInForm!: FormGroup;
  type: string = 'password';

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
  ) {
    this.signInForm = this._formBuilder.group({
      email: [null, [Validators.required, Validations.ForEmail]],
      password: [null, Validators.required],
    });
  }
  ngOnInit(): void {}

  public submit(): void{
    if(this.signInForm.invalid){
      return
    } 
    try {
      let dataUser= user;
      let form=this.signInForm.value;
      if((dataUser.email===form.email)&&(dataUser.password===form.password)){
        this._authService.signIn(form);
        this._router.navigate(['/main/home'])

      }else{
        alert('Correo o Contraseña incorrecta')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
