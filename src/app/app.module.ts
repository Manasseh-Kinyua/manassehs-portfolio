import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TaskjarComponent } from './components/taskjar/taskjar.component';
import { BigbasketComponent } from './components/bigbasket/bigbasket.component';
import { EstudiarComponent } from './components/estudiar/estudiar.component';
import { AscendasComponent } from './components/ascendas/ascendas.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskjarComponent,
    BigbasketComponent,
    EstudiarComponent,
    AscendasComponent
  ],
  entryComponents: [TaskjarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
