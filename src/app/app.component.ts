import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableSheetComponent } from "./table-sheet/table-sheet.component";
import { TableComponent } from "./table/table.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableSheetComponent, TableComponent]
})
export class AppComponent {
  title = 'ng-excel-sheet';
}
