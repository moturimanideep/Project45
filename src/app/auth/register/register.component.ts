import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  response: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  Register(val: any){
    console.log(val);
    this.commonService.RegisterUser(val).subscribe( (response) => {
        this.response = response;
        console.log(this.response);
     },
    (error) => { 
      console.log(error);
    })
  }

}
