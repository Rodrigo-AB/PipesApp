import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string  = 'rodrigo';
  public nameUpper: string  = 'RODRIGO';
  public fullName:  string  = 'rOdRiGo BOdoQue';

  public customDate:  Date  = new Date();

}
