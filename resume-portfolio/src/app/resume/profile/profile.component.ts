import { Component } from '@angular/core';
import { ProfileImageComponent } from '../profile-image/profile-image.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ActivityComponent } from '../activity/activity.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileImageComponent, AboutMeComponent, ActivityComponent, ExperienceComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
