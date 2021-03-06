import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'view-boards-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M2 4C2 3.44772 2.44772 3 3 3H5C5.55228 3 6 3.44772 6 4V16C6 16.5523 5.55228 17 5 17H3C2.44772 17 2 16.5523 2 16V4Z" fill="currentColor"/>
<path d="M8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V16C12 16.5523 11.5523 17 11 17H9C8.44772 17 8 16.5523 8 16V4Z" fill="currentColor"/>
<path d="M15 3C14.4477 3 14 3.44772 14 4V16C14 16.5523 14.4477 17 15 17H17C17.5523 17 18 16.5523 18 16V4C18 3.44772 17.5523 3 17 3H15Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class ViewBoardsSolidComponent implements OnInit, OnChanges {
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