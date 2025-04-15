import { Route } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BuilderComponent } from './views/builder/builder.component';

type NavRoute = Route & {
  displayName?: string;
  disabled: boolean;
};

export const routes: NavRoute[] = [
  {
    path: '',
    component: HomeComponent,
    displayName: 'Home',
    disabled: false,
  },
  {
    path: 'contact',
    component: ContactComponent,
    displayName: 'Contact',
    disabled: false,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    displayName: 'Projects',
    disabled: true,
  },
  {
    path: '**',
    redirectTo: '',
    data: { displayInNav: false },
    disabled: true,
  },
];
