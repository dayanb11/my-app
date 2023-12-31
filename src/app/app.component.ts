import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

//public bgcolor = "background-color: rgb(31 120,50)"; //dark green
 // public bgcolor = "background-color: rgb(255,65,0"; //dark orange 
  public bgcolor="background-color: rgb(255,0,0); //red";
forchild:string="move this  value to child";
// bublic bgcolor="background-color: rgb(31 120,50)";

intforchild:number=100;

// Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make',rowGroup:true,hide:true} ,
    { field: 'model'},
    { field: 'price' }
  ];
  public groupDisplayType ='grouprows'
  // DefaultColDef sets props c☺ommon to all Columns

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable:true,
    showRowGroup:true
  };
  
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;;

  constructor(private http: HttpClient) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}