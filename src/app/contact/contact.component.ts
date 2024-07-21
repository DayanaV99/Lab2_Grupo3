import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComunicacionService } from '../comunicacion.service';

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() currentSection: string = '';
  @Input() message: string = '';
  contact: Contact = {
    name: '',
    email: '',
    message: ''
  };

  contacts: Contact[] = [];
  showTable: boolean = false;

  constructor(private comunicacionService: ComunicacionService) {}

  ngOnInit() {}

  onSubmit() {
    this.contacts.push({ ...this.contact });
    this.contact.name = '';
    this.contact.email = '';
    this.contact.message = '';
    this.showTable = true; // Mostrar la tabla después de enviar el formulario
  }
}
