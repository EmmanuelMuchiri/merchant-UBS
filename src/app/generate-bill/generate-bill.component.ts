import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bill } from '../postdataObj';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})


export class GenerateBillComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns = ['name'];

  // newbill: string [];
  selected = null;

  @Input() newBill = { name: '', phone: 0, email: '', narration: '', generated_by: ''}

    constructor(private apiservice:ApiService){ }

    ngOnInit():void{ 

      this.apiservice.getBills().subscribe(
        data => {
          this.dataSource.data = data;
        }
      );
      }

  addBill(dataBill) {
    this.apiservice.generateBill(this.newBill).subscribe((data: {}) => {
    })
  }
  
}
