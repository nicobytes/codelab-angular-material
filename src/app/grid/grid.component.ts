import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  cards = [];
  cols = 4;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointObserver.observe(Breakpoints.Handset)
    .subscribe((match) => {
      if ( match.matches) {
        this.cols = 1;
        this.cards = [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      } else {
        this.cols = 4;
        this.cards = [
          { title: 'Card 1', cols: 3, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 2 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 2, rows: 1 }
        ];
      }
    });
  }

  ngOnInit() {
  }

}
