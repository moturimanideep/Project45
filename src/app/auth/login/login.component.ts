import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  constructor() { 
    this.user = new FormGroup({
      email: new FormControl('admin@gmail.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('admin123', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
    })
  }

  ngOnInit() {
  }

  Login(data: any){
    console.log(data);
  }

}
