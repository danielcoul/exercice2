import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { PostM } from '../model/postmodel';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

@Input()
 post : PostM;


   
  constructor( private postService : PostService) { }

ngOnInit() {
  }

LoveIts()  {
    this.post.loveIts++;
  this.postService.savePosts();
  }

  NoLoveIts()  {
    this.post.loveIts--;
  this.postService.savePosts();

  }
 DeletePost(){
   this.postService.removePost(this.post);
 }
 
}
