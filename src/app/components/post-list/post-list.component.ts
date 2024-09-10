import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostComponent } from '../post/post.component';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, PostFormComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  AllPosts:Post[] = [
    {
      title:"Grand Circus",
      thought:"Grand Circus is cool."
    },
    {
      title:"Ritual",
      thought:"Ritual is a well developed app."
    },{
      title:"Scott",
      thought:"I ride scooters!"
    },
  ];

  DeletePost(p:Post){
    let index:number = this.AllPosts.findIndex(x => x === p);
    this.AllPosts.splice(index,1);
  }

  onSubmit(p:Post){
    this.AllPosts.unshift(p);
  }
}
