import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('FakerJS data-driven template', () => {
    test('should display the expected generated user details', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

        const testUser = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password({ length: 12, memorable: true }),
        };

        console.log('Test user:', testUser);

        await page.getByRole('link', { name: 'Register' }).click();
        await page.getByLabel('Name').fill(testUser.name);
        await page.getByLabel('Email').fill(testUser.email);
        await page.getByLabel('Password').fill(testUser.password);
        await page.getByRole('button', { name: 'Register' }).click();
    });
});
