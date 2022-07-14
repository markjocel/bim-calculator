import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputeService } from 'src/app/compute.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  costForm: FormGroup
  totalPayment: number = 0
  computations: any = {}

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
      {
        value: 0,
        text: 'NOT REQUIRED'
      },
      {
        value: 100,
        text: 'LOD 100-CONCEPTUAL',
      },
      {
        value: 200,
        text: 'LOD 200-SCHEMATIC',
      },
      {
        value: 300,
        text: 'LOD 300-DESIGN',
      },
      {
        value: 400,
        text: 'LOD 400-CONSTRUCTION',
      },
      {
        value: 500,
        text: 'LOD 500-AS-BUILT',
      },
    ],
    drawing_production: [
      {
        value: 1,
        text: 'Yes',
      },
      {
        value: 0,
        text: 'Not Required'
      },
    ]
  }

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private computeService: ComputeService, private router: Router) {
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
  }

  submit(form: FormGroup) {
    this.submitted = true
    // Check if area is too big
    // Handle not requireds meron na
    if (form.valid) {
      var floorArea = this.computeService.getFloorArea(form.value.project_floor_area)
      var architectureLod = form.value.architecture.value
      var structureLod = form.value.structure.value
      var mepfsLod = form.value.mepfs.value
      var drawingProduction = form.value.drawing_production.value

      console.warn(architectureLod, structureLod, mepfsLod)

      if (floorArea == 'AREA IS TOO BIG') {
        // catch invalid here
      } else {
        // valid response
        var architectureTotal = this.computeService.computeArchitecture(floorArea, architectureLod)
        var structureTotal = this.computeService.computeStructure(floorArea, structureLod)
        var mepfsTotal = this.computeService.computeMepfs(floorArea, architectureLod)
        var managementTotal = this.computeService.computeManager(floorArea, architectureLod, structureLod, mepfsLod)
        var hardwareSoftwareTotal = this.computeService.computeHardwareSoftware(floorArea, architectureLod, structureLod, mepfsLod)
        var drawingTotal
        if (drawingProduction == 1) {
          drawingTotal = (architectureTotal + structureTotal + mepfsTotal + managementTotal) * .2
        } else {
          drawingTotal = 0
        }
        var abortCosts = (architectureTotal + structureTotal + mepfsTotal + managementTotal) * .1

        var overallTotal = architectureTotal + structureTotal + mepfsTotal + managementTotal + hardwareSoftwareTotal + drawingTotal + abortCosts
        this.totalPayment = overallTotal

        this.computations = {
          form: form.value,
          architectureTotal: architectureTotal,
          structureTotal: structureTotal,
          mepfsTotal: mepfsTotal,
          managementTotal: managementTotal,
          hardwareSoftwareTotal: hardwareSoftwareTotal,
          drawingTotal: drawingTotal,
          abortCosts: abortCosts,
          overallTotal: overallTotal
        }

        localStorage.setItem("computations", JSON.stringify(this.computations))
        console.warn("TOTAL", overallTotal)
      }
    }
  }

  showFullSummary() {
    if (this.costForm.valid) {
      this.router.navigate(['/summary'], { state: { data: this.computations } })
    }
  }

}
