import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})

export class BarComponent {
  @Input() heightval!: number;
  @Input() year!: string;

  checkHeight(height:number) {
      height+=1
      if (height > 101) {
        height = 101
      } else if (height < 1) {
        height = 1
      }
      return height
  }
  
  ngOnInit() {
    this.heightval = this.checkHeight(this.heightval);
  }

}
