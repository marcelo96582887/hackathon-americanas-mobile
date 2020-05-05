import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  hideMe1: boolean = true;
  hideMe2: boolean = true;
  hideMe3: boolean = true;
  hideMe4: boolean = true;
  hideMe5: boolean = true;
  hideMe6: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  hide1() {
    this.hideMe1 = !this.hideMe1;
  }
  hide2() {
    this.hideMe2 = !this.hideMe2;
  }
  hide3() {
    this.hideMe3 = !this.hideMe3;
  }
  hide4() {
    this.hideMe4 = !this.hideMe4;
  }
  hide5() {
    this.hideMe5 = !this.hideMe5;
  }
  hide6() {
    this.hideMe6 = !this.hideMe6;
  }

}
