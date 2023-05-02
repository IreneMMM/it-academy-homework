const {
    defineConfig,
    devices
} = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    testDir: './tests/api',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: 'html',
    timeout: 90000,
    use: {
        baseURL: 'https://www.decathlon.com/',
        trace: 'on-first-retry',
        headless: true,
        screenshot: 'only-on-failure',
        retries: 2
    },

    projects: [{
        name: 'chromium',
        use: {
            ...devices['Desktop Chrome'],
        },
    }, ],
});