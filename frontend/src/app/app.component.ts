import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIFA 2021 Complete Player Dataset';
  headElements = [
    "player_id",
    "name",
    "nationality",
    "position",
    "overall",
    "age",
    "hits",
    "potential",
    "team"
  ];
  elements = [
    {
      player_id: "123",
      name: "Marek",
      nationality: "Poland",
      position: "1",
      overall: "2",
      age: "23",
      hits: "0",
      potential: "0",
      team: "none",
    },
    {
      player_id: "123",
      name: "Marek",
      nationality: "Poland",
      position: "1",
      overall: "2",
      age: "23",
      hits: "0",
      potential: "0",
      team: "none",
    },
    {
      player_id: "123",
      name: "Marek",
      nationality: "Poland",
      position: "1",
      overall: "2",
      age: "23",
      hits: "0",
      potential: "0",
      team: "none",
    },
    {
      player_id: "123",
      name: "Marek",
      nationality: "Poland",
      position: "1",
      overall: "2",
      age: "23",
      hits: "0",
      potential: "0",
      team: "none",
    },
    {
      player_id: "123",
      name: "Marek",
      nationality: "Poland",
      position: "1",
      overall: "2",
      age: "23",
      hits: "0",
      potential: "0",
      team: "none",
    },
  ]
}
