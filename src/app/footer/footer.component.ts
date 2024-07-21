import { Component, Input, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true
})
export class FooterComponent implements OnInit {
  @Input() currentSection: string = '';

  constructor(private comunicacionService: ComunicacionService) { }

  ngOnInit() {
    this.comunicacionService.currentSectionMessage.subscribe(({ section }) => {
      console.log(`Sección recibida en Footer: ${section}`);
      this.currentSection = section;
    });
  }
}
