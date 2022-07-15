import { Component, OnInit } from '@angular/core';
import { ComputeManagerService } from 'src/app/compute-manager.service';
import { ComputeMepfsService } from 'src/app/compute-mepfs.service';
import { ComputeStructureService } from 'src/app/compute-structure.service';
import { ComputeService } from 'src/app/compute.service';
import { NewComputeService } from 'src/app/new-compute.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  data: any
  constructor(private architectureComputeService: NewComputeService, private computeService: ComputeService, private managerService: ComputeManagerService) {
    this.data = history.state.data
    console.warn(history.state.data)

    this.data = JSON.parse(localStorage.getItem("computations")!)
  }

  ngOnInit(): void {

    // this.computeService.computeArchitecture('third', 300, 1567)
    // this.computeService.computeStructure('third', 300, 1567)
    // this.computeService.computeMepfs('third', 300, 1567)

    // this.computeService.computeManager('third', 300, 300, 300, 1567)

    // this.newComputeService.getArchitectureModelerSoftwareValue(300, 'third', 1567)
    // this.newComputeService.getArchitectureCoordinatorSoftwareValue(300, 'third', 1567)

    // this.computeService.getMepfsModelerSoftwareValue(300, 'third', 1567)
    // this.computeService.getMepfsCoordinatorSoftwareValue(300, 'third', 1567)

    // this.architectureComputeService.getArchitectureModelerEquipmentValue(300, 'third', 1567)
    // this.architectureComputeService.getArchitectureCoordinatorEquipmentValue(300, 'third', 1567)

    // this.managerService.getManagerEquipmentValue(300, 'third', 1567)

    // this.computeService.computeHardware('third', 300, 300, 300, 1567)
  }

}
