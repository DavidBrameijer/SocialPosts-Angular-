import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() DisplayPost:Post = {} as Post;
  @Output() Deleted = new EventEmitter<Post>();

  EmitDelete(){
    this.Deleted.emit(this.DisplayPost);
  }
}
