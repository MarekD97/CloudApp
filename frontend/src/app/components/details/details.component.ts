import { ClientService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  playerId: any;
  playerData: any;
  deleteConfirm: boolean = false;

  message: string;
  constructor(private service: ClientService, private route: ActivatedRoute, private router: Router) {
    this.message = '';
    this.route.params.subscribe(params => {
      this.playerId = params['id'];
      this.service.get(this.playerId).subscribe(data => {
        this.playerData = data;
      })

    })
  }

  ngOnInit(): void {
  }

  deleteItem(id: any): any {
    this.service.delete(id).subscribe(response => {
      this.message = 'Item deleted';
      this.router.navigate(['/']);
    },
    error => {
      this.message = error.statusText;
    })
  }

}
