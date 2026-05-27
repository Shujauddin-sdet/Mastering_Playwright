import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test(`Register single user with Faker`, async ({ page }) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName: 'Auto' });
    const telephone = faker.phone.number({ style: 'national' });
    const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' });

    console.log({ firstName, lastName, email, telephone, password });

    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByLabel('First Name').fill(firstName);
    await page.getByLabel('Last Name').fill(lastName);
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('Telephone').fill(telephone);
    await page.getByLabel('Password').fill(password);
    await page.getByLabel('Confirm Password').fill(password);
    await page.getByRole('button', { name: 'Continue' }).click();
});
