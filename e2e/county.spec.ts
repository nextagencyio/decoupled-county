import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Greenfield County/)
    // Hero content from Drupal
    await expect(page.getByText('Serving Our County')).toBeVisible()
  })

  test('shows navigation links in header', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation')
    await expect(nav.getByRole('link', { name: 'Departments' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Officials' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Services' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Meetings' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'News' })).toBeVisible()
  })
})

test.describe('Departments', () => {
  test('listing page shows departments', async ({ page }) => {
    await page.goto('/departments')
    await expect(page).toHaveTitle(/Departments/)
    await expect(page.getByText('Department of Public Works', { exact: true })).toBeVisible()
  })

  test('detail page loads department content', async ({ page }) => {
    await page.goto('/departments/public-works')
    await expect(page.getByRole('heading', { name: /Department of Public Works/ })).toBeVisible()
    await expect(page.getByText('Phone')).toBeVisible()
  })
})

test.describe('Officials', () => {
  test('listing page shows officials', async ({ page }) => {
    await page.goto('/officials')
    await expect(page).toHaveTitle(/Officials/)
    await expect(page.getByText('Margaret Chen', { exact: true })).toBeVisible()
  })

  test('detail page loads official content', async ({ page }) => {
    await page.goto('/officials/margaret-chen')
    await expect(page.getByRole('heading', { name: /Margaret Chen/ })).toBeVisible()
  })
})

test.describe('Services', () => {
  test('listing page shows services', async ({ page }) => {
    await page.goto('/services')
    await expect(page).toHaveTitle(/Services/)
    await expect(page.getByText('Building Permits', { exact: true })).toBeVisible()
  })

  test('detail page loads service content', async ({ page }) => {
    await page.goto('/services/building-permits')
    await expect(page.getByRole('heading', { name: /Building Permits/ })).toBeVisible()
  })
})

test.describe('Meetings', () => {
  test('listing page shows meetings', async ({ page }) => {
    await page.goto('/meetings')
    await expect(page).toHaveTitle(/Meetings/)
    await expect(page.getByText('Board of Supervisors Regular Meeting')).toBeVisible()
  })
})

test.describe('News', () => {
  test('listing page shows news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page).toHaveTitle(/News/)
    await expect(page.getByText('Broadband Expansion')).toBeVisible()
  })

  test('detail page loads news article', async ({ page }) => {
    await page.goto('/news/broadband-expansion-approved')
    await expect(page.getByRole('heading', { name: /Broadband Expansion/ })).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /Pinehurst County/ })).toBeVisible()
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveTitle(/Greenfield County/)
  })
})
