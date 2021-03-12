import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() item: any;
  @Output() result = new EventEmitter();
  ngForm: FormGroup;
  constructor(private location: Location) {
    this.ngForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      overall: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      hits: new FormControl('', [Validators.required]),
      potential: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    if(this.item) {
      delete this.item.player_id;
      this.ngForm.setValue(this.item);
    }
  }

  onSubmit(fg: FormGroup) {
    this.result.emit(fg);
  }

  onCancel(): any {
    this.location.back();
  }

}
