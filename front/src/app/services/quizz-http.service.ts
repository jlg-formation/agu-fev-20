import { Injectable } from '@angular/core';
import { QuizzService } from './quizz.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuizzHttpService extends QuizzService {
  constructor(private http: HttpClient) {
    super();
    console.log('http service');
    this.http.get('http://localhost:3000/ws/quizz').subscribe({
      next: data => {
        console.log('data: ', data);
      },
      error: error => {
        console.error('error: ', error);
      },
      complete: () => console.log('complete'),
    });
  }
}
