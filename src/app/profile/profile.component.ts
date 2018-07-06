import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: object = {
    name: 'vamshi Krishna',
    email: 'vamshi212@gmail.com',
    mobile: '9864578899',
    education: 'B Tech',
    imgSrc: 'https://i1.wp.com/ecell.sfitengg.org/wp-content/uploads/2016/06/Dummy-image.jpg',
    altText: 'No profile pic'
  }
  userStatus: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  addUser(data: any){
    console.log(data);
  }

  showorhideuser(){
    this.userStatus = !this.userStatus;
  }
}
