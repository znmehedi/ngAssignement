import { Component } from '@angular/core';
import { UserAddressComponent } from '../user-address/user-address.component';
import { UserAgeComponent } from '../user-age/user-age.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [UserAgeComponent, UserAddressComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

}
