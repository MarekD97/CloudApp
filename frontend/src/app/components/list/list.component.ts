import { ClientService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  headElements: any;
  elements: any;
  constructor(private service: ClientService) {
    this.headElements = this.service.headElements;
    this.service.getAll().subscribe(response => {
      this.elements = response;
    })
  }

  ngOnInit(): void {
  }

}
