import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/uploadDownload.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000
    },
    trace: 'retain-on-failure' //debugging option
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;
