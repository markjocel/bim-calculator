import { Injectable } from '@angular/core';
import { Procurement } from './procurement.model';
import { ProcurementService } from './procurement.service';

@Injectable({
  providedIn: 'root'
})
export class ComputeManagerService {

  floorAreas = {
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: 'fourth',
    too_big: 'AREA IS TOO BIG'
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

  procurement!: Procurement

  constructor(private procurementService: ProcurementService) {
    this.procurementService.getProcurement().subscribe(x => {
      this.procurement = x
    })
  }

  // MANAGER LOD = MAX LOD OF ARCHI,STRUC, MEP

  // DURATION IS MAX DURATION OF ARCHI STRUC MEP

  //  MODELER
  getManagerValue(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getManagerYvalue(lod, floorArea)
    var bValue = this.getManagerBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getMepfsModellerValue", ret)
    return (yValue * sqm) + bValue
  }

  getManagerYvalue(lod: number, floorArea: string) {
    var current = this.getManagerCostValue(lod, floorArea);
    var prev = this.mepfsGetPreviousModelerCostValue(lod, floorArea)

    var ret = (current.modelerCostValue - prev.modelerCostValue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getMepfsYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getManagerBvalue(lod: number, floorArea: string) {
    var current = this.getManagerCostValue(lod, floorArea);
    var yValue = this.getManagerYvalue(lod, floorArea)

    var ret = current.modelerCostValue - (current.floorAreaValue * yValue)
    console.warn("getMepfsBvalue", ret)
    return current.modelerCostValue - (current.floorAreaValue * yValue)
  }

  getManagerCostValue(lod: number, floorArea: string) {
    var managerCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].manager
    var managerSalary = this.procurement.manpower.manager
    // Mepfs is always max duration?
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var managerCostValue = (managerCount * managerSalary) * duration.month
    console.warn("mepfsGetModelerCostValue", managerCostValue, duration.floorAreaValue)
    return {
      modelerCostValue: managerCostValue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  mepfsGetPreviousModelerCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var managerCount = previousMan.manager
      var managerSalary = this.procurement.manpower.manager
      // Mepfs is always max duration?
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var managerCostValue = (managerCount * managerSalary) * duration.month
      console.warn("Prev", managerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: managerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var managerCount = previousMan.manager
      var managerSalary = this.procurement.manpower.manager
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      var managerCostValue = (managerCount * managerSalary) * duration.month

      console.warn("Prev", managerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: managerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }



  // MANAGER COORDINATOR SOFTWARE
  getManagerSoftwareValue(lod: number, floorArea: string, sqm: number) {
    var duration = this.getManagerCoordinatorSoftwareDuration(lod, floorArea, sqm)
    var totalSoftwareCost = this.procurement.software.revit + this.procurement.software.cad + this.procurement.software.data_env + this.procurement.software.navis

    var ret = duration * totalSoftwareCost

    console.warn("getManagerSoftwareValue", ret)
    return ret
  }

  getManagerCoordinatorSoftwareDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getManagerCoordinatorSoftwareYvalue(lod, floorArea)
    var bValue = this.getManagerCoordinatorSoftwareBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getManagerCoordinatorSoftwareDuration", ret)
    return ret
  }

  getManagerCoordinatorSoftwareYvalue(lod: number, floorArea: string) {
    var current = this.managerGetCoordinatorSoftwareCostValue(lod, floorArea);
    var prev = this.managerGetPreviousCoordinatorSoftwareCostValue(lod, floorArea)

    var ret = (current.coordinatorSoftwareCostvalue - prev.coordinatorSoftwareCostvalue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getManagerCoordinatorSoftwareYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getManagerCoordinatorSoftwareBvalue(lod: number, floorArea: string) {
    var current = this.managerGetCoordinatorSoftwareCostValue(lod, floorArea);
    var yValue = this.getManagerCoordinatorSoftwareYvalue(lod, floorArea)

    var ret = current.coordinatorSoftwareCostvalue - (current.floorAreaValue * yValue)
    console.warn("getManagerBvalue", ret)
    return ret
  }

  managerGetCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].manager
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
    console.warn("managerGetCoordinatorSoftwareCostValue", coordinatorSoftwareCostvalue, duration.floorAreaValue)
    return {
      coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  managerGetPreviousCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.manager
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.manager
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month

      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // MANAGER  EQUIPMENT
  getManagerEquipmentValue(lod: number, floorArea: string, sqm: number) {
    var duration = Math.ceil(this.getManagerEquipmentDuration(lod, floorArea, sqm))
    var totalEquipmentCost = this.procurement.equipment.laptop

    var ret = duration * totalEquipmentCost

    console.warn("getManagerEquipmentValue", ret)
    return ret
  }

  getManagerEquipmentDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getManagerEquipmentYvalue(lod, floorArea)
    var bValue = this.getManagerEquipmentBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getManagerEquipmentDuration", ret)
    return ret
  }

  getManagerEquipmentYvalue(lod: number, floorArea: string) {
    var current = this.managerGetEquipmentCostValue(lod, floorArea);
    var prev = this.managerGetPreviousEquipmentCostValue(lod, floorArea)

    var ret = (current.Count - prev.Count) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getManagerEquipmentYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getManagerEquipmentBvalue(lod: number, floorArea: string) {
    var current = this.managerGetEquipmentCostValue(lod, floorArea);
    var yValue = this.getManagerEquipmentYvalue(lod, floorArea)

    var ret = current.Count - (current.floorAreaValue * yValue)
    console.warn("getManagerBvalue", ret)
    return ret
  }

  managerGetEquipmentCostValue(lod: number, floorArea: string) {
    var Count = this.manpower.architecture.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].manager
    var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    return {
      Count: Count,
      floorAreaValue: duration.floorAreaValue
    }
  }

  managerGetPreviousEquipmentCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.architecture.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var Count = previousMan.manager
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      return {
        Count: Count,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.architecture.filter(x => x.lod == lod)[0].man[currentIndex]
      var Count = previousMan.manager
      var duration = this.duration.architecture.filter(x => x.lod == lod)[0].months[currentIndex]

      return {
        Count: Count,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }
}
