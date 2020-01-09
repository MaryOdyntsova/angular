import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isVisible = true;
  title = 'MyApp';
  buttonToggle = true;

  arr: any = [{
    name: 'Post 1',
    user: 'Mariia',
    comments: [
      {name: 'MaryOd 1', comment: 'lorem 1'},
      {name: 'MaryOd 1', comment: 'lorem 2'},
      {name: 'MaryOd 1', comment: 'lorem 3'}]
  },{
      name: 'Post 2',
      user: 'Mariia 2',
      comments: [
        {name: 'MaryOd 2', comment: 'lorem 1'},
        {name: 'MaryOd 2', comment: 'lorem 2'},
        {name: 'MaryOd 2', comment: 'lorem 3'}]
    }];

  posts: Post[] = [
    {title: 'Хочу выучить Ангуляр компоненты', text: 'Я все еще учу Ангуляр компоненты'},
    {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы'}
  ];

  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      // this.posts[0] = {
      //   title: 'New Title',
      //   text: 'Nw Text',
      //   id: 33
      // };

      this.posts[0].title = 'New Title';
    }, 2000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(index) {
    this.posts.splice(index, 1);
  }

}
