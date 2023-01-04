import { test, expect } from '@playwright/test'

test.describe('UIのテーマをダークモードとライトモードにスイッチできる', () => {
  test('ナビゲーションバーのテーマチェンジボタンを押下するとダークモードが表示される', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('button', { name: 'Change Theme' }).click()
    // const result = await page.locator('html.dark').all()
    // await expect(result.length).toBe(1)
    expect(
      await page.screenshot({ animations: 'disabled', fullPage: true })
    ).toMatchSnapshot('darkmode.png', {
      threshold: 0.1,
    })
  })

  test('ナビゲーションバーのテーマチェンジボタンを押下するとライトモードが表示される', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('button', { name: 'Change Theme' }).click()
    await page.getByRole('button', { name: 'Change Theme' }).click()
    // const result = await page.locator('html.light').all()
    // await expect(result.length).toBe(1)
    expect(
      await page.screenshot({ animations: 'disabled', fullPage: true })
    ).toMatchSnapshot('lightmode.png', {
      threshold: 0.1,
    })
  })
})
