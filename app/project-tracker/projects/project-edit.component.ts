import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'project-edit.component.html',
    selector: 'project-edit'
})

export class ProjectEditComponent implements OnInit{
    //cars: Car[];

    constructor(
        private router: Router,
        //private carService: CarService
    ) {}

    getProjectDetail(): void {
        //this.carService.getCars().then(cars => this.cars = cars);
    }

    ngOnInit(): void {
        //this.getCars();
    }

    //onSelect(car: Car) {
        //this.router.navigate(['/car', car.id]);
    //}
}