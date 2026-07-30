const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('specific pokemon page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await (page.getByText('ivysaur')).click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})