import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';



@NgModule({
  declarations: [CommentsComponent, CommentComponent, CommentFormComponent],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
