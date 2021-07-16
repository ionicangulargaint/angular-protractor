import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Check with valid credentials', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Navigate to next page with valid credentials', async () => {
    await browser.sleep(1000);
    let userName: any = await page.getUserNameInput();
    let password: any = await page.getPasswordInput();
    let submitBtn: any = await page.getSubmitBtn();    
    await browser.sleep(1000);
    userName.clear().sendKeys('hcluser');
    await browser.sleep(1000);
    password.clear().sendKeys('hclpasssword');
    await browser.sleep(1000);
    submitBtn.click();
    await browser.sleep(2000);
    expect(await page.getNextTitleText()).toEqual('Welcome Back');
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
