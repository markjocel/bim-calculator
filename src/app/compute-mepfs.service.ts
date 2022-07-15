import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputeMepfsService {

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
      coordinator: 32287,
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

  constructor() { }


  // MEPFS MODELER
  getMepfsModelerValue(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getMepfsModelerYvalue(lod, floorArea)
    var bValue = this.getMepfsModelerBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getMepfsModellerValue", ret)
    return (yValue * sqm) + bValue
  }

  getMepfsModelerYvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetModelerCostValue(lod, floorArea);
    var prev = this.mepfsGetPreviousModelerCostValue(lod, floorArea)

    var ret = (current.modelerCostValue - prev.modelerCostValue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getMepfsYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getMepfsModelerBvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetModelerCostValue(lod, floorArea);
    var yValue = this.getMepfsModelerYvalue(lod, floorArea)

    var ret = current.modelerCostValue - (current.floorAreaValue * yValue)
    console.warn("getMepfsBvalue", ret)
    return current.modelerCostValue - (current.floorAreaValue * yValue)
  }

  mepfsGetModelerCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var modelerSalary = this.procurement.manpower.modeler
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var modelerCostvalue = (modelerCount * modelerSalary) * duration.month
    console.warn("mepfsGetModelerCostValue", modelerCostvalue, duration.floorAreaValue)
    return {
      modelerCostValue: modelerCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  mepfsGetPreviousModelerCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var modelerSalary = this.procurement.manpower.modeler
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var modelerCostValue = (modelerCount * modelerSalary) * duration.month
      console.warn("Prev", modelerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: modelerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var modelerSalary = this.procurement.manpower.modeler
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      var modelerCostValue = (modelerCount * modelerSalary) * duration.month

      console.warn("Prev", modelerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: modelerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // MEPFS COORDINATOR
  getMepfsCoordinatorValue(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getMepfsCoordinatorYvalue(lod, floorArea)
    var bValue = this.getMepfsCoordinatorBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getMepfsModellerValue", ret)
    return (yValue * sqm) + bValue
  }

  getMepfsCoordinatorYvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetCoordinatorCostValue(lod, floorArea);
    var prev = this.mepfsGetPreviousCoordinatorCostValue(lod, floorArea)

    var ret = (current.coordinatorCostValue - prev.coordinatorCostValue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getMepfsYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getMepfsCoordinatorBvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetCoordinatorCostValue(lod, floorArea);
    var yValue = this.getMepfsCoordinatorYvalue(lod, floorArea)

    var ret = current.coordinatorCostValue - (current.floorAreaValue * yValue)
    console.warn("getMepfsBvalue", ret)
    return current.coordinatorCostValue - (current.floorAreaValue * yValue)
  }

  mepfsGetCoordinatorCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var coordinatorSalary = this.procurement.manpower.coordinator
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var coordinatorCostvalue = (coordinatorCount * coordinatorSalary) * duration.month
    console.warn("mepfsGetCoordinatorCostValue", coordinatorCostvalue, duration.floorAreaValue)
    return {
      coordinatorCostValue: coordinatorCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  mepfsGetPreviousCoordinatorCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var coordinatorSalary = this.procurement.manpower.coordinator
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var coordinatorCostValue = (coordinatorCount * coordinatorSalary) * duration.month
      console.warn("Prev", coordinatorCostValue, duration.floorAreaValue)
      return {
        coordinatorCostValue: coordinatorCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var coordinatorSalary = this.procurement.manpower.coordinator
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      var coordinatorCostValue = (coordinatorCount * coordinatorSalary) * duration.month

      console.warn("Prev", coordinatorCostValue, duration.floorAreaValue)
      return {
        coordinatorCostValue: coordinatorCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // MEPFS MODELER SOFTWARE
  getMepfsModelerSoftwareValue(lod: number, floorArea: string, sqm: number) {
    var duration = this.getMepfsModelerSoftwareDuration(lod, floorArea, sqm)
    var totalSoftwareCost = this.procurement.software.revit + this.procurement.software.cad + this.procurement.software.data_env + this.procurement.software.navis

    var ret = duration * totalSoftwareCost

    console.warn("getMepfsModelerSoftwareValue", ret)
    return ret
  }

  getMepfsModelerSoftwareDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getMepfsModelerSoftwareYvalue(lod, floorArea)
    var bValue = this.getMepfsModelerSoftwareBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getMepfsModelerSoftwareDuration", ret)
    return ret
  }

  getMepfsModelerSoftwareYvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetModelerSoftwareCostValue(lod, floorArea);
    var prev = this.mepfsGetPreviousModelerSoftwareCostValue(lod, floorArea)

    var ret = (current.modelerSoftwareCostvalue - prev.modelerSoftwareCostvalue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getMepfsModelerSoftwareYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getMepfsModelerSoftwareBvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetModelerSoftwareCostValue(lod, floorArea);
    var yValue = this.getMepfsModelerSoftwareYvalue(lod, floorArea)

    var ret = current.modelerSoftwareCostvalue - (current.floorAreaValue * yValue)
    console.warn("getMepfsBvalue", ret)
    return ret
  }

  mepfsGetModelerSoftwareCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var modelerSoftwareCostvalue = modelerCount * duration.month
    console.warn("mepfsGetModelerSoftwareCostValue", modelerSoftwareCostvalue, duration.floorAreaValue)
    return {
      modelerSoftwareCostvalue: modelerSoftwareCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  mepfsGetPreviousModelerSoftwareCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var modelerSoftwareCostvalue = modelerCount * duration.month
      console.warn("Prev", modelerSoftwareCostvalue, duration.floorAreaValue)
      return {
        modelerSoftwareCostvalue: modelerSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      var modelerSoftwareCostvalue = modelerCount * duration.month

      console.warn("Prev", modelerSoftwareCostvalue, duration.floorAreaValue)
      return {
        modelerSoftwareCostvalue: modelerSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // MEPFS COORDINATOR SOFTWARE
  getMepfsCoordinatorSoftwareValue(lod: number, floorArea: string, sqm: number) {
    var duration = this.getMepfsCoordinatorSoftwareDuration(lod, floorArea, sqm)
    var totalSoftwareCost = this.procurement.software.revit + this.procurement.software.cad + this.procurement.software.data_env + this.procurement.software.navis

    var ret = duration * totalSoftwareCost

    console.warn("getMepfsCoordinatorSoftwareValue", ret)
    return ret
  }

  getMepfsCoordinatorSoftwareDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getMepfsCoordinatorSoftwareYvalue(lod, floorArea)
    var bValue = this.getMepfsCoordinatorSoftwareBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getMepfsCoordinatorSoftwareDuration", ret)
    return ret
  }

  getMepfsCoordinatorSoftwareYvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetCoordinatorSoftwareCostValue(lod, floorArea);
    var prev = this.mepfsGetPreviousCoordinatorSoftwareCostValue(lod, floorArea)

    var ret = (current.coordinatorSoftwareCostvalue - prev.coordinatorSoftwareCostvalue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getMepfsCoordinatorSoftwareYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getMepfsCoordinatorSoftwareBvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetCoordinatorSoftwareCostValue(lod, floorArea);
    var yValue = this.getMepfsCoordinatorSoftwareYvalue(lod, floorArea)

    var ret = current.coordinatorSoftwareCostvalue - (current.floorAreaValue * yValue)
    console.warn("getMepfsBvalue", ret)
    return ret
  }

  mepfsGetCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
    console.warn("mepfsGetCoordinatorSoftwareCostValue", coordinatorSoftwareCostvalue, duration.floorAreaValue)
    return {
      coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  mepfsGetPreviousCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month

      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // MEPFS MODELER EQUIPMENT
  getMepfsModelerEquipmentValue(lod: number, floorArea: string, sqm: number) {
    var duration = Math.ceil(this.getMepfsModelerEquipmentDuration(lod, floorArea, sqm))
    var totalEquipmentCost = this.procurement.equipment.laptop

    var ret = duration * totalEquipmentCost

    console.warn("getMepfsModelerEquipmentValue", ret)
    return ret
  }

  getMepfsModelerEquipmentDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getMepfsModelerEquipmentYvalue(lod, floorArea)
    var bValue = this.getMepfsModelerEquipmentBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getMepfsModelerEquipmentDuration", ret)
    return ret
  }

  getMepfsModelerEquipmentYvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetModelerEquipmentCostValue(lod, floorArea);
    var prev = this.mepfsGetPreviousModelerEquipmentCostValue(lod, floorArea)

    var ret = (current.modelerCount - prev.modelerCount) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getMepfsModelerEquipmentYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getMepfsModelerEquipmentBvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetModelerEquipmentCostValue(lod, floorArea);
    var yValue = this.getMepfsModelerEquipmentYvalue(lod, floorArea)

    var ret = current.modelerCount - (current.floorAreaValue * yValue)
    console.warn("getMepfsBvalue", ret)
    return ret
  }

  mepfsGetModelerEquipmentCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    return {
      modelerCount: modelerCount,
      floorAreaValue: duration.floorAreaValue
    }
  }

  mepfsGetPreviousModelerEquipmentCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      return {
        modelerCount: modelerCount,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      return {
        modelerCount: modelerCount,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // MEPFS COORDINATOR EQUIPMENT
  getMepfsCoordinatorEquipmentValue(lod: number, floorArea: string, sqm: number) {
    var duration = Math.ceil(this.getMepfsCoordinatorEquipmentDuration(lod, floorArea, sqm))
    var totalEquipmentCost = this.procurement.equipment.laptop

    var ret = duration * totalEquipmentCost

    console.warn("getMepfsCoordinatorEquipmentValue", ret)
    return ret
  }

  getMepfsCoordinatorEquipmentDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getMepfsCoordinatorEquipmentYvalue(lod, floorArea)
    var bValue = this.getMepfsCoordinatorEquipmentBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getMepfsCoordinatorEquipmentDuration", ret)
    return ret
  }

  getMepfsCoordinatorEquipmentYvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetCoordinatorEquipmentCostValue(lod, floorArea);
    var prev = this.mepfsGetPreviousCoordinatorEquipmentCostValue(lod, floorArea)

    var ret = (current.coordinatorCount - prev.coordinatorCount) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getMepfsCoordinatorEquipmentYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getMepfsCoordinatorEquipmentBvalue(lod: number, floorArea: string) {
    var current = this.mepfsGetCoordinatorEquipmentCostValue(lod, floorArea);
    var yValue = this.getMepfsCoordinatorEquipmentYvalue(lod, floorArea)

    var ret = current.coordinatorCount - (current.floorAreaValue * yValue)
    console.warn("getMepfsBvalue", ret)
    return ret
  }

  mepfsGetCoordinatorEquipmentCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    return {
      coordinatorCount: coordinatorCount,
      floorAreaValue: duration.floorAreaValue
    }
  }

  mepfsGetPreviousCoordinatorEquipmentCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.mepfs.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      return {
        coordinatorCount: coordinatorCount,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.mepfs.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.mepfs.filter(x => x.lod == lod)[0].months[currentIndex]

      return {
        coordinatorCount: coordinatorCount,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

}
