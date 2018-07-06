import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [
    {
    ename: 'Bharghav',
    eid: 10021,
    edesignation: 'Software Engineer',
    esalary: 60000
  },
  {
    ename: 'Krishna',
    eid: 10022,
    edesignation: 'Software Engineer',
    esalary: 60000
  },
  {
    ename: 'Vamshi',
    eid: 10023,
    edesignation: 'Software Engineer',
    esalary: 60000
  },

]
  constructor() { }

  ngOnInit() {
  }

}
