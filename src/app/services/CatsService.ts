import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from '../entities/cats';

@Injectable()
export class CatService {
    url: string = 'http://localhost:5000/api/cats/';

    constructor(private http: HttpClient) { }

    public getAll() {
        return [{catName:'cat1',catBreed:'test',catId:1,catStatus:'alive'},
                {catName:'cat2',catBreed:'test',catId:2,catStatus:'alive'}];
    }

    public get(id: number) {
        return this.http.get<Cats>(this.url + id);
    }

    public insert(cats: Cats) {
        alert('insert view console log for detail');
        console.log(cats);
        return this.http.post(this.url , cats);
    }
}