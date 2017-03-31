import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/api/employee.service';


@Component({
	selector   : 's-employees-pg',
	templateUrl: './employees.component.html',
    styleUrls  : [ './employees.scss'],
})

export class EmployeesComponent implements OnInit {

    columns:any[];
    rows:any[];

    constructor(private router: Router, private employeeService: EmployeeService) { }

    ngOnInit() {
        var me = this;
        me.getPageData();

        this.columns=[
            {prop:"id"        , name: "ID"          , width:50  },
            {prop:"firstName" , name: "First Name"  , width:120 },
            {prop:"lastName"  , name: "Last Name"   , width:120 },
            {prop:"email"     , name: "Email"       , width:250 },
            {prop:"phone"     , name: "Phone"       , width:160 },
            {prop:"department", name: "Department"  , width:220 }
        ];
    }

    getPageData() {
        var me = this;
        this.employeeService.getEmployees().subscribe((data) => {
            this.rows = data.items;
        });
    }

}
