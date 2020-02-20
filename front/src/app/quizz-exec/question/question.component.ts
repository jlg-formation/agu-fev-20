import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  myVeryNiceIndex = -1;
  constructor(public quizz: QuizzService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: data => {
        console.log('data: ', data);
        this.myVeryNiceIndex = +data.myNiceIndex;
      },
      error: error => {
        console.log('error: ', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
