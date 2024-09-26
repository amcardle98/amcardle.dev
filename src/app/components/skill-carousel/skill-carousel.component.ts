import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { isCaptureEventType } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'app-skill-carousel',
  templateUrl: './skill-carousel.component.html',
  styleUrls: ['./skill-carousel.component.scss'],
})
export class SkillCarouselComponent {
  items = [
    {
      name: 'Angular',
      iconUrl: '../../../assets/icons/carousel-items/angular-icon-seeklogo.svg',
    },
    {
      name: 'NodeJS',
      iconUrl: '../../../assets/icons/carousel-items/Node.js icon.svg',
    },
    {
      name: 'React',
      iconUrl: '../../../assets/icons/carousel-items/React icon.svg',
    },
    {
      name: '.NET',
      iconUrl: '../../../assets/icons/carousel-items/Net framework icons.svg',
    },
    {
      name: 'HTML5/CSS',
      iconUrl: '../../../assets/icons/carousel-items/Html icons.svg',
    },
    {
      name: 'JavaScript',
      iconUrl: '../../../assets/icons/carousel-items/Javascript icons.svg',
    },
    {
      name: 'TypeScript',
      iconUrl: '../../../assets/icons/carousel-items/Typescript icon.svg',
    },
    {
      name: 'C#',
      iconUrl: '../../../assets/icons/carousel-items/C Sharp icon.svg',
    },
    {
      name: 'Java',
      iconUrl: '../../../assets/icons/carousel-items/Java icons.svg',
    },
    {
      name: 'Golang',
      iconUrl: '../../../assets/icons/carousel-items/Go Logo Aqua.svg',
    },
    {
      name: 'C++',
      iconUrl: '../../../assets/icons/carousel-items/Cpp Logo.svg',
    },
    {
      name: 'MongoDB',
      iconUrl: '../../../assets/icons/carousel-items/MongoDB Logomark.svg',
    },
    {
      name: 'PostgreSQL',
      iconUrl: '../../../assets/icons/carousel-items/PostgreSQL icon.svg',
    },
    {
      name: 'InfluxDB',
      iconUrl: '../../../assets/icons/carousel-items/InfluxDB icon.svg',
    }
  ];

  shuffledItems = this.items.sort(() => Math.random() - 0.5);
}
