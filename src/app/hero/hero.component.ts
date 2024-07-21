import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() currentSection: string = '';
  @Input() message: string = '';
  title = 'Instalaciones y Servicios';

  beneficios = [
    { name: 'Sala de Urgencias', description: 'Atiende emergencias médicas y traumas, con personal capacitado para manejar situaciones críticas.' },
    { name: 'Consultorios Médicos', description: 'Espacios donde se realizan consultas médicas y evaluaciones de rutina.' },
    { name: 'Quirófanos', description: 'Áreas equipadas para realizar intervenciones quirúrgicas.' },
    { name: 'Unidad de Cuidados Intensivos (UCI)', description: 'Proporciona atención avanzada a pacientes en estado crítico.' },
    { name: 'Laboratorio Clínico', description: 'Realiza análisis de muestras biológicas para apoyar en el diagnóstico de enfermedades.' },
    { name: 'Imágenes Diagnósticas', description: 'Incluye rayos X, tomografías, resonancias magnéticas y ultrasonidos para diagnóstico por imagen.' },
    { name: 'Farmacia', description: 'Dispensación de medicamentos prescritos a los pacientes hospitalizados y ambulatorios.' },
    { name: 'Áreas de Hospitalización', description: 'Habitaciones para la estancia de pacientes que requieren cuidados continuos.' }
  ];
  
  images = [
    { src: '../imagen1.jpg', alt: 'Imagen 1' },
    { src: '../imagen2.png', alt: 'Imagen 2' },
    { src: '../imagen3.jpg', alt: 'Imagen 3' }
  ];
  
  currentIndex = 0;

  constructor(private comunicacionService: ComunicacionService) {}

  ngOnInit() {
    this.startAutoPlay();
  }

  showImage(index: number) {
    this.currentIndex = index;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  startAutoPlay() {
    setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }
}
