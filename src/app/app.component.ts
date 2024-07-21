import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  providers: [ComunicacionService]
})
export class AppComponent implements OnInit {
  currentSection: string = '';
  currentMessage: string = '';

  constructor(private comunicacionService: ComunicacionService) { }

  ngOnInit() {
    this.comunicacionService.currentSectionMessage.subscribe(({ section, message }) => {
      console.log(`Sección actual: ${section}, Mensaje: ${message}`);
      this.currentSection = section;
      this.currentMessage = message;
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
