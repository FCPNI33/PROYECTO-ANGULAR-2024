import { Routes } from '@angular/router';
import { HogarComponent } from './sitio/hogar/hogar.component';
import { NosotrosComponent } from './sitio/nosotros/nosotros.component';
import { ServiciosComponent } from './sitio/servicios/servicios.component';
import { RegistroComponent } from './sitio/registro/registro.component';
import { FooterComponent } from './sitio/footer/footer.component';

export const routes: Routes = [
    {
        path: 'hogar', component:HogarComponent
    },
    {
        path: 'nosotros', component:NosotrosComponent
    },
    {
        path: 'servicios', component:ServiciosComponent
    },
    {
        path: 'registro', component:RegistroComponent
    },
    {
        path: 'footer', component:FooterComponent
    },
];
