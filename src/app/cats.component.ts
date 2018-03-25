import { Component } from '@angular/core';
import { Cats } from './entities/cats';
import { CatService} from './services/CatsService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'cats',
    templateUrl: './cats.component.html',
    styleUrls: ['./app.component.css']
})
export class CatsComponent {
    title = 'cats';
    public cats: Cats[];
    public cat: Cats;
    private sub: any;

    catService = new CatService(;
    
    public constructor(catService: CatService) {
       this.cat = new Cats;
       this.catService = new CatService;
       this.cats = [];
        catService.getAll().subscribe(result => {
        this.cats.push(...result);
        }, error => console.error(error));  
    }
    
    
    onAddClicked(event: any) {
        this.catService.insert(this.cat).subscribe(result => {
            this.cats.push(...result);
        }, error => console.error(error));  
    }
}


