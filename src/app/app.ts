import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ContactSection } from './components/contact-section/contact-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ContactSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gsisoluciones');
}
