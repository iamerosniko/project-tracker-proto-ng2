import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';

import { Project } from  './project';

@Component({
    moduleId: module.id,
    templateUrl: 'project-edit.component.html',
    selector: 'project-edit'
})

export class ProjectEditComponent implements OnInit{
    model = new Project(0, '', '');
    submitted = false;
    fuelTypes = [
        '.NET Technology',
        'MS Access FrontEnd + MS SQL Server Backend',
        'MS Access FrontEnd + Backend'
    ];
    bodyStyle = [
        'Convertibles',
        'Coupes',
        'Hatchbacks',
        'Vans',
        'Sedans',
        'Suvs',
        'Trucks',
        'Wagons'
    ];

    constructor(
        //private carService: CarService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        //this.route.params
            //.switchMap((params: Params) => this.carService.getCar(+params['id'])) //the + value will convert id to number type
            //.subscribe(car => this.model = car);
    }

    onSubmit(): void {
        this.submitted = true;
        //this.carService.putCar(this.model);

        setTimeout(
            () => {
                this.router.navigate(['/project-list'])
            }, 
            2000
        );
    }
}