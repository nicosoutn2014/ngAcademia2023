import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  contactForm!: FormGroup 
  params: any

  constructor(private readonly fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(paramMap => {
      this.params = paramMap
      this.contactForm = this.initForm()
    })
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: [this.params?.userName || '', Validators.required],
      lastname: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(18)]],
      email: [this.params?.userEmail || '', [Validators.email, Validators.required]]
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
