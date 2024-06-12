import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HogarComponent } from './sitio/hogar/hogar.component';
import { NosotrosComponent } from './sitio/nosotros/nosotros.component';
import { ServiciosComponent } from './sitio/servicios/servicios.component';
import { RegistroComponent } from './sitio/registro/registro.component';
import { FooterComponent } from './sitio/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HogarComponent, NosotrosComponent, ServiciosComponent, RegistroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verdevida';
}
