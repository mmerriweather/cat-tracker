import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from '../entities/cats';

@Injectable()
export class CatService {
    url: string = 'http://localhost:5000/api/cats/';

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<Cats[]>(this.url);
    }

    public get(id: number) {
        return this.http.get<Cats>(this.url + id);
    }

    public insert(cats: Cats) {
         return this.http.post(this.url , cats);
    }
}