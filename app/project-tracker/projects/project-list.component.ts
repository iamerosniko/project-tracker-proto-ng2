import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html',
    selector: 'project-list'
})

export class ProjectListComponent implements OnInit{
    //cars: Car[];

    constructor(
        private router: Router,
        //private carService: CarService
    ) {}

    getCars(): void {
        //this.carService.getCars().then(cars => this.cars = cars);
    }

    ngOnInit(): void {
        //this.getCars();
    }

    //onSelect(car: Car) {
        //this.router.navigate(['/car', car.id]);
    //}
}