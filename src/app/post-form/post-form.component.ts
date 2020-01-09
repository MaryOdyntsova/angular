import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ContentChild} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleRef', {static: false}) inputRef: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  add() {
     if (this.text && this.title)  {
       const post: Post = {
         title: this.title,
         text: this.text
       };

       this.onAdd.emit(post);

       this.title = '';
       this.text = '';
     }

  }

  focusTitle() {
      this.inputRef.nativeElement.focus();
  }
}
