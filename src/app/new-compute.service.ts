import { Injectable } from '@angular/core';
import { Procurement } from './procurement.model';
import { ProcurementService } from './procurement.service';

@Injectable({
  providedIn: 'root'
})
export class NewComputeService {

  floorAreas = {
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: 'fourth',
    too_big: 'AREA IS TOO BIG'
  }

  // procurement = {
  //   software: {
  //     revit: 18699.70,
  //     cad: 13117.70,
  //     data_env: 6698.40,
  //     navis: 7256.60,
  //     // microsoft: 1228.40,
  //     // pdf: 768.06
  //   },
  //   equipment: {
  //     laptop: 70000
  //   },
  //   manpower: {
  //     manager: 43806,
  //     coordinator: 32287,
  //     modeler: 23243
  //   }
  // }

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

  procurement!: Procurement

  constructor(private procurementService: ProcurementService) {
    this.procurementService.getProcurement().subscribe(x => {
      this.procurement = x
    })
  }


  // ARCHITECTURE MODELER
  getArchitectureModelerValue(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getArchitectureModelerYvalue(lod, floorArea)
    var bValue = this.getArchitectureModelerBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getArchitectureModellerValue", ret)
    return (yValue * sqm) + bValue
  }

  getArchitectureModelerYvalue(lod: number, floorArea: string) {
    var current = this.architectureGetModelerCostValue(lod, floorArea);
    var prev = this.architectureGetPreviousModelerCostValue(lod, floorArea)

    var ret = (current.modelerCostValue - prev.modelerCostValue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getArchitectureYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getArchitectureModelerBvalue(lod: number, floorArea: string) {
    var current = this.architectureGetModelerCostValue(lod, floorArea);
    var yValue = this.getArchitectureModelerYvalue(lod, floorArea)

    var ret = current.modelerCostValue - (current.floorAreaValue * yValue)
    console.warn("getArchitectureBvalue", ret)
    return current.modelerCostValue - (current.floorAreaValue * yValue)
  }

  architectureGetModelerCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var modelerSalary = this.procurement.manpower.modeler
    var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var modelerCostvalue = (modelerCount * modelerSalary) * duration.month
    console.warn("architectureGetModelerCostValue", modelerCostvalue, duration.floorAreaValue)
    return {
      modelerCostValue: modelerCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  architectureGetPreviousModelerCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var modelerSalary = this.procurement.manpower.modeler
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var modelerCostValue = (modelerCount * modelerSalary) * duration.month
      console.warn("Prev", modelerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: modelerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var modelerSalary = this.procurement.manpower.modeler
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex]

      var modelerCostValue = (modelerCount * modelerSalary) * duration.month

      console.warn("Prev", modelerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: modelerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // ARCHITECTURE COORDINATOR
  getArchitectureCoordinatorValue(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getArchitectureCoordinatorYvalue(lod, floorArea)
    var bValue = this.getArchitectureCoordinatorBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getArchitectureModellerValue", ret)
    return (yValue * sqm) + bValue
  }

  getArchitectureCoordinatorYvalue(lod: number, floorArea: string) {
    var current = this.architectureGetCoordinatorCostValue(lod, floorArea);
    var prev = this.architectureGetPreviousCoordinatorCostValue(lod, floorArea)

    var ret = (current.coordinatorCostValue - prev.coordinatorCostValue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getArchitectureYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getArchitectureCoordinatorBvalue(lod: number, floorArea: string) {
    var current = this.architectureGetCoordinatorCostValue(lod, floorArea);
    var yValue = this.getArchitectureCoordinatorYvalue(lod, floorArea)

    var ret = current.coordinatorCostValue - (current.floorAreaValue * yValue)
    console.warn("getArchitectureBvalue", ret)
    return current.coordinatorCostValue - (current.floorAreaValue * yValue)
  }

  architectureGetCoordinatorCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var coordinatorSalary = this.procurement.manpower.coordinator
    var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var coordinatorCostvalue = (coordinatorCount * coordinatorSalary) * duration.month
    console.warn("architectureGetCoordinatorCostValue", coordinatorCostvalue, duration.floorAreaValue)
    return {
      coordinatorCostValue: coordinatorCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  architectureGetPreviousCoordinatorCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var coordinatorSalary = this.procurement.manpower.coordinator
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var coordinatorCostValue = (coordinatorCount * coordinatorSalary) * duration.month
      console.warn("Prev", coordinatorCostValue, duration.floorAreaValue)
      return {
        coordinatorCostValue: coordinatorCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var coordinatorSalary = this.procurement.manpower.coordinator
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex]

      var coordinatorCostValue = (coordinatorCount * coordinatorSalary) * duration.month

      console.warn("Prev", coordinatorCostValue, duration.floorAreaValue)
      return {
        coordinatorCostValue: coordinatorCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // ARCHITECTURE MODELER SOFTWARE
  getArchitectureModelerSoftwareValue(lod: number, floorArea: string, sqm: number) {
    var duration = this.getArchitectureModelerSoftwareDuration(lod, floorArea, sqm)
    var totalSoftwareCost = this.procurement.software.revit + this.procurement.software.cad + this.procurement.software.data_env + this.procurement.software.navis

    var ret = duration * totalSoftwareCost

    console.warn("getArchitectureModelerSoftwareValue", ret)
    return ret
  }

  getArchitectureModelerSoftwareDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getArchitectureModelerSoftwareYvalue(lod, floorArea)
    var bValue = this.getArchitectureModelerSoftwareBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getArchitectureModelerSoftwareDuration", ret)
    return ret
  }

  getArchitectureModelerSoftwareYvalue(lod: number, floorArea: string) {
    var current = this.architectureGetModelerSoftwareCostValue(lod, floorArea);
    var prev = this.architectureGetPreviousModelerSoftwareCostValue(lod, floorArea)

    var ret = (current.modelerSoftwareCostvalue - prev.modelerSoftwareCostvalue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getArchitectureModelerSoftwareYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getArchitectureModelerSoftwareBvalue(lod: number, floorArea: string) {
    var current = this.architectureGetModelerSoftwareCostValue(lod, floorArea);
    var yValue = this.getArchitectureModelerSoftwareYvalue(lod, floorArea)

    var ret = current.modelerSoftwareCostvalue - (current.floorAreaValue * yValue)
    console.warn("getArchitectureBvalue", ret)
    return ret
  }

  architectureGetModelerSoftwareCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var modelerSoftwareCostvalue = modelerCount * duration.month
    console.warn("architectureGetModelerSoftwareCostValue", modelerSoftwareCostvalue, duration.floorAreaValue)
    return {
      modelerSoftwareCostvalue: modelerSoftwareCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  architectureGetPreviousModelerSoftwareCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var modelerSoftwareCostvalue = modelerCount * duration.month
      console.warn("Prev", modelerSoftwareCostvalue, duration.floorAreaValue)
      return {
        modelerSoftwareCostvalue: modelerSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex]

      var modelerSoftwareCostvalue = modelerCount * duration.month

      console.warn("Prev", modelerSoftwareCostvalue, duration.floorAreaValue)
      return {
        modelerSoftwareCostvalue: modelerSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // ARCHITECTURE COORDINATOR SOFTWARE
  getArchitectureCoordinatorSoftwareValue(lod: number, floorArea: string, sqm: number) {
    var duration = this.getArchitectureCoordinatorSoftwareDuration(lod, floorArea, sqm)
    var totalSoftwareCost = this.procurement.software.revit + this.procurement.software.cad + this.procurement.software.data_env + this.procurement.software.navis

    var ret = duration * totalSoftwareCost

    console.warn("getArchitectureCoordinatorSoftwareValue", ret)
    return ret
  }

  getArchitectureCoordinatorSoftwareDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getArchitectureCoordinatorSoftwareYvalue(lod, floorArea)
    var bValue = this.getArchitectureCoordinatorSoftwareBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getArchitectureCoordinatorSoftwareDuration", ret)
    return ret
  }

  getArchitectureCoordinatorSoftwareYvalue(lod: number, floorArea: string) {
    var current = this.architectureGetCoordinatorSoftwareCostValue(lod, floorArea);
    var prev = this.architectureGetPreviousCoordinatorSoftwareCostValue(lod, floorArea)

    var ret = (current.coordinatorSoftwareCostvalue - prev.coordinatorSoftwareCostvalue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getArchitectureCoordinatorSoftwareYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getArchitectureCoordinatorSoftwareBvalue(lod: number, floorArea: string) {
    var current = this.architectureGetCoordinatorSoftwareCostValue(lod, floorArea);
    var yValue = this.getArchitectureCoordinatorSoftwareYvalue(lod, floorArea)

    var ret = current.coordinatorSoftwareCostvalue - (current.floorAreaValue * yValue)
    console.warn("getArchitectureBvalue", ret)
    return ret
  }

  architectureGetCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
    console.warn("architectureGetCoordinatorSoftwareCostValue", coordinatorSoftwareCostvalue, duration.floorAreaValue)
    return {
      coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  architectureGetPreviousCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month

      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // ARCHITECTURE MODELER EQUIPMENT
  getArchitectureModelerEquipmentValue(lod: number, floorArea: string, sqm: number) {
    var duration = Math.ceil(this.getArchitectureModelerEquipmentDuration(lod, floorArea, sqm))
    var totalEquipmentCost = this.procurement.equipment.laptop

    var ret = duration * totalEquipmentCost

    console.warn("getArchitectureModelerEquipmentValue", ret)
    return ret
  }

  getArchitectureModelerEquipmentDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getArchitectureModelerEquipmentYvalue(lod, floorArea)
    var bValue = this.getArchitectureModelerEquipmentBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getArchitectureModelerEquipmentDuration", ret)
    return ret
  }

  getArchitectureModelerEquipmentYvalue(lod: number, floorArea: string) {
    var current = this.architectureGetModelerEquipmentCostValue(lod, floorArea);
    var prev = this.architectureGetPreviousModelerEquipmentCostValue(lod, floorArea)

    var ret = (current.modelerCount - prev.modelerCount) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getArchitectureModelerEquipmentYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getArchitectureModelerEquipmentBvalue(lod: number, floorArea: string) {
    var current = this.architectureGetModelerEquipmentCostValue(lod, floorArea);
    var yValue = this.getArchitectureModelerEquipmentYvalue(lod, floorArea)

    var ret = current.modelerCount - (current.floorAreaValue * yValue)
    console.warn("getArchitectureBvalue", ret)
    return ret
  }

  architectureGetModelerEquipmentCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    return {
      modelerCount: modelerCount,
      floorAreaValue: duration.floorAreaValue
    }
  }

  architectureGetPreviousModelerEquipmentCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      return {
        modelerCount: modelerCount,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex]

      return {
        modelerCount: modelerCount,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // ARCHITECTURE COORDINATOR EQUIPMENT
  getArchitectureCoordinatorEquipmentValue(lod: number, floorArea: string, sqm: number) {
    var duration = Math.ceil(this.getArchitectureCoordinatorEquipmentDuration(lod, floorArea, sqm))
    var totalEquipmentCost = this.procurement.equipment.laptop

    var ret = duration * totalEquipmentCost

    console.warn("getArchitectureCoordinatorEquipmentValue", ret)
    return ret
  }

  getArchitectureCoordinatorEquipmentDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getArchitectureCoordinatorEquipmentYvalue(lod, floorArea)
    var bValue = this.getArchitectureCoordinatorEquipmentBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getArchitectureCoordinatorEquipmentDuration", ret)
    return ret
  }

  getArchitectureCoordinatorEquipmentYvalue(lod: number, floorArea: string) {
    var current = this.architectureGetCoordinatorEquipmentCostValue(lod, floorArea);
    var prev = this.architectureGetPreviousCoordinatorEquipmentCostValue(lod, floorArea)

    var ret = (current.coordinatorCount - prev.coordinatorCount) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getArchitectureCoordinatorEquipmentYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getArchitectureCoordinatorEquipmentBvalue(lod: number, floorArea: string) {
    var current = this.architectureGetCoordinatorEquipmentCostValue(lod, floorArea);
    var yValue = this.getArchitectureCoordinatorEquipmentYvalue(lod, floorArea)

    var ret = current.coordinatorCount - (current.floorAreaValue * yValue)
    console.warn("getArchitectureBvalue", ret)
    return ret
  }

  architectureGetCoordinatorEquipmentCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    return {
      coordinatorCount: coordinatorCount,
      floorAreaValue: duration.floorAreaValue
    }
  }

  architectureGetPreviousCoordinatorEquipmentCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      return {
        coordinatorCount: coordinatorCount,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex]

      return {
        coordinatorCount: coordinatorCount,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

}
