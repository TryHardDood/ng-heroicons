import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'map-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20L3.55279 17.2764C3.214 17.107 3 16.7607 3 16.382V5.61803C3 4.87465 3.78231 4.39116 4.44721 4.72361L9 7M9 20L15 17M9 20V7M15 17L19.5528 19.2764C20.2177 19.6088 21 19.1253 21 18.382V7.61803C21 7.23926 20.786 6.893 20.4472 6.72361L15 4M15 17V4M15 4L9 7" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
    stroke-width: inherit;
  }`],
})
export class MapOutlineComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() stroke: number|string = 2;
  @Input() color: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    const strokeHasChanged = changes.stroke?.previousValue !== changes.stroke?.currentValue;

    if (colorHasChanged || sizeHasChanged || strokeHasChanged) {
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
    if (this.stroke) {
      style.push(`stroke-width: ${this.stroke}px;`);
    }

    this.style = style.join(' ') + this.style;
  }
}