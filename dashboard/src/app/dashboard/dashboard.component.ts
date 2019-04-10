import { Component, OnInit } from '@angular/core';
import { phrase } from '../shared/phrase.model';
import { PHRASE } from './phrase.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public phrase: phrase[] = PHRASE;
  public instruction: string = "Traduza a frase:";
  public answer: string = '';

  public start: number = 0;
  public beginPhrase: phrase;

  public progress: number = 0;
  public attempts: number = 3;

  constructor() {
    this.updateStart();
  }

  ngOnInit() {
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void{

    if(this.beginPhrase.phrasePtBr == this.answer) {
      this.start++
      this.progress = this.progress + (100 / this.phrase.length);

      this.updateStart();

    } else {
      this.attempts--;
      this.progress = this.progress - (100 / this.phrase.length);
      this.answer = '';
      if(this.attempts === -1) {

      }
    }
  }

  updateStart(): void {
    this.beginPhrase = this.phrase[this.start];
    this.answer = '';
  }

}
