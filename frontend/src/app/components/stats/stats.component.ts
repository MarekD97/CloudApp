import { ClientService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  statsType: Array<any> = [
    {
      name: 'Average age by nationality',
      value: 'averageAge'
    },
    {
      name: 'Average overall by team',
      value: 'averageOverall'
    },
    {
      name: 'Average potential by nationality',
      value: 'averagePotential'
    },
    {
      name: 'The total number of hits by team',
      value: 'totalHits'
    },
  ]
  currentStats: any;
  subsctiption: Subscription;
  statsData: any;
  selectStats: any;
  constructor(private service: ClientService) {
    this.currentStats = this.statsType[0];
    this.selectStats = this.currentStats.value;
    this.subsctiption = this.service.getStats(this.currentStats.value).subscribe(response => {
      this.statsData = response;
    })
  }

  ngOnInit(): void {
  }

  updateStatsType(value: string): any {
    [this.currentStats] = this.statsType.filter(item => item.value === value);
    if (this.subsctiption) {
      this.subsctiption = this.service.getStats(this.currentStats.value).subscribe(response => {
        this.statsData = response;
      })
    }
    console.log(this.statsData);
  }

}
