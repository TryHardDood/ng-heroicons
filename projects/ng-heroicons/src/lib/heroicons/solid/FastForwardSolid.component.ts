import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fast-forward-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5547 5.16795C4.24784 4.96338 3.8533 4.94431 3.52814 5.11833C3.20298 5.29235 3 5.63121 3 6V14C3 14.3688 3.20298 14.7077 3.52814 14.8817C3.8533 15.0557 4.24784 15.0366 4.5547 14.8321L10 11.2019V14C10 14.3688 10.203 14.7077 10.5281 14.8817C10.8533 15.0557 11.2478 15.0366 11.5547 14.8321L17.5547 10.8321C17.8329 10.6466 18 10.3344 18 10C18 9.66565 17.8329 9.35342 17.5547 9.16795L11.5547 5.16795C11.2478 4.96338 10.8533 4.94431 10.5281 5.11833C10.203 5.29235 10 5.63121 10 6V8.79815L4.5547 5.16795Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class FastForwardSolidComponent implements OnInit, OnChanges {
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