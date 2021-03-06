import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'beaker-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99985 2C6.59539 2 6.23075 2.24364 6.07597 2.61732C5.92119 2.99099 6.00675 3.42111 6.29275 3.70711L6.99985 4.41421V8.17157C6.99985 8.43679 6.8945 8.69114 6.70696 8.87868L2.70696 12.8787C0.817066 14.7686 2.15556 18 4.82828 18H15.1714C17.8441 18 19.1826 14.7686 17.2927 12.8787L13.2927 8.87868C13.1052 8.69114 12.9999 8.43679 12.9999 8.17157V4.41421L13.707 3.70711C13.993 3.42111 14.0785 2.99099 13.9237 2.61732C13.769 2.24364 13.4043 2 12.9999 2H6.99985ZM8.99985 8.17157V4H10.9999V8.17157C10.9999 8.96722 11.3159 9.73028 11.8785 10.2929L12.9061 11.3204C12.1892 11.1537 11.4377 11.1874 10.7349 11.4217L10.2647 11.5784C9.44364 11.8521 8.55596 11.8521 7.73489 11.5784L7.17244 11.3909C7.13436 11.3782 7.09607 11.3667 7.05762 11.3564L8.12117 10.2929C8.68378 9.73028 8.99985 8.96722 8.99985 8.17157Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class BeakerSolidComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() color: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    
    if (colorHasChanged || sizeHasChanged) {
      this.style = "";
      this.renderStyle();
    }
  }

  ngOnInit(): void {
    this.renderStyle();
  }

  renderStyle() {
    let style = [];
    if (this.size) {
      style.push(`width: ${this.size}; height: ${this.size};`);
    }
    if (this.color) {
      style.push(`color: ${this.color};`);
    }

    this.style = style.join(' ') + this.style;
  }
}