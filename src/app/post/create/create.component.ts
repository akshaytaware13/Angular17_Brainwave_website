import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  form!: FormGroup;
  constructor(public postservice: PostService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      mobilenumber: new FormControl('', [Validators.required]),
      pan_no: new FormControl('', [Validators.required]),
      adhaar_no: new FormControl('', [Validators.required]),
      
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.postservice.create(this.form.value).subscribe((res: any) => {
      alert('Post Created SuccessFully');
      this.router.navigateByUrl('post/index');
    });
  }

  backbtn() {
    this.router.navigateByUrl('post/index');
  }
}
