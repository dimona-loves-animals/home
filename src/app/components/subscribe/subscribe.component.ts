import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'dla-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  static success_result = 'זהו. קיבלת מייל לאישור לתיבת הדואר האלקטרוני שלך';
  static error_result = 'מצטערים. הייתה שגיאה. אנא נסו מאוחר יותר.';
  submitting = false;
  result = '';
  email: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  submit() {

    this.submitting = true;
    this.result = '';

    const body = new HttpParams()
      .set('email_address', this.email);

    this.httpClient.post('https://api.dimonalovesanimals.org/subscribe', body).subscribe(res => {
      this.result = SubscribeComponent.success_result;
      this.submitting = false;
    }, (err) => {
      if (err.url === 'https://help.dimonalovesanimals.org/') {
        // old /subscribe will redirect to /,
        // which will trigger an error.
        // this is a workaround.
        this.result = SubscribeComponent.success_result;
      } else {
        if (err.data) {
          this.result = err.data;
        } else {
          this.result = SubscribeComponent.error_result;
        }
      }
      this.submitting = false;
    });
  }

}
