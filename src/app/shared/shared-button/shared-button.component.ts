import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.css']
})
export class SharedButtonComponent implements OnInit {

  @Input() backgroundColor: string;
  @Output() outputMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  printMessage() {
    console.log('I printed to console. #proDebugging');
  }

  printOutputMessage() {
    this.outputMessage.emit('I emmited a message');
  }


}
