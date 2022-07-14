import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {

  constructor() { }

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
      microsoft: 1228.40,
      pdf: 768.06
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
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            modeler: 2,
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
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 1,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            modeler: 2,
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
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            modeler: 3,
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
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            modeler: 4,
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
            modeler: 1,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 0,
            coordinator: 0,
            manager: 0,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 2,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 3,
            coordinator: 0,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            modeler: 6,
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
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
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
            modeler: 2,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.second,
            modeler: 3,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.third,
            modeler: 5,
            coordinator: 1,
            manager: 1,
          },
          {
            floorArea: this.floorAreas.fourth,
            modeler: 7,
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
          { floorArea: this.floorAreas.first, month: 0 },
          { floorArea: this.floorAreas.second, month: 0, },
          { floorArea: this.floorAreas.third, month: 0, },
          { floorArea: this.floorAreas.fourth, month: 0 },
        ]
      },
      {
        lod: 100,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 1, },
          { floorArea: this.floorAreas.third, month: 2, },
          { floorArea: this.floorAreas.fourth, month: 2 },
        ]
      },
      {
        lod: 200,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 1, },
          { floorArea: this.floorAreas.third, month: 2, },
          { floorArea: this.floorAreas.fourth, month: 2 },
        ]
      },

      {
        lod: 300,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 5, },
          { floorArea: this.floorAreas.fourth, month: 6 },
        ]
      },
      {
        lod: 400,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 5, },
          { floorArea: this.floorAreas.fourth, month: 7 },
        ]
      },
      {
        lod: 500,
        months: [
          { floorArea: this.floorAreas.first, month: 3 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 7, },
          { floorArea: this.floorAreas.fourth, month: 9 },
        ]
      },
    ],
    structure: [
      {
        lod: 0,
        months: [
          { floorArea: this.floorAreas.first, month: 0 },
          { floorArea: this.floorAreas.second, month: 0, },
          { floorArea: this.floorAreas.third, month: 0, },
          { floorArea: this.floorAreas.fourth, month: 0 },
        ]
      },
      {
        lod: 100,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 1, },
          { floorArea: this.floorAreas.third, month: 2, },
          { floorArea: this.floorAreas.fourth, month: 2 },
        ]
      },
      {
        lod: 200,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 1, },
          { floorArea: this.floorAreas.third, month: 2, },
          { floorArea: this.floorAreas.fourth, month: 2 },
        ]
      },

      {
        lod: 300,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 4, },
          { floorArea: this.floorAreas.fourth, month: 5 },
        ]
      },
      {
        lod: 400,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 5, },
          { floorArea: this.floorAreas.fourth, month: 6 },
        ]
      },
      {
        lod: 500,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 5, },
          { floorArea: this.floorAreas.fourth, month: 6 },
        ]
      },
    ],
    mepfs: [
      {
        lod: 0,
        months: [
          { floorArea: this.floorAreas.first, month: 0 },
          { floorArea: this.floorAreas.second, month: 0, },
          { floorArea: this.floorAreas.third, month: 0, },
          { floorArea: this.floorAreas.fourth, month: 0 },
        ]
      },
      {
        lod: 100,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 1, },
          { floorArea: this.floorAreas.third, month: 2, },
          { floorArea: this.floorAreas.fourth, month: 2 },
        ]
      },
      {
        lod: 200,
        months: [
          { floorArea: this.floorAreas.first, month: 1 },
          { floorArea: this.floorAreas.second, month: 1, },
          { floorArea: this.floorAreas.third, month: 2, },
          { floorArea: this.floorAreas.fourth, month: 2 },
        ]
      },

      {
        lod: 300,
        months: [
          { floorArea: this.floorAreas.first, month: 2 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 4, },
          { floorArea: this.floorAreas.fourth, month: 5 },
        ]
      },
      {
        lod: 400,
        months: [
          { floorArea: this.floorAreas.first, month: 2 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 6, },
          { floorArea: this.floorAreas.fourth, month: 6 },
        ]
      },
      {
        lod: 500,
        months: [
          { floorArea: this.floorAreas.first, month: 2 },
          { floorArea: this.floorAreas.second, month: 3, },
          { floorArea: this.floorAreas.third, month: 6, },
          { floorArea: this.floorAreas.fourth, month: 6 },
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

  computeArchitecture(floorArea: string, lod: number) {
    if (floorArea == this.floorAreas.too_big) {
      return 0
    } else if (lod == 0) {
      return 0
    } else {
      let duration = this.getDuration(this.SERVICE_ARCHITECTURE, floorArea, lod)
      let salary = this.getManpower(this.SERVICE_ARCHITECTURE, floorArea, lod)
      console.warn(salary * duration)
      return salary * duration
      // Manpower modelercoord * duration based on lod and floor area
    }
  }

  computeStructure(floorArea: string, lod: number) {
    if (floorArea == this.floorAreas.too_big) {
      return 0
    } else if (lod == 0) {
      return 0
    } else {
      let duration = this.getDuration(this.SERVICE_STRUCTURE, floorArea, lod)
      let salary = this.getManpower(this.SERVICE_STRUCTURE, floorArea, lod)
      console.warn(salary * duration)
      return salary * duration
      // Manpower modelercoord * duration based on lod and floor area
    }
  }

  computeMepfs(floorArea: string, lod: number) {
    if (floorArea == this.floorAreas.too_big) {
      return 0
    } else if (lod == 0) {
      return 0
    } else {
      let duration = this.getDuration(this.SERVICE_MEPFS, floorArea, lod)
      let salary = this.getManpower(this.SERVICE_MEPFS, floorArea, lod)
      console.warn(salary * duration)
      return salary * duration
      // Manpower modelercoord * duration based on lod and floor area
    }
  }

  computeManager(floorArea: string, architectureLod: number, structureLod: number, mepfsLod: number,) {
    // Manager * max duration of services
    let a = this.getDuration(this.SERVICE_ARCHITECTURE, floorArea, architectureLod)
    let s = this.getDuration(this.SERVICE_STRUCTURE, floorArea, structureLod)
    let m = this.getDuration(this.SERVICE_MEPFS, floorArea, mepfsLod)

    let maxDuration = Math.max(a, s, m)
    let managerSalary = this.procurement.manpower.manager
    console.warn(managerSalary * maxDuration)
    return managerSalary * maxDuration
  }

  computeHardwareSoftware(floorArea: string, architectureLod: number, structureLod: number, mepfsLod: number,) {
    // totalSoftware * totalArchitectureEmployeeNumber * architectureDuration
    // structureDuration * totalStructureEmployeeNumber * totalSoftware
    // totalSoftware * totalMepfsEmployeeNumber * mepfsDuration
    // .25 * totalEquipment * totalEmployeeNumber
    var software = this.procurement.software
    var totalSoftware = software.revit + software.cad + software.data_env + software.navis

    var totalArchitectureEmployee = this.manpower.architecture.filter(x => x.lod == architectureLod)[0].man.filter(x => x.floorArea == floorArea)
    var totalArchitectureEmployeeNumber = totalArchitectureEmployee[0].modeler + totalArchitectureEmployee[0].coordinator + totalArchitectureEmployee[0].manager

    var architectureDuration = this.getDuration(this.SERVICE_ARCHITECTURE, floorArea, architectureLod)

    var structureDuration = this.getDuration(this.SERVICE_STRUCTURE, floorArea, structureLod)

    var totalStructureEmployee = this.manpower.structure.filter(x => x.lod == structureLod)[0].man.filter(x => x.floorArea == floorArea)
    var totalStructureEmployeeNumber = totalStructureEmployee[0].modeler + totalStructureEmployee[0].coordinator

    var totalMepfsEmployee = this.manpower.mepfs.filter(x => x.lod == mepfsLod)[0].man.filter(x => x.floorArea == floorArea)
    var totalMepfsEmployeeNumber = totalMepfsEmployee[0].modeler + totalMepfsEmployee[0].coordinator

    var mepfsDuration = this.getDuration(this.SERVICE_MEPFS, floorArea, mepfsLod)

    var totalEquipment = this.procurement.equipment.laptop

    var totalEmployeeNumber = totalArchitectureEmployeeNumber + totalStructureEmployeeNumber + totalMepfsEmployeeNumber

    var totalHardwareSoftware = (totalSoftware * totalArchitectureEmployeeNumber * architectureDuration) +
      (structureDuration * totalStructureEmployeeNumber * totalSoftware) +
      (totalSoftware * totalMepfsEmployeeNumber * mepfsDuration) +
      (.25 * totalEquipment * totalEmployeeNumber)
    console.warn(totalHardwareSoftware)
    return totalHardwareSoftware
  }

  // getArchitectureDuration(floorArea: string, lod: number): number {
  //   // get duration
  //   const dur = this.duration.architecture.filter(x => x.lod == lod)
  //   // filter floor
  //   let dur2 = dur[0].months.filter(x => x.floorArea == floorArea)
  //   return dur2[0].month
  // }

  // getArchitectureManpower(floorArea: string, lod: number) {
  //   var lodmanpower = this.manpower.architecture.filter(x => x.lod == lod)

  //   var manpower = lodmanpower[0].man.filter(x => x.floorArea == floorArea)

  //   const modeler = manpower[0].modeler
  //   const coordinator = manpower[0].coordinator

  //   const modelerSalary = modeler * this.procurement.manpower.modeler
  //   const coordinatorSalary = coordinator * this.procurement.manpower.coord
  //   console.warn(modelerSalary + coordinatorSalary)
  //   return modelerSalary + coordinatorSalary
  // }

  // getStructureDuration(floorArea: string, lod: number) {
  //   // get duration
  //   const dur = this.duration.structure.filter(x => x.lod == lod)
  //   // filter floor
  //   let dur2 = dur[0].months.filter(x => x.floorArea == floorArea)
  //   console.warn(dur2)
  //   return dur2[0].month
  // }

  // getStructureManpower(floorArea: string, lod: number) {
  //   var lodmanpower = this.manpower.structure.filter(x => x.lod == lod)

  //   var manpower = lodmanpower[0].man.filter(x => x.floorArea == floorArea)

  //   const modeler = manpower[0].modeler
  //   const coordinator = manpower[0].coordinator

  //   const modelerSalary = modeler * this.procurement.manpower.modeler
  //   const coordinatorSalary = coordinator * this.procurement.manpower.coord
  //   console.warn(modelerSalary + coordinatorSalary)
  //   return modelerSalary + coordinatorSalary
  // }

  getDuration(service: string, floorArea: string, lod: number) {
    if (lod != 0) {
      var dur
      switch (service) {
        case this.SERVICE_ARCHITECTURE:
          dur = this.duration.architecture.filter(x => x.lod == lod)
          break;

        case this.SERVICE_STRUCTURE:
          dur = this.duration.structure.filter(x => x.lod == lod)
          break;

        case this.SERVICE_MEPFS:
          dur = this.duration.mepfs.filter(x => x.lod == lod)
          break;

        default:
          dur = this.duration.architecture.filter(x => x.lod == lod)
          break;
      }
      let dur2 = dur[0].months.filter(x => x.floorArea == floorArea)
      return dur2[0].month
    } else {
      return 0
    }
  }

  getManpower(service: string, floorArea: string, lod: number) {
    var lodmanpower
    switch (service) {
      case this.SERVICE_ARCHITECTURE:
        lodmanpower = this.manpower.architecture.filter(x => x.lod == lod)
        break;

      case this.SERVICE_STRUCTURE:
        lodmanpower = this.manpower.structure.filter(x => x.lod == lod)
        break;

      case this.SERVICE_MEPFS:
        lodmanpower = this.manpower.mepfs.filter(x => x.lod == lod)
        break;

      default:
        lodmanpower = this.manpower.architecture.filter(x => x.lod == lod)
        break;
    }

    var manpower = lodmanpower[0].man.filter(x => x.floorArea == floorArea)

    const modeler = manpower[0].modeler
    const coordinator = manpower[0].coordinator

    const modelerSalary = modeler * this.procurement.manpower.modeler
    const coordinatorSalary = coordinator * this.procurement.manpower.coord
    return modelerSalary + coordinatorSalary
  }

}
