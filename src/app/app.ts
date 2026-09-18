import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Confort } from './confort/confort';
import { Vision } from './vision/vision';
import { Header } from './header/header';

@Component({
  imports: [RouterOutlet, About, Contact, Confort, Vision,Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('firstprojet');
}
