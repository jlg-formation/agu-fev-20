import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { TimerComponent } from './timer/timer.component';
import { FormatTimePipe } from './format-time.pipe';



@NgModule({
  declarations: [AutofocusDirective, TimerComponent, FormatTimePipe],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, TimerComponent, FormatTimePipe]
})
export class WidgetModule { }
