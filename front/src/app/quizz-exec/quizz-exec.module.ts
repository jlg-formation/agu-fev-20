import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzExecRoutingModule } from './quizz-exec-routing.module';
import { ListComponent } from './list/list.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetModule } from '../widget/widget.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, QuestionComponent, ScoreComponent],
  imports: [
    CommonModule,
    QuizzExecRoutingModule,
    FontAwesomeModule,
    WidgetModule,
    ReactiveFormsModule
  ]
})
export class QuizzExecModule { }
