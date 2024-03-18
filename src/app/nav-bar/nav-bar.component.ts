import { Component } from '@angular/core';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navMenuList:string[] = ["Home","About","Service","Blog","Pages","Contact"];
  navIcon = faEarthAmericas;
  lineIcon = faGripLines;
  siteName:string = "World Blog";
}
