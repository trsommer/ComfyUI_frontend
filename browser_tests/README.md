# Playwright Testing for ComfyUI_frontend

This document outlines the setup and usage of Playwright for testing the ComfyUI_frontend project.

## Setup

Ensure you have Node.js v20 or later installed. Then, set up the Chromium test driver:

```bash
npx playwright install chromium --with-deps
```

## Running Tests

There are two ways to run the tests:

1. **Headless mode with report generation:**
   ```bash
   npx playwright test
   ```
   This runs all tests without a visible browser and generates a comprehensive test report.

2. **UI mode for interactive testing:**
   ```bash
   npx playwright test --ui
   ```
   This opens a user interface where you can select specific tests to run and inspect the test execution timeline.

   ![Playwright UI Mode](https://github.com/user-attachments/assets/6a1ebef0-90eb-4157-8694-f5ee94d03755)

## Screenshot Expectations

Due to variations in system font rendering, screenshot expectations are platform-specific. Please note:

- We maintain Linux screenshot expectations as our GitHub Action runner operates in a Linux environment.
- To set new test expectations:
  1. Create a pull request from a `Comfy-Org/ComfyUI_frontend` branch.
  2. Add the `New Browser Test Expectation` tag to your pull request.
  3. This will trigger a GitHub action to update the screenshot expectations automatically.

> **Note:** If you're making a pull request from a forked repository, the GitHub action won't be able to commit updated screenshot expectations directly to your PR branch.