import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputeService } from 'src/app/compute.service';
import { Procurement } from 'src/app/procurement.model';
import { ProcurementService } from 'src/app/procurement.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  costForm: FormGroup
  totalPayment: number = 0
  computations: any = {}
  showFooterError: boolean = false

  options = {
    project_type: [
      {
        value: .7,
        text: 'Residential/Townhouses'
      },
      {
        value: 1,
        text: 'High-Rise Towers'
      },
      {
        value: 1,
        text: 'Mid-rise Buildings'
      },
      {
        value: 1,
        text: 'HealthCare',
      },
      {
        value: .7,
        text: 'Educational',
      },
      {
        value: .8,
        text: 'Data Center',
      },
      {
        value: 1,
        text: 'Exhibition Hall',
      },
      {
        value: 1,
        text: 'Laboratory',
      },
      {
        value: .7,
        text: 'Warehouse',
      },
      {
        value: .7,
        text: 'Workshop',
      },
      {
        value: 1,
        text: 'Theater',
      }
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

  newProcurement!: Procurement
  defaultProcure!: Procurement

  steps: number = 1;

  constructor(private formBuilder: FormBuilder,
    private computeService: ComputeService,
    private router: Router,
    private procurementService: ProcurementService
  ) {

    this.procurementService.getProcurement().subscribe(x => {
      this.defaultProcure = x
      console.warn(x)
    })

    this.costForm = this.formBuilder.group({
      project_type: ['', Validators.required],
      project_floor_area: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.max(10000)])],
      project_location: [''],
      architecture: ['', Validators.required],
      structure: ['', Validators.required],
      mepfs: ['', Validators.required],
      drawing_production: ['', Validators.required],
      full_name: ['', Validators.required],
      contact_number: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: ['', Validators.required],
      revit: [true],
      cad: [true],
      data_env: [true],
      navis: [true],
      revit_input: [this.defaultProcure.software.revit, Validators.required],
      cad_input: [this.defaultProcure.software.cad, Validators.required],
      data_env_input: [this.defaultProcure.software.data_env, Validators.required],
      navis_input: [this.defaultProcure.software.navis, Validators.required],
      laptop: [this.defaultProcure.equipment.laptop, Validators.required],
      manager: [this.defaultProcure.manpower.manager, Validators.required],
      coordinator: [this.defaultProcure.manpower.coordinator, Validators.required],
      modeler: [this.defaultProcure.manpower.modeler, Validators.required],
    })
  }

  ngOnInit(): void {

    // this.newProcurement = {
    //   software: {
    //     revit: 1,
    //     cad: 1,
    //     data_env: 1,
    //     navis: 1
    //   },
    //   equipment: {
    //     laptop: 1
    //   },
    //   manpower: {
    //     manager: 1,
    //     coordinator: 1,
    //     modeler: 1
    //   }
    // }

    // this.procurementService.setProcurement(this.newProcurement)
    // console.warn(this.defaultProcure)
  }

  submit(form: FormGroup) {
    // Check if area is too big
    // Handle not requireds meron na
    console.log(form)
    if (form.valid) {
      this.showFooterError = false

      var floorArea = this.computeService.getFloorArea(form.value.project_floor_area)
      var architectureLod = form.value.architecture.value
      var structureLod = form.value.structure.value
      var mepfsLod = form.value.mepfs.value
      var drawingProduction = form.value.drawing_production.value

      console.warn(architectureLod, structureLod, mepfsLod)

      if (floorArea == 'AREA IS TOO BIG') {
        // catch invalid here
        this.submitted = false
      } else {

        // valid response
        this.submitted = true

        this.newProcurement = {
          software: {
            revit: form.value.revit == true ? form.value.revit_input : 0,
            cad: form.value.revit == true ? form.value.cad_input : 0,
            data_env: form.value.revit == true ? form.value.data_env_input : 0,
            navis: form.value.revit == true ? form.value.navis_input : 0
          },
          equipment: {
            laptop: form.value.laptop
          },
          manpower: {
            manager: form.value.manager,
            coordinator: form.value.coordinator,
            modeler: form.value.modeler
          }
        }
        this.procurementService.setProcurement(this.newProcurement)

        var architectureTotal = this.computeService.computeArchitecture(floorArea, architectureLod, form.value.project_floor_area) * form.value.project_type.value
        var structureTotal = this.computeService.computeStructure(floorArea, structureLod, form.value.project_floor_area) * form.value.project_type.value
        var mepfsTotal = this.computeService.computeMepfs(floorArea, mepfsLod, form.value.project_floor_area) * form.value.project_type.value
        var managementTotal = this.computeService.computeManager(floorArea, architectureLod, structureLod, mepfsLod, form.value.project_floor_area) * form.value.project_type.value
        var softwareTotal = this.computeService.computeSoftware(floorArea, architectureLod, structureLod, mepfsLod, form.value.project_floor_area) * form.value.project_type.value
        var equipmentTotal = this.computeService.computeHardware(floorArea, architectureLod, structureLod, mepfsLod, form.value.project_floor_area) * form.value.project_type.value
        var drawingTotal
        if (drawingProduction == 1) {
          drawingTotal = (architectureTotal + structureTotal + mepfsTotal + managementTotal) * .2
        } else {
          drawingTotal = 0
        }
        var abortCosts = (architectureTotal + structureTotal + mepfsTotal + managementTotal) * .1

        var overallTotal = architectureTotal + structureTotal + mepfsTotal + managementTotal + softwareTotal + equipmentTotal + drawingTotal + abortCosts
        this.totalPayment = overallTotal

        this.computations = {
          form: form.value,
          architectureTotal: architectureTotal,
          structureTotal: structureTotal,
          mepfsTotal: mepfsTotal,
          managementTotal: managementTotal,
          softwareTotal: softwareTotal,
          equipmentTotal: equipmentTotal,
          drawingTotal: drawingTotal,
          abortCosts: abortCosts,
          overallTotal: overallTotal
        }

        localStorage.setItem("computations", JSON.stringify(this.computations))
        console.warn("TOTAL", overallTotal)
      }
    } else {
      this.showFooterError = true
    }
  }

  showFullSummary() {
    if (this.costForm.valid && this.submitted) {
      this.router.navigate(['/summary'], { state: { data: this.computations } })
    }
  }

  back() {
    this.steps == 1 ? null : this.steps -= 1
  }

  next() {
    console.log(this.costForm)
    var form = this.costForm.controls
    switch (this.steps) {
      case 1:
        if (form['revit_input'].valid && form['cad_input'].valid && form['data_env_input'].valid && form['navis_input'].valid && form['laptop'].valid && form['manager'].valid && form['modeler'].valid && form['coordinator'].valid) {
          this.steps += 1
          this.showFooterError = false
        } else this.showFooterError = true
        break;

      case 2:
        if (form['project_type'].valid && form['project_floor_area'].valid) {
          this.steps += 1
          this.showFooterError = false
        } else this.showFooterError = true
        break;

      case 3:
        if (form['architecture'].valid && form['structure'].valid && form['mepfs'].valid && form['drawing_production'].valid) {
          this.steps += 1
          this.showFooterError = false
        } else this.showFooterError = true
        break

      default:
        break;
    }
  }

}
