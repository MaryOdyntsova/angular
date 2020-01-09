import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post4',
  templateUrl: './post4.component.html',
  styleUrls: ['./post4.component.scss']
})
export class Post4Component implements OnInit {

  inputValue: string = '';
  constructor() { }

  ngOnInit() {
  }

  onEnter(event: KeyboardEvent) {
      this.inputValue = (<HTMLInputElement> event.target).value;
      console.log(event);
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

}
