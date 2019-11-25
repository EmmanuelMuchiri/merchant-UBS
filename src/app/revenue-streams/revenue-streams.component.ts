import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-revenue-streams',
  templateUrl: './revenue-streams.component.html',
  styleUrls: ['./revenue-streams.component.css']
})
export class RevenueStreamsComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id','name','revenue_description','Merchant_Owner','price','Industrys'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private apiservice: ApiService) { }

  ngOnInit():void{ 
    this.apiservice.getRevenueStreams().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    
  }  