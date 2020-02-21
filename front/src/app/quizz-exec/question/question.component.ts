import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimerComponent } from 'src/app/widget/timer/timer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @ViewChild(TimerComponent) timer: TimerComponent;

  duration = 5;
  f = new FormGroup({
    answer: new FormControl('', Validators.required),
  });

  myVeryNiceIndex = -1;
  constructor(
    public quizz: QuizzService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.f.reset();
    this.timer?.reset();
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

  submit() {
    console.log('submit');
    const userAnswer = this.f.value.answer;
    console.log('userAnswer: ', userAnswer);
    const correctAnswer = this.quizz.current.questions[
      this.quizz.progress.questionId
    ].correctAnswer;
    console.log('correctAnswer: ', correctAnswer);

    if (userAnswer === correctAnswer) {
      this.quizz.progress.score++;
    }
    this.quizz.progress.questionId++;
    this.quizz.saveProgress();
    if (
      this.quizz.progress.questionId === this.quizz.current.questions.length
    ) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.router.navigateByUrl(
      '/question/' + (this.quizz.progress.questionId + 1)
    );
    this.ngOnInit();
  }

  onExpiration(str: string) {
    console.log('onExpiration', str);
    this.submit();
  }
}
