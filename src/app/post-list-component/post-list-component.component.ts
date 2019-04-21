import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../service/post.service';
import { PostM } from '../model/postmodel';



@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  posts = [];
 postsSubscription : Subscription;


  constructor(private postsService : PostService) { }

  ngOnInit() {
    this.postsService.getPostsFromServe();
  	this.postsSubscription = this.postsService.postsSubject.subscribe(
        (posts:PostM[]) => {
        	this.posts = posts;
        }
  		);
  	this.postsService.emitPosts();
  }

  

  ngOnDestroy(){
  	this.postsSubscription.unsubscribe();
  }

}
