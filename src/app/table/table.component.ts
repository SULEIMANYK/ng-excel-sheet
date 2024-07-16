import { Component, OnInit } from '@angular/core';
declare let dataTable: any;
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent  implements OnInit
{
  datatable: any;
  ngOnInit(): void {
     this.datatable = new dataTable('#datatable', {
      columns: [ 'First Name', 'Last Name', 'Position' ],
      data: [
        [ 'Don', 'Joe', 'Designer' ],
        [ 'Mary', 'Jane', 'Software Developer' ]
      ]
    });
  }

  

}
