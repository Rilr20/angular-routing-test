import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent {
  private httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  list = [
    { year: "1910s", amount: 1 },
    { year: "1920s", amount: 4 },
    { year: "1930s", amount: 5 },
    { year: "1940s", amount: 13 },
    { year: "1950s", amount: 20 },
    { year: "1960s", amount: 40 },
    { year: "1970s", amount: 62 },
    { year: "1980s", amount: 82 },
    { year: "1990s", amount: 111 },
    { year: "2000s", amount: 112 },
    { year: "2010s", amount: 108 },
    { year: "2020s", amount: 33 },
  ]
  sum!: number;
  calculateSum() {
    let total = 0
    this.list.forEach(element => {
      total += element.amount
    });
    return total
  }

  ngOnInit() {
    this.sum = this.calculateSum()

    this.httpClient.get('assets/Maze1.txt', { responseType: 'text' })
      .subscribe(data => console.log(data));
  }
}
