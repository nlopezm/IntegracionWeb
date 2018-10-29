import { browser, by, element } from 'protractor';

export class NavBarPage {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.css('app-navbar')).getText();
  }
}
