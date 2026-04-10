import { Component } from '@angular/core';
import { SectionComponent } from './sections/section1/section/section.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section3Component } from './sections/section3/section3.component';
import { Section4Component } from './sections/section4/section4.component';
import { Section5Component } from './sections/section5/section5.component';
import { Section6Component } from './sections/section6/section6.component';

@Component({
  selector: 'app-home',
  imports: [
    SectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public imgUrls = {
    srcset: {
      people:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/people-1-2.webp?w=32 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/people-1-2.webp?w=64 2x',
      ball: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=32 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=64 2x',
      heart:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/heart.webp?w=32 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/heart.webp?w=64 2x',
      hero: 'https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=16 16w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=32 32w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=48 48w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=64 64w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=96 96w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=128 128w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=256 256w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=384 384w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=640 640w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=750 750w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=828 828w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=1080 1080w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=1200 1200w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=1920 1920w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=2048 2048w, https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=3840 3840w',
      hero_purple:
        'https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=16 16w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=32 32w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=48 48w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=64 64w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=96 96w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=128 128w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=256 256w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=384 384w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=640 640w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=750 750w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=828 828w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=1080 1080w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=1200 1200w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=1920 1920w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=2048 2048w, https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=3840 3840w',
      hero_red:
        'https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=16 16w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=32 32w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=48 48w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=64 64w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=96 96w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=128 128w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=256 256w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=384 384w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=640 640w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=750 750w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=828 828w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=1080 1080w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=1200 1200w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=1920 1920w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=2048 2048w, https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=3840 3840w',
      hero_right:
        'https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=16 16w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=32 32w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=48 48w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=64 64w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=96 96w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=128 128w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=256 256w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=384 384w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=640 640w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=750 750w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=828 828w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=1080 1080w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=1200 1200w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=1920 1920w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=2048 2048w, https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=3840 3840w',
      hero_yellow:
        'https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=16 16w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=32 32w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=48 48w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=64 64w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=96 96w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=128 128w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=256 256w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=384 384w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=640 640w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=750 750w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=828 828w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=1080 1080w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=1200 1200w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=1920 1920w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=2048 2048w, https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=3840 3840w',
      landingpage:
        'https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=640 640w, https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=750 750w, https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=828 828w, https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=1080 1080w, https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=1200 1200w, https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=1920 1920w, https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=2048 2048w, https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=3840 3840w',
      shadow:
        'https://secure.meetupstatic.com/next/images/home/join-meetup-shadow-2.png?w=1200 1x, https://secure.meetupstatic.com/next/images/home/join-meetup-shadow-2.png?w=3840 2x',
      join: 'https://secure.meetupstatic.com/next/images/home/join-meetup-bg-4.webp?w=1200 1x, https://secure.meetupstatic.com/next/images/home/join-meetup-bg-4.webp?w=3840 2x',
    },
    src: {
      people:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/people-1-2.webp?w=64',
      ball: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=64',
      heart:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/heart.webp?w=64',
      hero: 'https://secure.meetupstatic.com/next/images/home/hero-left-2.webp?w=3840',
      hero_purple:
        'https://secure.meetupstatic.com/next/images/home/hero-purple-chip-bg-2.webp?w=3840',
      hero_red:
        'https://secure.meetupstatic.com/next/images/home/hero-red-chip-bg-2.webp?w=3840',
      hero_right:
        'https://secure.meetupstatic.com/next/images/home/hero-right-2.webp?w=3840',
      hero_yellow:
        'https://secure.meetupstatic.com/next/images/home/hero-yellow-chip-bg-2.webp?w=3840',
      landingpage:
        'https://secure.meetupstatic.com/next/images/illustrations/specific/landingpage-hero-mobile.webp?w=3840',
      shadow:
        'https://secure.meetupstatic.com/next/images/home/join-meetup-shadow-2.png?w=3840',
      join: 'https://secure.meetupstatic.com/next/images/home/join-meetup-bg-4.webp?w=3840',
    },
  };

  public nearbyEvents: any[] = [
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/3/5/4/2/highres_533113634.jpeg',
      title: 'Cali, Colombia Business Show',
      date: '20 abr 2026 19:30 GMT-5',
      company: 'Odoo Meetup Group',
      online: false,
    },
    {
      amount: '$7.00',
      img: 'https://secure.meetupstatic.com/photos/event/b/6/f/3/highres_533386835.jpeg',
      title: 'Seminario Kali & Eskrima',
      date: '11 abr 2026 11:00 GMT-5',
      company: 'Cali Locals, Tourists & Expats Meetup Group',
      online: false,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/3/5/5/4/highres_533113652.jpeg',
      title:
        'Odoo Academy: Contabilidad y Localización Colombiana - Cali, Colombia',
      date: '21 abr 2026 11:00 GMT-5',
      company: 'Odoo Meetup Group',
      online: false,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/a/c/c/2/highres_440564226.jpeg',
      title: 'Voleibol nocturno',
      date: '10 abr 2026 19:30 GMT-5',
      company: 'Cali Sports and Recreation Meetup',
      online: false,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/a/c/c/2/highres_440564226.jpeg',
      title: 'Voleibol nocturno',
      date: '17 abr 2026 19:30 GMT-5',
      company: 'Cali Sports and Recreation Meetup',
      online: false,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/next/images/fallbacks/redesign/event-cover-2.webp',
      title: 'Jugar Poker',
      date: '11 abr 2026 19:30 GMT-5',
      company: 'Meetup de Juegos de Poker en Cali',
      online: false,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/next/images/fallbacks/redesign/event-cover-2.webp',
      title: 'Jugar Poker',
      date: '18 abr 2026 19:30 GMT-5',
      company: 'Meetup de Juegos de Poker en Cali',
      online: false,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/a/c/c/2/highres_440564226.jpeg',
      title: 'Voleibol nocturno',
      date: '24 abr 2026 19:30 GMT-5',
      company: 'Cali Sports and Recreation Meetup',
      online: false,
    },
  ];

  public nextEvents: any[] = [
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/5/1/b/7/highres_533480919.jpeg',
      title: 'CloudTalks #1 - Nefi Arroyo(virtual)',
      date: '11 abr 2026 11:00 GMT-5',
      company: 'AWS Cloud Club at UNTELS',
      online: true,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/8/b/7/d/highres_532955709.jpeg',
      title:
        'Club de Conversación en Inglés | Gratis • Grupo Pequeño (LIVE) - 4',
      date: '10 abr 2026 10:00 GMT-5',
      company: 'Centro de habla inglesa',
      online: true,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/8/0/d/c/highres_495932988.jpeg',
      title: 'Asking Your Helpers for Help',
      date: '10 abr 2026 11:00 GMT-5',
      company: 'Law of Attraction - Manifesting Freedom and Beyond',
      online: true,
    },
    {
      amount: 'Gratis',
      img: 'https://secure.meetupstatic.com/photos/event/a/9/5/b/highres_533263355.jpeg',
      title: 'How to Spot Fake Job Postings Before They Cost You Time or Money',
      date: '10 abr 2026 11:00 GMT-5',
      company: 'Tech Success Network',
      online: true,
    },
  ];

  public categories: any[] = [
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-green-2.webp',
      title: ' Viajes y actividades al aire libre',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/tree.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/tree.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/tree.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-orange-2.webp',
      title: 'Actividades sociales',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/pizza.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/pizza.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/pizza.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-blue-2.webp',
      title: 'Aficiones y pasiones',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/toy.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/toy.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/toy.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-orange-2.webp',
      title: ' Deportes y fitness',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-purple-2.webp',
      title: 'Salud y bienestar',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/mental-health.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/mental-health.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/mental-health.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-orange-2.webp',
      title: 'Tecnología',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/computer.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/computer.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/computer.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-green-2.webp',
      title: 'Arte y cultura',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/painting.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/painting.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/painting.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-blue-2.webp',
      title: 'Juegos',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/videogame.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/videogame.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/videogame.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-purple-2.webp',
      title: 'Carrera y Negocios',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/suitcase.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/suitcase.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/suitcase.webp?w=96',
    },
    {
      background:
        'https://secure.meetupstatic.com/next/images/home/home-category-background-blue-2.webp',
      title: 'Ciencia y Educación',
      iconSet:
        'https://secure.meetupstatic.com/next/images/complex-icons/branded/potion.webp?w=48 1x, https://secure.meetupstatic.com/next/images/complex-icons/branded/potion.webp?w=96 2x',
      icon: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/potion.webp?w=96',
    },
  ];
}
