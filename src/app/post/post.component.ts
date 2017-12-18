import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  // private heroesUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api

  ngOnInit() {
    // this.getData();
  }

  // getData(){
  //   // console.log( this.http.get(this.heroesUrl) );
  //   return this.http.get(this.heroesUrl)
  // }

}
