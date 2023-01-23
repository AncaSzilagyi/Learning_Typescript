# Playwright_tests_with_Typescript
Basic tests with Playwright. My learning experience.

--- insert installing process here

# Run script
```
npx playwright test
```

# Generate code from browser
In order for playwright to generate your code based on all the clicks you do on the page, we will use codegen. In terminal, write the following command:
```
npx playwright codegen
```

As you can see in playwright.config.ts file, I have added a folder in which you can place the reports after every test, in json format. In the same file you can modify which test file you want to execute.
