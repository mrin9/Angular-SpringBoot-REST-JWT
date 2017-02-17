import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import { PolicyService } from '../../../api/policy.service';

@Component({
  selector: 's-policy-detail-pg',
	templateUrl: './policy-detail.html',
  styleUrls: [ './policy-detail.scss'],
})


export class PolicyDetailComponent implements OnInit {
  public policyId:number;
  public frmPolicyDetail: FormGroup;
  public policyRecord: any={policyId:'',rules:[]};
  public isPolicyActive:boolean = false;

  public rows=[];
  public columns =[
      {prop:"rule"     , name: "Rule"      , width:200 },
      {prop:"condition", name: "Condition" , width:200 },
      {prop:"field"    , name: "Field"     , width:100 },
      {prop:"operator" , name: "Operator"  , width:70  },
      {prop:"value"    , name: "Value"     , width:70  }
  ];



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private policyService: PolicyService
  ) {
    this.frmPolicyDetail = this.formBuilder.group({
        policyId   : [''],
        policyName : ['',Validators.required],
        policyType : ['',Validators.required],
        policyState: [''],
        severity   : ['',Validators.required]

    });

    this.route.params.subscribe((p: Params) => {
      this.policyId = p["id"];
      this.policyService.getPolicies(this.policyId).subscribe( resp=>{

        this.frmPolicyDetail.setValue({
          policyId   : [resp[0].policyId],
          policyName : [resp[0].policyName],
          policyType : [resp[0].policyType],
          policyState: [resp[0].policyState],
          severity   : [resp[0].severity]
        });
        this.policyRecord   = resp[0];
        this.isPolicyActive = resp[0].policyState.toUpperCase()==="ACTIVE"?true:false;

        console.log(this.policyRecord );
      });

    });

  }

	ngOnInit() {



  }

navigateBack(){

}
submitPolicyDetail(){
  console.log("Code for submiting policy detail");
}


}
