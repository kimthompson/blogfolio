import { test, expect } from '@playwright/test'

// FIXME: All these links will have to be updated when we're not in dev mode.
// These links should maybe even be set programmatically.

test('should have title', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page).toHaveTitle(/Kim Freechack/)
})

test('blog link works', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.getByRole('link', { name: 'Blog' }).click()

  await expect(page).toHaveTitle(/Kim Freechack/)
  await expect(page).toHaveURL('https://blog.kimfreechack.me/')
})

test('projects link works', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.getByRole('link', { name: 'Projects' }).click()

  await expect(page).toHaveTitle(/Kim Freechack/)
  await expect(page).toHaveURL('http://localhost:5173/projects')
})

test('resume link works', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.getByRole('link', { name: 'Resume' }).click()

  await expect(page).toHaveTitle(/Kim Freechack/)
  await expect(page).toHaveURL('http://localhost:5173/resume')
})

test('feeds link works', async ({ page }) => {
  await page.goto('http://localhost:5173')

  await page.getByRole('link', { name: 'Feeds' }).click()

  await expect(page).toHaveTitle(/Home/)
  await expect(page).toHaveURL('https://feeds.kimfreechack.me/')
})
