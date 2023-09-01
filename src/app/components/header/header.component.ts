import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  @Input() imageSrc = '../../assets/images/logo.png';
  @Input() title = 'Un Taller de Papel';
  @Input() subtitle = 'Construimos un mundo en papel';
  @Input() compact = false;

  thereIsASubtitle = !!this.subtitle
  tabs = [
    {
      name: 'Inicio',
      route: '../'
    },
    {
      name: 'Tienda',
      route: '/store'
    }

  ];

  @HostBinding('class') get HeadingClass() {
    return this.compact ? 'compact' : '';
  };

  ngOnInit() {
console.log(this.thereIsASubtitle)
  }
}
