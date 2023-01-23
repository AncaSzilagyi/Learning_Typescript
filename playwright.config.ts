import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/Login.test.ts"]
};

export default config;
