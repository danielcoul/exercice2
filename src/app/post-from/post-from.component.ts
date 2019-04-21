import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PostM } from '../model/postmodel';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-from',
  templateUrl: './post-from.component.html',
  styleUrls: ['./post-from.component.css']
})
export class PostFromComponent implements OnInit {

postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
  	          private  postService: PostService
  	          ) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm() {
  	 this.postForm = this.formBuilder
     .group({
  	 	title: ['', Validators.required],
  	 	content: ['', Validators.required]
  	 });

  }

 onSavePost() {
 	const title = this.postForm.get('title').value;
 	const content = this.postForm.get('content').value;

 const newPost = new PostM(title, content);
 	this.postService.createNewPost(newPost);
 	this.router.navigate(['/posts']);
 }
}
