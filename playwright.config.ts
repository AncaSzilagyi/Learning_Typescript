import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/dropdown.test.ts"],  
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure"
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "on-failure"
  }]]
};

export default config;
