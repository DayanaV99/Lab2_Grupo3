import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServicesComponent implements OnInit {
  @Input() currentSection: string = '';
  @Input() message: string = '';

  constructor(private comunicacionService: ComunicacionService) { }

  ngOnInit() {}
}
