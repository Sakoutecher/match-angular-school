import { Injectable } from "@angular/core";
import { Match } from './../models/match.model'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MatchService {

    constructor(private httpClient: HttpClient) {}

    //https://bridge.buddyweb.fr/api/tutorials/matches
    getMatchsList(): Observable<Match[]> {
        return this.httpClient.get<Match[]>('https://bridge.buddyweb.fr/api/tutorials/matches').pipe(
            map((result: Match[]) => {
                return result
            })
        )
    }

}