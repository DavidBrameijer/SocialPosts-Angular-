import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Output() PostCreated = new EventEmitter<Post>();
  formPost:Post = {} as Post;
  display:boolean = false;

  emitCreated():void{
    let result:Post = {...this.formPost};
    this.PostCreated.emit(result);
    this.formPost = {} as Post;
  }

  toggleDisplay(){
    this.display = !this.display;
  }
}
