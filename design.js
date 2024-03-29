// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Design', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Design', async function() {
    await driver.get("https://passionate.io/build-an-app/lookAndFeel")
    await driver.manage().window().setRect({ width: 2560, height: 1415 })
    assert(await driver.findElement(By.css(".sc-fzonjX")).getText() == "Create your app")
    {
      const elements = await driver.findElements(By.css(".Xqdgf"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".sc-fzqyvX"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".sc-fzqyvX"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".fFwmIm"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.css(".sc-pBzUF")).getText() == "What’s your app about?")
    assert(await driver.findElement(By.css(".eLtgiS")).getText() == "This will show you proven templates for your market. (You can change this anytime)")
    assert(await driver.findElement(By.css(".sc-pJkiN")).getText() == "App Category")
    assert(await driver.findElement(By.css(".fKSSVy")).getText() == "Templates")
    assert(await driver.findElement(By.css(".igIYXb")).getText() == "Customize colors")
    {
      const elements = await driver.findElements(By.css(".sc-prorn > svg"))
      assert(elements.length)
    }
    await driver.findElement(By.name("category")).click()
    {
      const dropdown = await driver.findElement(By.name("category"))
      await dropdown.findElement(By.xpath("//option[. = 'Shopping']")).click()
    }
    {
      const elements = await driver.findElements(By.css(".sc-paXsP"))
      assert(elements.length)
    }
    await driver.findElement(By.css(".sc-pQSRh:nth-child(1)")).click()
    await driver.findElement(By.css(".sc-AxirZ:nth-child(1)")).click()
    await driver.findElement(By.name("appName")).click()
    assert(await driver.findElement(By.css(".sc-fzoxnE")).getText() == "Choose your perfect app name")
    assert(await driver.findElement(By.css(".sc-pRTZB")).getText() == "You can change this any time")
    await driver.findElement(By.name("appName")).click()
    {
      const element = await driver.findElement(By.name("appName"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.name("appName")).sendKeys("qwe")
    await driver.findElement(By.css(".sc-psCJM")).click()
    await driver.findElement(By.name("appName")).click()
    assert(await driver.findElement(By.css(".sc-fzqKxP")).getText() == "Oops... Name already taken.")
    assert(await driver.findElement(By.css(".sc-pANHa")).getText() == "Unfortunately someone is using your desired name. Please try again.")
    await driver.findElement(By.name("appName")).click()
    {
      const element = await driver.findElement(By.name("appName"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    vars["currentdate"] = await driver.executeScript("return new Date();")
    await driver.findElement(By.name("appName")).sendKeys(vars["currentdate"])
    await driver.findElement(By.css(".sc-psCJM")).click()
    assert(await driver.findElement(By.css(".sc-fzqKxP")).getText() == "Congratulations! Your app name is available…")
    assert(await driver.findElement(By.css(".sc-pANHa")).getText() == "But it might not be for long. Complete the following steps to secure your app name.")
    {
      const elements = await driver.findElements(By.css(".sc-paXsP"))
      assert(elements.length)
    }
    await driver.findElement(By.css(".sc-paXsP")).click()
  })
})
