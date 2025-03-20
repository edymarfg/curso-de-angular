import { Component, Input, OnInit } from '@angular/core';
import { Form, NgControl, NgModel } from '@angular/forms';

@Component({
    selector: 'app-form-debug',
    templateUrl: './form-debug.component.html',
    styleUrls: ['./form-debug.component.scss'],
    standalone: false
})
export class FormDebugComponent implements OnInit {
  @Input() form!: any;

  constructor() {}

  ngOnInit(): void {}
}
