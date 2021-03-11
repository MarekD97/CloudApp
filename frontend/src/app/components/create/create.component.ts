import { ClientService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  elements: Array<string>;
  createForm: FormGroup;
  constructor(private service: ClientService) {
    this.elements = this.service.headElements;
    this.createForm = new FormGroup(
      this.elements.reduce((o, key) => Object.assign(o, {[key]: new FormControl('', [Validators.required])}), {})
    );
  }

  ngOnInit(): void {
  }

  onSubmit(fg: FormGroup): void {
    console.log(fg);
  }

}

