import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() gradient:boolean = false;
  @Input() src:string = '';
  @Input() text:string = '';
  @Input() smallText:string = '';
  @Input() button:boolean = false;
  @Input() buttonText:string = '';
  @Input() action:()=>void = ()=>{};

}
