import { Component, Input } from '@angular/core';

interface tab {
  name:string,
  route:string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
  @Input() tabs:tab[] = [];
  ngOnInit() {
    console.log(this.tabs)
  }
}
