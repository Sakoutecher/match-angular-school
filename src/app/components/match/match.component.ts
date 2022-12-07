import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})

export class MatchComponent implements OnInit {

  matches!: Match[]

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.getMatchsList().subscribe(
      (result: Match[]) => {
        this.matches = result
      }
    )
  }
}
