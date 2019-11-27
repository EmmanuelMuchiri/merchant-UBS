import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bill } from '../postdataObj';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import { element } from 'protractor';
import { format } from 'url';



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

  @Input() newBill = { RevStreams: 0, name: '', phone: 0, email: '', narration: '', generated_by: ''}

    constructor(private apiservice:ApiService){ }

    public listItems: Array<any> = [];

    ngOnInit():void{ 

      this.apiservice.getBills().subscribe(
        data => {
          this.dataSource.data = data;
        }
      );

      this.apiservice.getRevStream().subscribe(
        data => data.forEach(element => {
          this.listItems.push(
            {
              'name':element ['name'],
              'id':element['id']

            }

            );
          console.log(this.listItems);
          
        })
      )
      }

  addBill(dataBill) {
    this.apiservice.generateBill(this.newBill).subscribe((data: {}) => {
    })
    
  }
  
}
