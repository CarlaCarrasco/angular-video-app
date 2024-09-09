import { Component, computed, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tv-series',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css'
})
export class TvSeriesComponent {
  signalValue = signal(0);
  signalValue2 = signal(0);
  total = computed(() => this.signalValue() + this.signalValue2());

  // BehaviorSubject
  behaviorBtn1$ = new BehaviorSubject(0);
  behaviorBtn2$ = new BehaviorSubject(0);
  behaviorSubjectTotal$ = new BehaviorSubject(0);

  doSomething() {
    this.signalValue.set(this.signalValue() + 1);
  }

  doSomething2() {
    this.signalValue2.set(this.signalValue2() + 1);
  }

  updateBehavior1() {
    this.behaviorBtn1$.next(this.behaviorBtn1$.value + 1);
    this.updateBehaviorTotal();
  }

  updateBehavior2() {
    this.behaviorBtn2$.next(this.behaviorBtn2$.value + 1);
    this.updateBehaviorTotal();
  }

  updateBehaviorTotal() {
    this.behaviorSubjectTotal$.next(this.behaviorBtn1$.value + this.behaviorBtn2$.value);
  }
}
