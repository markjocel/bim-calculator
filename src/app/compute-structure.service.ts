import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputeStructureService {

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


  // STRUCTURE MODELER
  getStructureModelerValue(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getStructureModelerYvalue(lod, floorArea)
    var bValue = this.getStructureModelerBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getStructureModellerValue", ret)
    return (yValue * sqm) + bValue
  }

  getStructureModelerYvalue(lod: number, floorArea: string) {
    var current = this.structureGetModelerCostValue(lod, floorArea);
    var prev = this.structureGetPreviousModelerCostValue(lod, floorArea)

    var ret = (current.modelerCostValue - prev.modelerCostValue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getStructureYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getStructureModelerBvalue(lod: number, floorArea: string) {
    var current = this.structureGetModelerCostValue(lod, floorArea);
    var yValue = this.getStructureModelerYvalue(lod, floorArea)

    var ret = current.modelerCostValue - (current.floorAreaValue * yValue)
    console.warn("getStructureBvalue", ret)
    return current.modelerCostValue - (current.floorAreaValue * yValue)
  }

  structureGetModelerCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.structure.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var modelerSalary = this.procurement.manpower.modeler
    var duration = this.duration.structure.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var modelerCostvalue = (modelerCount * modelerSalary) * duration.month
    console.warn("structureGetModelerCostValue", modelerCostvalue, duration.floorAreaValue)
    return {
      modelerCostValue: modelerCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  structureGetPreviousModelerCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.structure.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var modelerSalary = this.procurement.manpower.modeler
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var modelerCostValue = (modelerCount * modelerSalary) * duration.month
      console.warn("Prev", modelerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: modelerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var modelerSalary = this.procurement.manpower.modeler
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex]

      var modelerCostValue = (modelerCount * modelerSalary) * duration.month

      console.warn("Prev", modelerCostValue, duration.floorAreaValue)
      return {
        modelerCostValue: modelerCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // STRUCTURE COORDINATOR
  getStructureCoordinatorValue(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getStructureCoordinatorYvalue(lod, floorArea)
    var bValue = this.getStructureCoordinatorBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getStructureModellerValue", ret)
    return (yValue * sqm) + bValue
  }

  getStructureCoordinatorYvalue(lod: number, floorArea: string) {
    var current = this.structureGetCoordinatorCostValue(lod, floorArea);
    var prev = this.structureGetPreviousCoordinatorCostValue(lod, floorArea)

    var ret = (current.coordinatorCostValue - prev.coordinatorCostValue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getStructureYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getStructureCoordinatorBvalue(lod: number, floorArea: string) {
    var current = this.structureGetCoordinatorCostValue(lod, floorArea);
    var yValue = this.getStructureCoordinatorYvalue(lod, floorArea)

    var ret = current.coordinatorCostValue - (current.floorAreaValue * yValue)
    console.warn("getStructureBvalue", ret)
    return current.coordinatorCostValue - (current.floorAreaValue * yValue)
  }

  structureGetCoordinatorCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.structure.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var coordinatorSalary = this.procurement.manpower.coordinator
    var duration = this.duration.structure.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var coordinatorCostvalue = (coordinatorCount * coordinatorSalary) * duration.month
    console.warn("structureGetCoordinatorCostValue", coordinatorCostvalue, duration.floorAreaValue)
    return {
      coordinatorCostValue: coordinatorCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  structureGetPreviousCoordinatorCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.structure.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var coordinatorSalary = this.procurement.manpower.coordinator
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var coordinatorCostValue = (coordinatorCount * coordinatorSalary) * duration.month
      console.warn("Prev", coordinatorCostValue, duration.floorAreaValue)
      return {
        coordinatorCostValue: coordinatorCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var coordinatorSalary = this.procurement.manpower.coordinator
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex]

      var coordinatorCostValue = (coordinatorCount * coordinatorSalary) * duration.month

      console.warn("Prev", coordinatorCostValue, duration.floorAreaValue)
      return {
        coordinatorCostValue: coordinatorCostValue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // STRUCTURE MODELER SOFTWARE
  getStructureModelerSoftwareValue(lod: number, floorArea: string, sqm: number) {
    var duration = this.getStructureModelerSoftwareDuration(lod, floorArea, sqm)
    var totalSoftwareCost = this.procurement.software.revit + this.procurement.software.cad + this.procurement.software.data_env + this.procurement.software.navis

    var ret = duration * totalSoftwareCost

    console.warn("getStructureModelerSoftwareValue", ret)
    return ret
  }

  getStructureModelerSoftwareDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getStructureModelerSoftwareYvalue(lod, floorArea)
    var bValue = this.getStructureModelerSoftwareBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getStructureModelerSoftwareDuration", ret)
    return ret
  }

  getStructureModelerSoftwareYvalue(lod: number, floorArea: string) {
    var current = this.structureGetModelerSoftwareCostValue(lod, floorArea);
    var prev = this.structureGetPreviousModelerSoftwareCostValue(lod, floorArea)

    var ret = (current.modelerSoftwareCostvalue - prev.modelerSoftwareCostvalue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getStructureModelerSoftwareYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getStructureModelerSoftwareBvalue(lod: number, floorArea: string) {
    var current = this.structureGetModelerSoftwareCostValue(lod, floorArea);
    var yValue = this.getStructureModelerSoftwareYvalue(lod, floorArea)

    var ret = current.modelerSoftwareCostvalue - (current.floorAreaValue * yValue)
    console.warn("getStructureBvalue", ret)
    return ret
  }

  structureGetModelerSoftwareCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.structure.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var duration = this.duration.structure.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var modelerSoftwareCostvalue = modelerCount * duration.month
    console.warn("structureGetModelerSoftwareCostValue", modelerSoftwareCostvalue, duration.floorAreaValue)
    return {
      modelerSoftwareCostvalue: modelerSoftwareCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  structureGetPreviousModelerSoftwareCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.structure.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var modelerSoftwareCostvalue = modelerCount * duration.month
      console.warn("Prev", modelerSoftwareCostvalue, duration.floorAreaValue)
      return {
        modelerSoftwareCostvalue: modelerSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex]

      var modelerSoftwareCostvalue = modelerCount * duration.month

      console.warn("Prev", modelerSoftwareCostvalue, duration.floorAreaValue)
      return {
        modelerSoftwareCostvalue: modelerSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // STRUCTURE COORDINATOR SOFTWARE
  getStructureCoordinatorSoftwareValue(lod: number, floorArea: string, sqm: number) {
    var duration = this.getStructureCoordinatorSoftwareDuration(lod, floorArea, sqm)
    var totalSoftwareCost = this.procurement.software.revit + this.procurement.software.cad + this.procurement.software.data_env + this.procurement.software.navis

    var ret = duration * totalSoftwareCost

    console.warn("getStructureCoordinatorSoftwareValue", ret)
    return ret
  }

  getStructureCoordinatorSoftwareDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getStructureCoordinatorSoftwareYvalue(lod, floorArea)
    var bValue = this.getStructureCoordinatorSoftwareBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getStructureCoordinatorSoftwareDuration", ret)
    return ret
  }

  getStructureCoordinatorSoftwareYvalue(lod: number, floorArea: string) {
    var current = this.structureGetCoordinatorSoftwareCostValue(lod, floorArea);
    var prev = this.structureGetPreviousCoordinatorSoftwareCostValue(lod, floorArea)

    var ret = (current.coordinatorSoftwareCostvalue - prev.coordinatorSoftwareCostvalue) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getStructureCoordinatorSoftwareYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getStructureCoordinatorSoftwareBvalue(lod: number, floorArea: string) {
    var current = this.structureGetCoordinatorSoftwareCostValue(lod, floorArea);
    var yValue = this.getStructureCoordinatorSoftwareYvalue(lod, floorArea)

    var ret = current.coordinatorSoftwareCostvalue - (current.floorAreaValue * yValue)
    console.warn("getStructureBvalue", ret)
    return ret
  }

  structureGetCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.structure.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var duration = this.duration.structure.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
    console.warn("structureGetCoordinatorSoftwareCostValue", coordinatorSoftwareCostvalue, duration.floorAreaValue)
    return {
      coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
      floorAreaValue: duration.floorAreaValue
    }
  }

  structureGetPreviousCoordinatorSoftwareCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.structure.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month
      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex]

      var coordinatorSoftwareCostvalue = coordinatorCount * duration.month

      console.warn("Prev", coordinatorSoftwareCostvalue, duration.floorAreaValue)
      return {
        coordinatorSoftwareCostvalue: coordinatorSoftwareCostvalue,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // STRUCTURE MODELER EQUIPMENT
  getStructureModelerEquipmentValue(lod: number, floorArea: string, sqm: number) {
    var duration = Math.ceil(this.getStructureModelerEquipmentDuration(lod, floorArea, sqm))
    var totalEquipmentCost = this.procurement.equipment.laptop

    var ret = duration * totalEquipmentCost

    console.warn("getStructureModelerEquipmentValue", ret)
    return ret
  }

  getStructureModelerEquipmentDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getStructureModelerEquipmentYvalue(lod, floorArea)
    var bValue = this.getStructureModelerEquipmentBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getStructureModelerEquipmentDuration", ret)
    return ret
  }

  getStructureModelerEquipmentYvalue(lod: number, floorArea: string) {
    var current = this.structureGetModelerEquipmentCostValue(lod, floorArea);
    var prev = this.structureGetPreviousModelerEquipmentCostValue(lod, floorArea)

    var ret = (current.modelerCount - prev.modelerCount) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getStructureModelerEquipmentYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getStructureModelerEquipmentBvalue(lod: number, floorArea: string) {
    var current = this.structureGetModelerEquipmentCostValue(lod, floorArea);
    var yValue = this.getStructureModelerEquipmentYvalue(lod, floorArea)

    var ret = current.modelerCount - (current.floorAreaValue * yValue)
    console.warn("getStructureBvalue", ret)
    return ret
  }

  structureGetModelerEquipmentCostValue(lod: number, floorArea: string) {
    var modelerCount = this.manpower.structure.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].modeler
    var duration = this.duration.structure.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    return {
      modelerCount: modelerCount,
      floorAreaValue: duration.floorAreaValue
    }
  }

  structureGetPreviousModelerEquipmentCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.structure.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var modelerCount = previousMan.modeler
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      return {
        modelerCount: modelerCount,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex]
      var modelerCount = previousMan.modeler
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex]

      return {
        modelerCount: modelerCount,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

  // STRUCTURE COORDINATOR EQUIPMENT
  getStructureCoordinatorEquipmentValue(lod: number, floorArea: string, sqm: number) {
    var duration = Math.ceil(this.getStructureCoordinatorEquipmentDuration(lod, floorArea, sqm))
    var totalEquipmentCost = this.procurement.equipment.laptop

    var ret = duration * totalEquipmentCost

    console.warn("getStructureCoordinatorEquipmentValue", ret)
    return ret
  }

  getStructureCoordinatorEquipmentDuration(lod: number, floorArea: string, sqm: number) {
    var yValue = this.getStructureCoordinatorEquipmentYvalue(lod, floorArea)
    var bValue = this.getStructureCoordinatorEquipmentBvalue(lod, floorArea)

    var ret = (yValue * sqm) + bValue
    console.warn("getStructureCoordinatorEquipmentDuration", ret)
    return ret
  }

  getStructureCoordinatorEquipmentYvalue(lod: number, floorArea: string) {
    var current = this.structureGetCoordinatorEquipmentCostValue(lod, floorArea);
    var prev = this.structureGetPreviousCoordinatorEquipmentCostValue(lod, floorArea)

    var ret = (current.coordinatorCount - prev.coordinatorCount) / (current.floorAreaValue - prev.floorAreaValue)
    console.warn("getStructureCoordinatorEquipmentYvalue", ret, current, prev)

    return isNaN(ret) ? 0 : ret
  }

  getStructureCoordinatorEquipmentBvalue(lod: number, floorArea: string) {
    var current = this.structureGetCoordinatorEquipmentCostValue(lod, floorArea);
    var yValue = this.getStructureCoordinatorEquipmentYvalue(lod, floorArea)

    var ret = current.coordinatorCount - (current.floorAreaValue * yValue)
    console.warn("getStructureBvalue", ret)
    return ret
  }

  structureGetCoordinatorEquipmentCostValue(lod: number, floorArea: string) {
    var coordinatorCount = this.manpower.structure.filter(x => x.lod == lod)[0].man.filter(x => x.floorArea == floorArea)[0].coordinator
    var duration = this.duration.structure.filter(x => x.lod == lod)[0].months.filter(x => x.floorArea == floorArea)[0]

    return {
      coordinatorCount: coordinatorCount,
      floorAreaValue: duration.floorAreaValue
    }
  }

  structureGetPreviousCoordinatorEquipmentCostValue(lod: number, floorArea: string) {
    // Same lod previous floor area
    var currentIndex = this.manpower.structure.filter(x => x.lod == lod)[0].man.findIndex(x => x.floorArea == floorArea)
    // if not floorArea first
    if (currentIndex != 0) {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex - 1]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex - 1]

      return {
        coordinatorCount: coordinatorCount,
        floorAreaValue: duration.floorAreaValue
      }
    } else {
      var previousMan = this.manpower.structure.filter(x => x.lod == lod)[0].man[currentIndex]
      var coordinatorCount = previousMan.coordinator
      var duration = this.duration.structure.filter(x => x.lod == lod)[0].months[currentIndex]

      return {
        coordinatorCount: coordinatorCount,
        floorAreaValue: duration.floorAreaValue
      }
    }
  }

}
