import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  faSmile = faSmile;
  constructor(public quizz: QuizzService) { }

  ngOnInit(): void {
  }

}
