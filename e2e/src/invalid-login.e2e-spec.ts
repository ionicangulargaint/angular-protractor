import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Check with invalid credentials', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Not navigate to next page with no credentials', async () => {
    await browser.sleep(1000);
    let userName: any = await page.getUserNameInput();
    let password: any = await page.getPasswordInput();
    let submitBtn: any = await page.getSubmitBtn();    
    await browser.sleep(1000);
    userName.clear().sendKeys('');
    await browser.sleep(1000);
    password.clear().sendKeys('');
    await browser.sleep(1000);
    submitBtn.click();
    await browser.sleep(2000);
    expect(await page.getNextTitleText()).toEqual('Log in');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
