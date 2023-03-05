import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
fm=this.fb.group<FormModel>({

  title:this.fb.control('Personal Details'),
  name:this.fb.group({
    firstName:this.fb.control("PRTeck"),
    lastName:this.fb.control("Talks")
  }),
  hobby:this.fb.array([
    this.fb.control('Swimming'),
    this.fb.control('Shuttle')
  ]
  )
});

ngOnInit(): void {
    
}

  constructor(private fb:FormBuilder){

  }
}

//Model 
interface FormModel {
  title: FormControl<string | null>;
  name: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
  }>;
  hobby: FormArray<FormControl<string | null>>;
}