import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { AsyncPipe, CommonModule } from '@angular/common';
import { of, map } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [RouterModule, CommonModule, AsyncPipe],
  standalone: true,
})
export class NavComponent {
  routes = of(routes).pipe(
    map((routes) => routes.filter((route) => !route.disabled))
  );
}
