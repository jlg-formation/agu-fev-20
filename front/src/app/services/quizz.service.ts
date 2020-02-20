import { Injectable } from '@angular/core';
import { Quizz } from '../entities/quizz';
import { Question } from '../interfaces/question';
import { QuizzMap } from '../interfaces/quizz-map';
import { Progress } from '../interfaces/progress';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  current = this.getCurrent();
  map = this.getMap();
  progress = this.getProgress();
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

  setCurrent(q: Quizz) {
    this.current = q;
    this.saveCurrent();
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

  getProgress(): Progress {
    const str = localStorage.getItem('progress');
    if (!str) {
      return undefined;
    }
    const p = JSON.parse(str);
    return p;
  }

  initProgress() {
    this.progress = {
      questionId: 0,
      score: 0,
    };
    this.saveProgress();
  }

  saveProgress() {
    localStorage.setItem('progress', JSON.stringify(this.progress));
  }
}
