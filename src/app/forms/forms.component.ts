import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  contactForm!: FormGroup 

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.initForm()
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.email, Validators.required]]
    })
  }

  onSubmit() {
    console.log('Form -> ', this.contactForm)
    console.log('Form valido?', this.contactForm.valid)
    if(this.contactForm.valid) {
      //call api
    } else 
      alert('revise todos los campos')
  }

}
