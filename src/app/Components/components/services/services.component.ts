import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-cloud-upload-alt', // Example icon class
      title: 'Custom Software Development',
      description: 'Our team brings your unique business ideas to life with tailored software solutions.'
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Web Development',
      description: 'With a focus on user experience and functionality, we create responsive websites that are both visually stunning and easy to navigate.'
    },
    {
      icon: 'fas fa-cubes',
      title: 'Mobile App Development',
      description: 'Our mobile solutions cover both Android and iOS platforms, delivering apps optimized for performance and user engagement.'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'SAAS Solutions',
      description: 'We specialize in building Software as a Service platforms that enable businesses to deliver reliable and accessible services.'
    },
    {
      icon: 'fas fa-cloud-upload-alt',
      title: 'E-commerce Solutions',
      description: 'Whether you are a startup or an established brand, our e-commerce solutions are built to scale with features designed to enhance the shopping experience.'
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Artificial Intelligence Solutions',
      description: 'We create intelligent chatbots and AI-driven solutions that streamline operations and enhance user experiences.'
    },
    {
      icon: 'fas fa-cubes',
      title: 'Cloud Solutions and DevOps',
      description: 'Our cloud solutions ensure reliability, security, and scalability, helping you achieve faster releases and stable applications.'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'Social Media Integration',
      description: 'We provide integration with services like WhatsApp, Instagram, Facebook, Telegram, etc.'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'IOT Solutions',
      description: 'Our IoT solutions bridge the gap between the physical and digital world, enabling smart, connected experiences and data-driven insights.'
    }
  ];
}
