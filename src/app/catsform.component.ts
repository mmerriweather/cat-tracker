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

    public cats: Cats[];
    
}
ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.cats = +params['cats']; // (+) converts string 'id' to a number
        let cats = new Cats(this.http, this.Url);
        cats.get(this.questionID).subscribe(result => {
            this.cats.push(result.json());
        }, error => console.error(error));

        this.reload();
    });
}
onAddClicked(event: any) {
    let catsform = new CatsForm(this.http, this.Url);
}