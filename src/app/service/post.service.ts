import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { PostM } from '../model/postmodel';
//import DataSnapshot = firebase.database.DataSnapshot;
import { Router } from '@angular/router';
import DataSnapshot = firebase.database.DataSnapshot;


export class PostService {

//creation d'un array local


 posts: PostM[] = [];
postsSubject = new Subject<PostM[]>();

  constructor( ) {
  }

   emitPosts() {
   	this.postsSubject.next(this.posts.slice());
   }

     // recuperatiobn de la liste entière
      getPostsFromServe() {
        firebase.database()
          .ref('/posts')
          .on('value', (data: DataSnapshot) => {
             const dataValue = data.val();
             this.posts = dataValue ? dataValue : [];
             this.emitPosts();
       }
        );
      }

   addPost(title: string, content: string ){
   	const postObject = {
   		title: '',
   		content: '',
   		loveIts: 0,
   		created_at: new Date()
   	};

   }


        savePosts() {
        	firebase.database()
          .ref('/posts')
          .set(this.posts);
          this.emitPosts();
          
         }
   


    // creation d'un nouveau post
    createNewPost(newPost: PostM){
      this.posts.push(newPost);
      this.savePosts();
    }
// la suppression d'un post

  removePost(post: PostM) {
    const postIndexToRemove = this.posts.findIndex(
   (postE1) =>{
     if(postE1 === post) {
       return true;
     }
   }
      );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
   }

}
