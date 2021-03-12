import { ClientService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  message: string;
  constructor(private service: ClientService, private router: Router) {
    this.message = '';
  }

  ngOnInit(): void {
  }

  onSubmit(fg: FormGroup): void {
    this.service.create(fg.value).subscribe(response => {
      this.message = "New player added.";
      this.router.navigate(['/']);
    },
    error => {
      this.message = error.statusText;
    })
  }

}

