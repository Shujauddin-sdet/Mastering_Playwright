import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

function generateUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ firstName: 'Auto' }),
        telephone: faker.phone.number({ style: 'national' }),
        password: faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' }),
    };
}

test(`Register single user via generateUser()`, async ({ page }) => {
    const user = generateUser();
    console.log('Generated user:', user);

    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByLabel('First Name').fill(user.firstName);
    await page.getByLabel('Last Name').fill(user.lastName);
    await page.getByLabel('Email').fill(user.email);
    await page.getByLabel('Telephone').fill(user.telephone);
    await page.getByLabel('Password').fill(user.password);
    await page.getByLabel('Confirm Password').fill(user.password);
    await page.getByRole('button', { name: 'Continue' }).click();
});
