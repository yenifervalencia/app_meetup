import { Component } from '@angular/core';
import { SingInComponent } from '../../modules/auth/sing-in/sing-in.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [SingInComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent {
  login: boolean = false;
}
