import { UserPostsService } from './../user-posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  constructor(
    private userPostsService: UserPostsService
  ) { }

  ngOnInit() {
    this.userPostsService.getUserPosts(2).subscribe(bla => console.log(bla));
  }

}
