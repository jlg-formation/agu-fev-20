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

@NgModule({
  declarations: [
    AppComponent,
    LegalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    QuizzCreateModule,
    FontAwesomeModule,
    QuizzExecModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
