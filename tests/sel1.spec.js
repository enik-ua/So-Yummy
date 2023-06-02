// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Registration', function () {
  jest.setTimeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it('Registration', async function () {
    await driver.get('https://dmytro1117.github.io/So-Yummy/signin');
    await driver.manage().window().setRect({ width: 1008, height: 600 });
    await driver.findElement(By.id('standard-required-register-email')).click();
    await driver
      .findElement(By.id('standard-required-register-email'))
      .sendKeys('moiseenkodmitriy@ukr.net');
    await driver.findElement(By.id('standard-required-register-pass')).click();
    await driver
      .findElement(By.id('standard-required-register-pass'))
      .sendKeys('255106A');
    await driver.findElement(By.css('.Button_normalButton__LD1hz')).click();
    // await driver.get('https://dmytro1117.github.io/So-Yummy/register');
    // await driver
    //   .findElement(By.id('standard-required-register-name'))
    //   .sendKeys('erlkonig');
    // await driver
    //   .findElement(By.id('standard-required-register-email'))
    //   .sendKeys('bronzeghoste@gmail.com');
    // await driver
    //   .findElement(By.id('standard-required-register-pass'))
    //   .sendKeys('P2ssw0rd');
    // await driver.findElement(By.css('.Button_normalButton__ZQvYd')).click();
    //expect(driver.findElement(By.id("3")).getText()).toBe('You successfully registered, erlkonig!Check email for verification!');
    await driver.close();
  });
});
