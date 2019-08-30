import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']

})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 0;


  constructor() {
  }

  size() {
    this.width += 10;
  }


  ngOnInit() {}

  public run() {
    this.size();
    setInterval(() => {
      this.size();
      if (this.width > 100) {
        this.width = 0;
      }
    }, 1000);
  }
}
