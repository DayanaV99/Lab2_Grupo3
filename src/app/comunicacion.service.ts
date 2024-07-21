import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface SectionMessage {
  section: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private sectionMessageSource = new BehaviorSubject<SectionMessage>({ section: 'Hero', message: '' });
  currentSectionMessage = this.sectionMessageSource.asObservable();

  changeSectionMessage(section: string, message: string) {
    console.log(`Cambiando a sección: ${section} con mensaje: ${message}`);
    this.sectionMessageSource.next({ section, message });
  }
}
