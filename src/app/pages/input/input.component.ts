import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  costForm: FormGroup

  options = {
    project_type: [
      'Civil',
      'Residential/Townhouses',
      'High-Rise Towers',
      'Mid-rise Buildings',
      'HealthCare',
      'Educational',
      'Data Center',
      'Exhibition Hall',
      'Laboratory',
      'Warehouse',
      'Workshop',
      'Theater',
    ],
    works: [
      'NOT REQUIRED',
      'LOD 100-CONCEPTUAL',
      'LOD 200-SCHEMATIC',
      'LOD 300-DESIGN',
      'LOD 400-CONSTRUCTION',
      'LOD 500-AS-BUILT',
    ],
    drawing_production: [
      'Yes',
      'Not Required'
    ]
  }

  constructor(private formBuilder: FormBuilder) {
    this.costForm = this.formBuilder.group({
      project_type: ['', Validators.required],
      project_floor_area: ['', Validators.required],
      project_location: ['', Validators.required],
      architecture: ['', Validators.required],
      structure: ['', Validators.required],
      mepfs: ['', Validators.required],
      drawing_production: ['', Validators.required],
      full_name: ['', Validators.required],
      contact_number: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submit(form: FormGroup) {

  }

}
