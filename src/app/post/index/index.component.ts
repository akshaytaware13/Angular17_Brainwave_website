import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  posts: Post[] = [];
  constructor(public postservice: PostService, private _router:Router) {}

  ngOnInit() {
    this.postservice.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
      console.log(data);
    });
  }

  deletePost(id: number) {
    this.postservice.delete(id).subscribe((res) => {
      this.posts = this.posts.filter((item) => item.id !== id);
      alert("Post Deleted Successfully")
      console.log(res);
      this._router.navigateByUrl('post/index')
    });
  }
}
