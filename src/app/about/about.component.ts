import {
  Component
} from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public team: { name: string; email: string; }[] = [
    {
      name: 'Robert Hernandez',
      email: 'rh@edu.org'
    },
    {
      name: 'Samantha Jones',
      email: 'sam@jones.com'
    },
    {
      name: 'Michael Jordan',
      email: 'michael@jordon.net'
    }
  ];
}
