import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComputeService } from 'src/app/compute.service';

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

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private computeService: ComputeService) {
    this.costForm = this.formBuilder.group({
      project_type: ['', Validators.required],
      project_floor_area: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      project_location: ['', Validators.required],
      architecture: ['', Validators.required],
      structure: ['', Validators.required],
      mepfs: ['', Validators.required],
      drawing_production: ['', Validators.required],
      full_name: ['', Validators.required],
      contact_number: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    // this.computeService.computeArchitecture('third', 300)
    // this.computeService.getArchitectureManpower('third', 300)
    // this.computeService.getArchitectureDuration('third', 300)
    // this.computeService.getStructureManpower('third', 300)
    // this.computeService.getStructureDuration('third', 300)
    var a = this.computeService.computeArchitecture('third', 300)
    var b = this.computeService.computeStructure('third', 300)
    var c = this.computeService.computeMepfs('third', 300)
    var d = this.computeService.computeManager('third', 300)
    var e = this.computeService.computeHardwareSoftware('third', 300, 'third', 300, 'third', 300)

    var draw = (a + b + c + d) * .2
    console.warn(draw)

    var abort = (a + b + c + d) * .1
    console.warn(abort)

    var total = a + b + c + d + e + draw + abort
    console.warn(total)
  }

  submit(form: FormGroup) {
    this.submitted = true
    // Check if area is too big
    // Handle not requireds
    console.warn(form.value)
  }

}
