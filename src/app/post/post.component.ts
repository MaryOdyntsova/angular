import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy,
  Component,
  ContentChild, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,  // стили распространяются на компоненты, что их используют
  changeDetection: ChangeDetectionStrategy.OnPush // изменения в Инпутах меняется только целиком
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('myPost') post: Post;
  @Input() idx: number;
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('postInfo', {static: true}) contentRef: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
     console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  removePost() {
    this.onRemove.emit(this.idx);
  }

}
