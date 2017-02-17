import { Component, OnInit, OnChanges, SimpleChange, Input, Output, ElementRef, AfterViewInit,  ViewChild, Renderer, EventEmitter, HostListener  } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';

import { ItemDescrModel} from '../../../models/item-descr.model';
import { Router } from '@angular/router';

@Component({
	selector: 's-signup-pg',
  styleUrls: [ './signup.scss'],
	templateUrl: './signup.component.html'
})

export class SignupComponent  implements OnInit {
  public acceptInvite:boolean = false;
  public emailVerified:boolean = false;
  public frmSignUp: FormGroup;


  @Input() public wizSteps: ItemDescrModel[];

  public invitedByCompanyName = "[Company Name]";
  public invitedByCompanyPhone= "000-000-0000";

  constructor(private router:Router, private formBuilder: FormBuilder) {
    this.wizSteps=[
      {itemId:'1', itemDescr:'Company Info', status:'active'},
      {itemId:'2', itemDescr:'Your Account', status:'pending'},
      {itemId:'3', itemDescr:'Verify'      , status:'pending'},
    ];
  }

  ngOnInit() {
    this.frmSignUp = this.formBuilder.group({
      frmCompany: this.formBuilder.group({
          company : ['',Validators.required],
          phone   : ['',Validators.required],
          address1: ['',Validators.required],
          address2: [''],
          country : ['',Validators.required],
          postal  : ['',Validators.required],
      }),
      frmPersonalInfo: this.formBuilder.group({
        firstName        : ['',Validators.required],
        lastName         : ['',Validators.required],
        title            : [''],
        email            : ['',Validators.required],
        password         : ['',Validators.required],
        secretQuestion   : ['',Validators.required],
        secretAnswer     : ['',Validators.required],
        enableBetaTesting: [false],
        enableRenewal    : [true]
      })
    });

  }

  onBack(){
    this.gotoLogin();
  }

  onDeclineAccess(){
    this.gotoLogin();
  }

  onAcceptAccess(){
    this.acceptInvite=true;
  }

  gotoPage1(){
    this.wizSteps[0].status="active";
    this.wizSteps[1].status="pending";
    this.wizSteps[2].status="pending";
  }
  gotoPage2(){
    this.wizSteps[0].status="done";
    this.wizSteps[1].status="active";
    this.wizSteps[2].status="pending";
  }
  gotoPage3(){
    console.log(this.frmSignUp);
    this.wizSteps[0].status="done";
    this.wizSteps[1].status="done";
    this.wizSteps[2].status="active";
  }
  gotoLogin(){
    this.router.navigate(['login']);
  }

  finish(){
    // Make rest call to do email varification
    this.emailVerified = true;
    this.wizSteps[2].status="done";

  }

  submitSignUpForm(){
    console.log("Submit the form");

  }
}
