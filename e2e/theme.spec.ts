import { test, expect } from '@playwright/test'

test.describe('UIのテーマをダークモードとライトモードにスイッチできる', () => {
  test('ナビゲーションバーのテーマチェンジボタンを謳歌するとダークモードが表示される', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('button', { name: 'Light Theme' }).click()
    const result = await page.locator('html.dark').all()
    await expect(result.length).toBe(1)
  })

  test('ナビゲーションバーのテーマチェンジボタンを謳歌するとライトモードが表示される', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('button', { name: 'Light Theme' }).click()
    await page.getByRole('button', { name: 'Dark Theme' }).click()
    const result = await page.locator('html.light').all()
    await expect(result.length).toBe(1)
  })
})
