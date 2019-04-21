import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import {  ReactiveFormsModule, FormsModule} from "@angular/forms";
import { PostFromComponent } from './post-from/post-from.component';
import { PostService } from './service/post.service';
import { RouterModule, Routes, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
{ path: 'posts', component: PostListComponentComponent},
{ path: 'posts/new', component: PostFromComponent},
 { path: '', redirectTo: 'posts', pathMatch: 'full'},
{path: '**', redirectTo: 'posts'}

];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    PostFromComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
