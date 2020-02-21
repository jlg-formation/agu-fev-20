import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuizzExecModule } from './quizz-exec/quizz-exec.module';
import { WidgetModule } from './widget/widget.module';
import { QuizzService } from './services/quizz.service';
import { QuizzHttpService } from './services/quizz-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LegalComponent, HomeComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    QuizzCreateModule,
    FontAwesomeModule,
    QuizzExecModule,
    WidgetModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: QuizzService,
      useClass: QuizzHttpService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
