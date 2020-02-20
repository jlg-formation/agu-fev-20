import { Injectable } from '@angular/core';
import { Quizz } from '../entities/quizz';
import { Question } from '../interfaces/question';
import { QuizzMap } from '../interfaces/quizz-map';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  current = this.getCurrent();
  map = this.getMap();
  constructor() {}

  create(name: string) {
    this.current = new Quizz();
    this.current.name = name;
    this.saveCurrent();
  }

  saveCurrent() {
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

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }

  saveQuizz() {
    this.map[this.current.name] = this.current;
    this.saveMap();
  }

  saveMap() {
    localStorage.setItem('map', JSON.stringify(this.map));
  }

  getMap(): QuizzMap {
    const str = localStorage.getItem('map');
    if (!str) {
      return {};
    }
    const map: QuizzMap = JSON.parse(str);
    for (const q of Object.values(map)) {
      Object.setPrototypeOf(q, Quizz.prototype);
    }
    return map;
  }

  hasQuizz(): boolean {
    return Object.keys(this.map).length > 0;
  }

  getQuizzArray(): Quizz[] {
    return Object.values(this.map);
  }
}
