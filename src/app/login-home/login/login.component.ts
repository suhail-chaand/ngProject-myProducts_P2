import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dbs: DbService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&-_])[A-Za-z\d@#$%&-_].{8,}')]),
  })

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  checkResponse = false
  login() {
    this.dbs.checkUser(this.loginForm.value.email, this.loginForm.value.password)
    this.checkResponse = true
  }
}