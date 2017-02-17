import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../api/incident.service';

@Component({
	selector: 's-dashboard-pg',
	templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.scss'],
})

export class DashboardComponent implements OnInit {

  incidentBySeverityData: any[] = [];
  incidentByStatusData: any[] = [];
  incidentBySeverityAndStatusData: any[] = [];

  view: any[] = [550, 200];
  colorSchemeSeverity = { domain: ['#ef2e2e', '#ff8e28','#ffd428','#61c673']};
  colorSchemeStatus   = { domain: ['#004A70', '#0094D2','#89CBDF','#CCCCCC']};
  columns=[
    {prop:"policyType", name: "Incidents by Policy" , width:290},
    {prop:"new"       , name: "New"         , width:60 },
    {prop:"inProgress", name: "In Progress" , width:80 },
    {prop:"resolved"  , name: "Resolved"    , width:70 },
    {prop:"dismissed" , name: "Dismissed"   , width:70 }
  ];
  rows:any[]=[
    {policyType: "PCI Compliance"           , new: "61", inProgress: "57",resolved:"60", dismissed:"55"},
    {policyType: "Blacklisted Email Address", new: "19", inProgress: "20",resolved:"24", dismissed:"16"},
    {policyType: "Blacklisted IP"           , new: "19", inProgress: "16",resolved:"24", dismissed:"21"},
    {policyType: "Likely Spam Email"        , new: "19", inProgress: "30",resolved:"22", dismissed:"13"},
    {policyType: "Payment cards information", new: "40", inProgress: "36",resolved:"36", dismissed:"33"},
    {policyType: "Virus or mallware"        , new: "16", inProgress: "24",resolved:"18", dismissed:"17"}
  ];



  constructor( private incidentService: IncidentService) { }
	ngOnInit() {
    this.getPageData();
  }


  getPageData() {
      this.incidentService.getIncidentsBySeverity().subscribe((data) => {
        this.incidentBySeverityData = data;
      });

      this.incidentService.getIncidentsByStatus().subscribe((data) => {
        this.incidentByStatusData = data;
      });

      this.incidentService.getIncidentsBySeverityAndStatus().subscribe((data) => {
        this.incidentBySeverityAndStatusData = data;
      });

  }


}
