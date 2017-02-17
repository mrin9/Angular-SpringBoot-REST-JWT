import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { IncidentService } from '../../../api/incident.service';
import { Router } from '@angular/router';

@Component({
	selector: 's-incidents-pg',
	templateUrl: './incidents.component.html',
  styleUrls: [ './incidents.scss'],
})

export class IncidentsComponent implements OnInit {
  @ViewChild('severityCellTpl') severityCellTpl: TemplateRef<any>;
  @ViewChild('statusCellTpl') statusCellTpl: TemplateRef<any>;

  //ngx-Datatable Variables
  columns:any[];
  rows:any[];
  incidentBySeverityChartData: any[] = [];

  constructor( private router: Router, private incidentService: IncidentService) { }

	ngOnInit() {
    var me = this;
    window.setTimeout(function(){me.getPageData();}, 200);
    this.columns=[
      {prop:"incidentId"  , name: "ID"         , width:50 },
      {prop:"detectedOn"  , name: "Detected On", width:170},
      {prop:"policyId"    , name: "Policy ID"  , width:75 },
      {prop:"policyType"  , name: "Policy"     , width:220},
      {prop:"status"      , name: "Status"     , width:90, cellTemplate: this.statusCellTpl },
      {prop:"severity"    , name: "Severity"   , width:90, cellTemplate: this.severityCellTpl },
      //{prop:"customerName", name: "Customer"   , width:90},
      {prop:"platformName", name: "Platform"   , width:120},
      {prop:"platformUser", name: "Offending User", width:120},
      //{prop:"ownerEmail"  , name: "Owner Email", width:30},
      {prop:"ownerName"   , name: "Owner"      , width:215}
    ];

  }

  getPageData() {
      var dateFormat = {year: 'numeric', month: 'short', day: 'numeric' ,hour:"2-digit",minute:"numeric"};
      this.incidentService.getIncidents(0,10000).subscribe((data) => {
        this.rows = data;
      });

      this.incidentService.getIncidentsBySeverity().subscribe((data) => {
          let legendColors = {Critical:'#ef2e2e',Alert:'#ff8e28', Warning:'#ffd428',Info:'#61c673'};

          for(let i=0; i< data.length; i++){
            this.incidentBySeverityChartData.push({name:data[i].name, value:data[i].value, color:legendColors[data[i].name]});
          }
          //this.incidentBySeverityChartData = data;
      });
  }




}
