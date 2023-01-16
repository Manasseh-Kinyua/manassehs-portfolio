import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { THEMES } from '../core/config/theme.config';
import { KeyObjectType } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTheme(name = 'default') {
    const theme = THEMES[name as keyof typeof THEMES];
    Object.keys(theme).forEach((key) => {
      this.document.documentElement.style.setProperty(`--${key}`, theme[key as keyof typeof theme]);
    });
  }
}
