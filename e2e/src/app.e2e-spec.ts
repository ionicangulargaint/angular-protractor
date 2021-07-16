import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('App load check', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('App load initial page as login', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Log in');
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
