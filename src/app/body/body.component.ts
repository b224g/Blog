import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { M_Blog } from '../Models/M_Blog';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  public registerForm !: FormGroup;

  blogPrevew$!: Observable<M_Blog>;

  public m_blog: M_Blog = new M_Blog();

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      
      content_title:['',Validators.required],
      author:['',Validators.required],
      newCategory:['',Validators.required],
      description: ['',Validators.compose([Validators.required, Validators.maxLength(50)])],

      items: this.fb.array([])

    });

    this.blogPrevew$ = this.registerForm.valueChanges.pipe(
      map((fromValue) => ({
        ...fromValue,

  
      }))
    );
  }

  get items(){
    return this.registerForm.get('items') as FormArray;
  }

  removeItems(index: number){
    this.items.removeAt(index);
  }

  public saveData(){
    console.log(this.registerForm.value);
    console.log('valeurs: ', JSON.stringify(this.registerForm.value));
  }

  public archive(){
    console.log(this.registerForm.value);
    console.log('valeurs: ', JSON.stringify(this.registerForm.value));
  }
    
}
