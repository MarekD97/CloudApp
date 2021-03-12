import { FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  playerId: any;
  playerData: any;
  message: string;
  constructor(private service: ClientService, private route: ActivatedRoute, private router: Router) {
    this.message = '';
    this.route.params.subscribe(params => {
      this.playerId = params['id'];
      this.service.get(this.playerId).subscribe(data => {
        this.playerData = data;
        console.log(this.playerData);
      });
    })
  }

  ngOnInit() {
  }

  onSubmit(fg: FormGroup): void {
    console.log(fg.value);
    this.service.update(this.playerId, fg.value).subscribe(response => {
      this.message = "Player updated."
      this.router.navigate(['/']);
    },
    error => {
      this.message = error.statusText;
    })
  }

}
