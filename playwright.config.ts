import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/recorded.test.ts"],  
  use: {
    headless: false
  }
};

export default config;
