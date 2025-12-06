import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Service {
  title: string;
  description: string;
  isRedIcon: boolean;
  spanColumns?: number; // For the first card
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  clients = [
    { name: 'Suyog Enterprises', logo: '/assets/suyogenterprises.png' },
    { name: 'Redwalls', logo: '/assets/redwalls.png' },
    { name: 'Dailzo', logo: '/assets/Dailzo_Logo.png' },
    { name: 'Gawde Opticals', logo: '/assets/GawdeOpticals.png' },
    { name: 'Herbeca', logo: '/assets/Herbeca.png' },
    { name: 'Moveu', logo: '/assets/moveulogo.png' },
    { name: 'Shetiratna', logo: '/assets/shetiratna.png' },
  ];

  carouselOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 },
    },
  };
  services: Service[] = [
    {
      title: 'Custom Software Development',
      description:
        'Our team brings your unique business ideas to life with tailored software solutions.',
      isRedIcon: true,
      spanColumns: 2,
    },
    {
      title: 'Web Development',
      description:
        'With a focus on user experience and functionality, we create responsive websites that are both visually appealing and highly engaging.',
      isRedIcon: false,
    },
    {
      title: 'Cloud Solutions and DevOps',
      description:
        'Our cloud solutions ensure reliability, security, and scalability. With our DevOps expertise, we help you achieve faster releases and more stable applications.',
      isRedIcon: true,
    },
    {
      title: 'Mobile App Development',
      description:
        'Our mobile solutions cover both Android and iOS development, for apps that are optimized for performance and user engagement.',
      isRedIcon: false,
    },
    // ... add the rest of your services here
  ];
  constructor(private router: Router) {}
  navigateToServices() {
    this.router.navigate(['/services']);
  }
}
