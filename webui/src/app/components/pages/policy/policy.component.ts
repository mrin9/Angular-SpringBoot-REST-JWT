import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { PolicyService } from '../../../api/policy.service';
import { Router } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';



@Component({
	selector: 's-policy-pg',
	templateUrl: './policy.component.html',
  styleUrls: [ './policy.scss'],
  providers: [ MdSnackBar ]
})

export class PolicyComponent implements OnInit {

 @ViewChild('ruleTpl') ruleTpl: TemplateRef<any>;
 @ViewChild('stateTpl') stateTpl: TemplateRef<any>;
 @ViewChild('severityTpl') severityTpl: TemplateRef<any>;
 @ViewChild('policyIdTpl') policyIdTpl: TemplateRef<any>;


  //ngx-Datatable Variables
  columns:any[];
  rows:any[];

  constructor( public router: Router, public policyService: PolicyService, public snackBar: MdSnackBar) { }

	ngOnInit() {
    this.getPolicyData();
    this.columns=[
      {prop:"policyId"    , name: "ID"         , width:70  , cellTemplate:this.policyIdTpl   },
      {prop:"policyType"  , name: "Policy Type", width:220 },
      {prop:"policyState" , name: "State"      , width:130 , cellTemplate: this.stateTpl     },
      {prop:"severity"    , name: "Severity"   , width:90  , cellTemplate: this.severityTpl  },
      {prop:"rules"       , name: "Rules"      , width:500 , cellTemplate: this.ruleTpl }
    ];
  }

  stateChanged(e, v, row){
    let newPolicyState:String = row.policyState==="Active"?"INACTIVE":"ACTIVE";
    this.policyService.updatePolicyState(row.policyId, newPolicyState).subscribe(resp => {
        if (resp["operationStatus"] && resp["operationStatus"] === "SUCCESS"){
          row.policyState = (newPolicyState==="ACTIVE"?"Active":"Inactive");
        }
        else{
          // If AJAX fails then reset the toggle to original value
          let config = new MdSnackBarConfig();
          config.duration = 4000;
          this.snackBar.open(resp["operationMessage"], "", config);
          e.source.checked = (v==="Active"?true:false);
        }
    });

  }
  severityChanged(e, v, row, newValue, newDisplayValue){
    //console.log(newValue, row);
    let newPolicySeverity:String = newValue;
    this.policyService.updatePolicySeverity(row.policyId, newPolicySeverity).subscribe(resp => {
        if (resp["operationStatus"] && resp["operationStatus"] === "SUCCESS"){
          row.severity = newDisplayValue;
        }
        else{
          // If AJAX fails then reset the toggle to original value
          let config = new MdSnackBarConfig();
          config.duration = 4000;
          this.snackBar.open(resp["operationMessage"], "", config);
        }
    });
  }

  getPolicyData() {
      this.policyService.getPolicies().subscribe(policyData => {
          this.rows = policyData;
      });
  }

}
