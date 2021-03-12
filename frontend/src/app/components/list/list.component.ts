import { ClientService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  headElements: any;
  elements: any;
  size: number = 25;
  page: number = 0;
  totalItems: number = 0;
  subscription: Subscription;
  selectCount: any = this.size;
  nameSearch: string;

  numberOfElements: Array<number> = [10, 25, 50, 100];

  constructor(private service: ClientService) {
    this.nameSearch = '';
    this.headElements = this.service.headElements;
    this.subscription = this.service.getAll({page: this.page, size: this.size}).subscribe(response => {
      this.elements = response.players;
      console.log(response);
      this.totalItems = response.totalItems;
    })
  }

  ngOnInit(): void {
  }

  pageChanged(value: number): any {
    this.page = value - 1;
    this.updateData();
  }

  sizeChanged(value: number): any {
    this.size = value;
    this.updateData();
  }

  updateName(target: any): any {
    this.nameSearch = target.value;
    this.updateData();
  }

  updateData(): any {
    if (this.subscription) {
      this.subscription = this.service.getAll({page: this.page, size: this.size, name: this.nameSearch}).subscribe(response => {
        this.elements = response.players;
        console.log(response);
        this.totalItems = response.totalItems;
      })
    }
  }

}
