
import { Component, OnInit } from '@angular/core';
declare let luckysheet: any;
@Component({
  selector: 'app-table-sheet',
  standalone: true,
  imports: [],
  templateUrl: './table-sheet.component.html',
  styleUrl: './table-sheet.component.css'
})
export class TableSheetComponent  implements OnInit{
  ngOnInit(): void {
    const options = {
      container: 'luckysheet', // Set the id of the DOM container
      title: 'محرر تقييم أنجولر', // Set the name of the table in Arabic
      lang: 'en', // Set language to Arabic
      data: [
        {
          "name": "الأصول", // First sheet name in Arabic
          "color": "#41B883",
          "status": 1,
          "order": 0,
          "celldata": [
            { "r": 0, "c": 0, "v": "الأصل", "bgColor": "#D5E8D4" }, // Arabic content for assets
            { "r": 0, "c": 1, "v": "القيمة", "bgColor": "#D5E8D4" },
            { "r": 0, "c": 2, "v": "الحالة", "bgColor": "#D5E8D4" },
            { "r": 0, "c": 3, "v": "الموقع", "bgColor": "#D5E8D4" },
            { "r": 0, "c": 4, "v": "المالك", "bgColor": "#D5E8D4" },
            { "r": 0, "c": 5, "v": "تاريخ الشراء", "bgColor": "#D5E8D4" },
            { "r": 1, "c": 0, "v": "حاسوب", "bgColor": "#FFF2CC" },
            { "r": 1, "c": 1, "v": "1500", "bgColor": "#FFF2CC" },
            { "r": 1, "c": 2, "v": "جيد", "bgColor": "#FFF2CC" },
            { "r": 1, "c": 3, "v": "المكتب الرئيسي", "bgColor": "#FFF2CC" },
            { "r": 1, "c": 4, "v": "الشركة", "bgColor": "#FFF2CC" },
            { "r": 1, "c": 5, "v": "2022-05-01", "bgColor": "#FFF2CC" },
            { "r": 2, "c": 0, "v": "طابعة", "bgColor": "#DAEEF3" },
            { "r": 2, "c": 1, "v": "300", "bgColor": "#DAEEF3" },
            { "r": 2, "c": 2, "v": "ممتاز", "bgColor": "#DAEEF3" },
            { "r": 2, "c": 3, "v": "المكتب الرئيسي", "bgColor": "#DAEEF3" },
            { "r": 2, "c": 4, "v": "الشركة", "bgColor": "#DAEEF3" },
            { "r": 2, "c": 5, "v": "2023-01-15", "bgColor": "#DAEEF3" },
            { "r": 3, "c": 0, "v": "هاتف", "bgColor": "#F8CECC" },
            { "r": 3, "c": 1, "v": "200", "bgColor": "#F8CECC" },
            { "r": 3, "c": 2, "v": "جيد", "bgColor": "#F8CECC" },
            { "r": 3, "c": 3, "v": "الفرع", "bgColor": "#F8CECC" },
            { "r": 3, "c": 4, "v": "الشركة", "bgColor": "#F8CECC" },
            { "r": 3, "c": 5, "v": "2022-11-20", "bgColor": "#F8CECC" },
            { "r": 4, "c": 0, "v": "مكتب", "bgColor": "#E1D5E7" },
            { "r": 4, "c": 1, "v": "500", "bgColor": "#E1D5E7" },
            { "r": 4, "c": 2, "v": "مقبول", "bgColor": "#E1D5E7" },
            { "r": 4, "c": 3, "v": "الفرع", "bgColor": "#E1D5E7" },
            { "r": 4, "c": 4, "v": "الشركة", "bgColor": "#E1D5E7" },
            { "r": 4, "c": 5, "v": "2021-06-30", "bgColor": "#E1D5E7" }
          ]
        },
        {
          "name": "فحص الأصول", // Second sheet name in Arabic
          "color": "#FF5733",
          "status": 0,
          "order": 1,
          "celldata": [
            { "r": 0, "c": 0, "v": "الأصل", "bgColor": "#F9D5D3" }, // Arabic content for asset checking
            { "r": 0, "c": 1, "v": "تاريخ الفحص", "bgColor": "#F9D5D3" },
            { "r": 0, "c": 2, "v": "النتيجة", "bgColor": "#F9D5D3" },
            { "r": 0, "c": 3, "v": "الملاحظات", "bgColor": "#F9D5D3" },
            { "r": 0, "c": 4, "v": "المفحص", "bgColor": "#F9D5D3" },
            { "r": 1, "c": 0, "v": "حاسوب", "bgColor": "#FDE9D9" },
            { "r": 1, "c": 1, "v": "2024-01-01", "bgColor": "#FDE9D9" },
            { "r": 1, "c": 2, "v": "مقبول", "bgColor": "#FDE9D9" },
            { "r": 1, "c": 3, "v": "يحتاج إلى صيانة بسيطة", "bgColor": "#FDE9D9" },
            { "r": 1, "c": 4, "v": "المهندس أحمد", "bgColor": "#FDE9D9" },
            { "r": 2, "c": 0, "v": "طابعة", "bgColor": "#E2F0D9" },
            { "r": 2, "c": 1, "v": "2024-01-10", "bgColor": "#E2F0D9" },
            { "r": 2, "c": 2, "v": "ممتاز", "bgColor": "#E2F0D9" },
            { "r": 2, "c": 3, "v": "لا مشاكل", "bgColor": "#E2F0D9" },
            { "r": 2, "c": 4, "v": "المهندس خالد", "bgColor": "#E2F0D9" },
            { "r": 3, "c": 0, "v": "هاتف", "bgColor": "#D9EAD3" },
            { "r": 3, "c": 1, "v": "2024-02-15", "bgColor": "#D9EAD3" },
            { "r": 3, "c": 2, "v": "مقبول", "bgColor": "#D9EAD3" },
            { "r": 3, "c": 3, "v": "يحتاج إلى بطارية جديدة", "bgColor": "#D9EAD3" },
            { "r": 3, "c": 4, "v": "المهندس عمرو", "bgColor": "#D9EAD3" },
            { "r": 4, "c": 0, "v": "مكتب", "bgColor": "#D0E3EF" },
            { "r": 4, "c": 1, "v": "2024-03-20", "bgColor": "#D0E3EF" },
            { "r": 4, "c": 2, "v": "مقبول", "bgColor": "#D0E3EF" },
            { "r": 4, "c": 3, "v": "يحتاج إلى طلاء", "bgColor": "#D0E3EF" },
            { "r": 4, "c": 4, "v": "المهندس سامي", "bgColor": "#D0E3EF" }
          ]
        },
        {
          "name": "ميزانية الأصول", // Third sheet name in Arabic
          "color": "#FFC300",
          "status": 0,
          "order": 2,
          "celldata": [
            { "r": 0, "c": 0, "v": "السنة", "bgColor": "#FFF2CC" }, // Arabic content for asset budget
            { "r": 0, "c": 1, "v": "المبلغ المرصود", "bgColor": "#FFF2CC" },
            { "r": 0, "c": 2, "v": "المبلغ المنفق", "bgColor": "#FFF2CC" },
            { "r": 0, "c": 3, "v": "الفائض", "bgColor": "#FFF2CC" },
            { "r": 0, "c": 4, "v": "ملاحظات", "bgColor": "#FFF2CC" },
            { "r": 1, "c": 0, "v": "2022", "bgColor": "#FFF9E3" },
            { "r": 1, "c": 1, "v": "5000", "bgColor": "#FFF9E3" },
            { "r": 1, "c": 2, "v": "4500", "bgColor": "#FFF9E3" },
            { "r": 1, "c": 3, "v": "500", "bgColor": "#FFF9E3" },
            { "r": 1, "c": 4, "v": "تم توفير المبلغ الزائد", "bgColor": "#FFF9E3" },
            { "r": 2, "c": 0, "v": "2023", "bgColor": "#FFF2CC" },
            { "r": 2, "c": 1, "v": "6000", "bgColor": "#FFF2CC" },
            { "r": 2, "c": 2, "v": "5800", "bgColor": "#FFF2CC" },
            { "r": 2, "c": 3, "v": "200", "bgColor": "#FFF2CC" },
            { "r": 2, "c": 4, "v": "تم توفير المبلغ الزائد", "bgColor": "#FFF2CC" },
            { "r": 3, "c": 0, "v": "2024", "bgColor": "#FFEBCC" },
            { "r": 3, "c": 1, "v": "7000", "bgColor": "#FFEBCC" },
            { "r": 3, "c": 2, "v": "6900", "bgColor": "#FFEBCC" },
            { "r": 3, "c": 3, "v": "100", "bgColor": "#FFEBCC" },
            { "r": 3, "c": 4, "v": "تم توفير المبلغ الزائد", "bgColor": "#FFEBCC" },
            { "r": 4, "c": 0, "v": "2025", "bgColor": "#FFF4E5" },
            { "r": 4, "c": 1, "v": "8000", "bgColor": "#FFF4E5" },
            { "r": 4, "c": 2, "v": "7500", "bgColor": "#FFF4E5" },
            { "r": 4, "c": 3, "v": "500", "bgColor": "#FFF4E5" },
            { "r": 4, "c": 4, "v": "تم توفير المبلغ الزائد", "bgColor": "#FFF4E5" }
          ]
        }
      ]
,      
      column: 100, // Number of columns
      showinfobar: false, // Remove headers
      showtoolbar: true, // Show toolbar
      allowCopy: true, // Allow copying cells
      accuracy: null, // Set to null or desired accuracy value
      allowEditChart: true, // Allow editing charts
      rowHeaderWidth: 60, // Set row header width
      userMenuItem: null, // User menu item
      showstatisticBar: true, // Show statistic bar
      allowUpdate: true, // Allow updates
  
      // Enable RTL (Right to Left) layout
      rtl: true,
  
      // Additional settings...
      cellRightClickConfig: true, // Enable right-click context menu
      allowInsertRow: true, // Allow inserting rows
      allowInsertColumn: true, // Allow inserting columns
      allowDeleteRow: true, // Allow deleting rows
      allowDeleteColumn: true, // Allow deleting columns
      allowMergeCell: true, // Allow merging cells
      allowFormatCell: true, // Allow formatting cells
      allowSort: true, // Allow sorting columns
    };
  
    luckysheet.create(options);
  }
  
  
}
