import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AscendasComponent } from './components/ascendas/ascendas.component';
import { BigbasketComponent } from './components/bigbasket/bigbasket.component';
import { EstudiarComponent } from './components/estudiar/estudiar.component';
import { TaskjarComponent } from './components/taskjar/taskjar.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
    private themeService: ThemeService
  ) {}
  title = 'Manasseh';

  openTaskJarDialog() {
    this.dialog.open(TaskjarComponent)
  }

  openBigBasketDialog() {
    this.dialog.open(BigbasketComponent)
  }

  openEstudiarDialog() {
    this.dialog.open(EstudiarComponent)
  }

  openAscendasDialog() {
    this.dialog.open(AscendasComponent)
  }

  switchTheme(name: string) {
    this.themeService.setTheme(name)
  }
}
