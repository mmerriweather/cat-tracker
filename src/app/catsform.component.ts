import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { Cats } from './entities/cats';
import { CatService } from './services/CatsService';
import { Inject, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'catsform',
    templateUrl: './catsform.component.html',
    styleUrls: ['./app.component.css']
})
export class CatFormComponent {
    public cat: Cats;

    public constructor(private catService: CatService) {
        this.cat = new Cats;
     }    

    onAddClicked(event: any) {
        this.catService.insert(this.cat);  
    }   
}