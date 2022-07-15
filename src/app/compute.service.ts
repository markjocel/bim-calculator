import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComputeManagerService } from './compute-manager.service';
import { ComputeMepfsService } from './compute-mepfs.service';
import { ComputeStructureService } from './compute-structure.service';
import { NewComputeService } from './new-compute.service';

@Injectable({
  providedIn: 'root'
})

export class ComputeService {

  constructor(private computeArchitectureService: NewComputeService,
    private computeStructureService: ComputeStructureService,
    private computeMepfsService: ComputeMepfsService,
    private computeManagerService: ComputeManagerService
  ) { }

  SERVICE_ARCHITECTURE = 'architecture'
  SERVICE_STRUCTURE = 'structure'
  SERVICE_MEPFS = 'mepfs'

  floorAreas = {
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: 'fourth',
    too_big: 'AREA IS TOO BIG'
  }

  procurement = {
    software: {
      revit: 18699.70,
      cad: 13117.70,
      data_env: 6698.40,
      navis: 7256.60,
      // microsoft: 1228.40,
      // pdf: 768.06
    },
    equipment: {
      laptop: 70000
    },
    manpower: {
      manager: 43806,
      coord: 32287,
      modeler: 23243
    }
  }

  manpower = {
    architecture: [
      {
        lod: 0,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
        ]
      },
      {
        lod: 100,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 3,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 4,
            coordinator: 0,
            manager: 1,
          },
        ]
      },
      {
        lod: 200,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 3,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 4,
            coordinator: 0,
            manager: 1,
          },
        ]
      },

      {
        lod: 300,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 4,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
      {
        lod: 400,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 6,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
      {
        lod: 500,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 6,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
    ],
    structure: [
      {
        lod: 0,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
        ]
      },
      {
        lod: 100,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 3,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 4,
            coordinator: 0,
            manager: 1,
          },
        ]
      },
      {
        lod: 200,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 3,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 4,
            coordinator: 0,
            manager: 1,
          },
        ]
      },

      {
        lod: 300,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 4,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
      {
        lod: 400,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 4,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
      {
        lod: 500,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 4,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
    ],
    mepfs: [
      {
        lod: 0,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
        ]
      },
      {
        lod: 100,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 4,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 5,
            coordinator: 0,
            manager: 1,
          },
        ]
      },
      {
        lod: 200,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 4,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 5,
            coordinator: 0,
            manager: 1,
          },
        ]
      },

      {
        lod: 300,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 8,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
      {
        lod: 400,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 10,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
      {
        lod: 500,
        man: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000,
            modeler: 10,
            coordinator: 1,
            manager: 1,
          },
        ]
      },
    ],
  }

  duration = {
    architecture: [
      {
        lod: 0,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 0
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 0,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 0
          },
        ]
      },
      {
        lod: 100,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 2,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 3,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 5
          },
        ]
      },
      {
        lod: 200,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 2,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 3,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 5
          },
        ]
      },

      {
        lod: 300,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 2,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 4,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 6
          },
        ]
      },
      {
        lod: 400,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 4,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 5,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 8
          },
        ]
      },
      {
        lod: 500,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 4,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 5,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 8
          },
        ]
      },
    ],
    structure: [
      {
        lod: 0,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 0
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 0,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 0
          },
        ]
      },
      {
        lod: 100,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 2,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 3,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 5
          },
        ]
      },
      {
        lod: 200,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 2,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 3,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 5
          },
        ]
      },

      {
        lod: 300,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 2,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 3,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 6
          },
        ]
      },
      {
        lod: 400,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 3,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 4,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 7
          },
        ]
      },
      {
        lod: 500,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 1
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 3,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 4,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 7
          },
        ]
      },
    ],
    mepfs: [
      {
        lod: 0,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 0
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 0,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 0
          },
        ]
      },
      {
        lod: 100,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 2
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 3,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 5,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 6
          },
        ]
      },
      {
        lod: 200,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 2
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 3,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 5,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 6
          },
        ]
      },

      {
        lod: 300,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 2
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 4,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 6,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 8
          },
        ]
      },
      {
        lod: 400,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 2
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 4,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 6,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 9
          },
        ]
      },
      {
        lod: 500,
        months: [
          {
            floorArea: this.floorAreas.first,
            floorAreaValue: 500, month: 2
          },
          {
            floorArea: this.floorAreas.second,
            floorAreaValue: 1000, month: 4,
          },
          {
            floorArea: this.floorAreas.third,
            floorAreaValue: 5000, month: 6,
          },
          {
            floorArea: this.floorAreas.fourth,
            floorAreaValue: 10000, month: 9
          },
        ]
      },
    ],
  }

  computeCost(form: FormGroup) {

  }

  getFloorArea(sqm: number): string {
    if (sqm <= 500) {
      return this.floorAreas.first
    } else if (sqm <= 1000) {
      return this.floorAreas.second
    } else if (sqm <= 5000) {
      return this.floorAreas.third
    } else if (sqm <= 10000) {
      return this.floorAreas.fourth
    }
    else {
      return this.floorAreas.too_big
    }
  }

  computeArchitecture(floorArea: string, lod: number, sqm: number) {
    if (lod == 0) {
      return 0
    } else {
      var modellerCost = this.computeArchitectureService.getArchitectureModelerValue(lod, floorArea, sqm)
      var coordinatorCost = this.computeArchitectureService.getArchitectureCoordinatorValue(lod, floorArea, sqm)

      var ret = modellerCost + coordinatorCost
      console.log("FINAL ARCHITECTURE:", ret)
      return ret
    }

  }

  computeStructure(floorArea: string, lod: number, sqm: number) {
    if (lod == 0) {
      return 0
    } else {
      var modellerCost = this.computeStructureService.getStructureModelerValue(lod, floorArea, sqm)
      var coordinatorCost = this.computeStructureService.getStructureCoordinatorValue(lod, floorArea, sqm)

      var ret = modellerCost + coordinatorCost
      console.log("FINAL STRUCTURE:", ret)
      return ret
    }
  }

  computeMepfs(floorArea: string, lod: number, sqm: number) {
    if (lod == 0) {
      return 0
    } else {
      var modellerCost = this.computeMepfsService.getMepfsModelerValue(lod, floorArea, sqm)
      var coordinatorCost = this.computeMepfsService.getMepfsCoordinatorValue(lod, floorArea, sqm)

      var ret = modellerCost + coordinatorCost
      console.log("FINAL MEPFS:", ret)
      return ret
    }
  }

  computeManager(floorArea: string, architectureLod: number, structureLod: number, mepfsLod: number, sqm: number) {
    // Manager * max duration of services
    let maxLod = Math.max(architectureLod, structureLod, mepfsLod)

    var ret = this.computeManagerService.getManagerValue(maxLod, floorArea, sqm)
    console.log("FINAL Manager:", ret)
    return ret
  }

  computeSoftware(floorArea: string, architectureLod: number, structureLod: number, mepfsLod: number, sqm: number) {
    let maxLod = Math.max(architectureLod, structureLod, mepfsLod)

    var totalArchitectureModelerSoftwareCost = this.computeArchitectureService.getArchitectureModelerSoftwareValue(architectureLod, floorArea, sqm)
    var totalStructureModelerSoftwareCost = this.computeStructureService.getStructureModelerSoftwareValue(structureLod, floorArea, sqm)
    var totalMepfsModelerSoftwareCost = this.computeMepfsService.getMepfsModelerSoftwareValue(mepfsLod, floorArea, sqm)

    var totalModelerSoftwareCost = totalArchitectureModelerSoftwareCost + totalStructureModelerSoftwareCost + totalMepfsModelerSoftwareCost

    var totalArchitectureCoordinatorSoftwareCost = this.computeArchitectureService.getArchitectureCoordinatorSoftwareValue(architectureLod, floorArea, sqm)
    var totalStructureCoordinatorSoftwareCost = this.computeStructureService.getStructureCoordinatorSoftwareValue(structureLod, floorArea, sqm)
    var totalMepfsCoordinatorSoftwareCost = this.computeMepfsService.getMepfsCoordinatorSoftwareValue(mepfsLod, floorArea, sqm)

    var totalCoordinatorSoftwareCost = totalArchitectureCoordinatorSoftwareCost + totalStructureCoordinatorSoftwareCost + totalMepfsCoordinatorSoftwareCost

    var managerSoftwareCost = this.computeManagerService.getManagerSoftwareValue(maxLod, floorArea, sqm)

    var ret = totalModelerSoftwareCost + totalCoordinatorSoftwareCost + managerSoftwareCost
    console.log("FINAL Software:", ret)
    return ret
  }

  computeHardware(floorArea: string, architectureLod: number, structureLod: number, mepfsLod: number, sqm: number) {
    let maxLod = Math.max(architectureLod, structureLod, mepfsLod)

    var totalArchitectureModelerEquipmentCost = this.computeArchitectureService.getArchitectureModelerEquipmentValue(architectureLod, floorArea, sqm)
    var totalStructureModelerEquipmentCost = this.computeStructureService.getStructureModelerEquipmentValue(structureLod, floorArea, sqm)
    var totalMepfsModelerEquipmenteCost = this.computeMepfsService.getMepfsModelerEquipmentValue(mepfsLod, floorArea, sqm)

    var totalModelerEquipmentCost = totalArchitectureModelerEquipmentCost + totalStructureModelerEquipmentCost + totalMepfsModelerEquipmenteCost

    var totalArchitectureCoordinatorEquipmentCost = this.computeArchitectureService.getArchitectureCoordinatorEquipmentValue(architectureLod, floorArea, sqm)
    var totalStructureCoordinatorEquipmentCost = this.computeStructureService.getStructureCoordinatorEquipmentValue(structureLod, floorArea, sqm)
    var totalMepfsCoordinatorEquipmentCost = this.computeMepfsService.getMepfsCoordinatorEquipmentValue(mepfsLod, floorArea, sqm)

    var totalCoordinatorEquipmentCost = totalArchitectureCoordinatorEquipmentCost + totalStructureCoordinatorEquipmentCost + totalMepfsCoordinatorEquipmentCost

    var managerEquipmentCost = this.computeManagerService.getManagerEquipmentValue(maxLod, floorArea, sqm)

    var ret = totalModelerEquipmentCost + totalCoordinatorEquipmentCost + managerEquipmentCost
    console.log("FINAL Equipment:", ret)
    return ret
  }

}
