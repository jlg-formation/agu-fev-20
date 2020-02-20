import { Injectable } from '@angular/core';
import { Quizz } from '../entities/quizz';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  current = this.getCurrent();
  constructor() {}

  create(name: string) {
    this.current = new Quizz();
    this.current.name = name;
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (!str) {
      return undefined;
    }
    const q = JSON.parse(str);
    Object.setPrototypeOf(q, Quizz.prototype);
    return q;
  }
}
