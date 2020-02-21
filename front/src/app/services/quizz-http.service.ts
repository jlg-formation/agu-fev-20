import { Injectable } from '@angular/core';
import { QuizzService } from './quizz.service';
import { HttpClient } from '@angular/common/http';
import { QuizzMap } from '../interfaces/quizz-map';

@Injectable({
  providedIn: 'root',
})
export class QuizzHttpService extends QuizzService {
  constructor(private http: HttpClient) {
    super();
    console.log('http service');
    this.refresh();
  }

  refresh() {
    this.http.get<QuizzMap>('/ws/quizz').subscribe({
      next: map => {
        console.log('map: ', map);
        this.map = map;
        this.saveMap();
      },
      error: error => {
        console.error('error: ', error);
      },
      complete: () => console.log('get complete'),
    });
  }

  saveQuizz() {
    super.saveQuizz();
    this.http.post('/ws/quizz', this.map).subscribe({
      error: error => {
        console.error('error: ', error);
      },
      complete: () => console.log('post complete'),
    });
  }
}
