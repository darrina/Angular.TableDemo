import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data = [
    { userName: 'John Doe', age: 30 },
    { userName: 'Jane Doe', age: 25 },
    { userName: 'Peter Smith', age: 40 },
    { userName: 'Mary Johnson', age: 20 },
  ];

  dataSource: MatTableDataSource<any>;

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngOnInit() {
  }

}
