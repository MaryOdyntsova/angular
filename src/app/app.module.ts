import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Post4Component } from './post4/post4.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {StyleDirective} from './style.directive';
import { StructuredDirective } from './structured.directive';
import { ExPipePipe } from './ex-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Post4Component,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    StructuredDirective,
    ExPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
