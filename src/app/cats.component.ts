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
    private sub: any;
    
    public constructor(private catService: CatService) {
       this.cats = [];
       let result = catService.getAll();
       this.cats.push(...result); 
    }
}


