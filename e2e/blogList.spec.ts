import { test, expect } from '@playwright/test'

test.describe('ブログリストを表示できる', () => {
  test('タイトルが表示されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const title = await page.getByText('title').innerHTML()
    await expect(title).toBe('title')
  })

  test('作成日が表示されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const createdAt = await page.getByText('2022/2/22').innerHTML()
    await expect(createdAt).toBe('2022/2/22')
  })

  test('タグが表示されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const tag1 = await page.getByText('tag1').innerHTML()
    await expect(tag1).toBe('tag1')
  })
})
