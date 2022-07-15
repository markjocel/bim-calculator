import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Procurement } from './procurement.model';

@Injectable({
  providedIn: 'root'
})


export class ProcurementService {

  constructor() { }

  defaultProcurement: Procurement = {
    software: {
      revit: 18699.70,
      cad: 13117.70,
      data_env: 6698.40,
      navis: 7256.60
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

  procurement = new BehaviorSubject<Procurement>(this.defaultProcurement)

  setProcurement(procurement: Procurement) {
    this.procurement.next(procurement)
  }

  getProcurement() {
    return this.procurement.asObservable();
  }
}

