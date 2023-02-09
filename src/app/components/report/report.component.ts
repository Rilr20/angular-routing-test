import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  reportText = [
    { text: "Detta är kmom01" },
    { text: "Detta är kmom02" },
    { text: "Detta är kmom03" },
    { text: "Detta är kmom04" },
    { text: "Detta är kmom05" },
    { text: "Detta är kmom06" },
    { text: "Detta är kmom10" },
  ]
  currentReport = {text: ""};


  switchKmom(report: number) {
    this.currentReport = this.reportText[report]
  }
  ngOnInit() {
    this.switchKmom(0)
  }
}
