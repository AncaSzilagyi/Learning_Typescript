# Playwright_tests_with_Typescript
Basic tests with Playwright. My learning experience.

--- I will add some tutorial with installing process here.

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
You can also see the report by executing
```
npx playwright show-report
```

# Other observations
1. The difference between "type" and "fill" function:
- type = writing each letter one by one
- fill = deleting the text that is already in the field and importing the text we want to fill inside.

The code is written with the help of [this tutorial from LambdaTest](https://youtu.be/wawbt1cATsk).
