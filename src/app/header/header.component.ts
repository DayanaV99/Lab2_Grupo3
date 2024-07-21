import { Component } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  title="Hospital"
  constructor(private comunicacionService: ComunicacionService) { }

  navigateTo(section: string, message: string) {
    this.comunicacionService.changeSectionMessage(section, message);
  }
}
