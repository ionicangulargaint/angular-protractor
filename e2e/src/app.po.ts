import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root mat-card-title')).getText();
  }

  async getNextTitleText(): Promise<string> {
    return element(by.css('app-root mat-card-title')).getText();
  }

  async getUserNameInput(): Promise<string> {
    return element(by.name('username'));
  }

  async getPasswordInput(): Promise<string> {
    return element(by.name('password'));
  }

  async getSubmitBtn(): Promise<string> {
    return element(by.id('login-submit'));
  }
}
