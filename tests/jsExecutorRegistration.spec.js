const { test, expect } = require("@playwright/test");
test("Case Study: JavaScript Executor Usage", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.screenshot({ path: "screenshots/alert_page_loaded.png" });
  page.once("dialog", async (dialog) => {
    console.log("Alert Message:", dialog.message());
    await dialog.accept();
  });
  await page.click("text=click the button to display an alert box");
  await page.screenshot({ path: "screenshots/alerttext.png" });

  await page.goto("https://demoqa.com/automation-practice-form");

  await page.fill("#firstName", "Amol");
  await page.fill("#lastName", "Patil");
  await page.fill("#currentAddress", "Mumbai");

  await page.click("label:text('Male')");

  await page.click("label:text('Sports')");

  await page.screenshot({ path: "formfilled.png" });
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.click("#submit");
  await page.screenshot({ path: "screenshots/formsubmit.png" });

  console.log(" Form submitted successfully");
});

