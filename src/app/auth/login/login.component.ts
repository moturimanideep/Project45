import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CommonService } from '../../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  response: any;
  constructor(private commonService: CommonService, private router: Router) { 
    this.user = new FormGroup({
      email: new FormControl('admin@gmail.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('admin123', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
    })
  }

  ngOnInit() {
  }

  Login(data: any){
    console.log(data);
    this.commonService.loginUser(data).subscribe( (response)=> {
      if(response.status == 0){
        this.response = response;
      }else if(response.status == 1){
        this.commonService.StorageData(response);
        this.router.navigate(['/products']);
      }
    })

  }

}
