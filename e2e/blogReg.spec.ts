import { test, expect } from '@playwright/test'

test('生成されたブログのスタイルがリグレッションしていない', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

  const title = await page.getByRole('heading', { name: 'title' }).innerHTML()
  // タイトルが表示されるまで待つ
  await expect(title).toBe('title')

  // 長いコードブロックではみ出した部分は横スクロールで見ることができる
  // コードは折り返すと見にくくなるからである。
  await page.evaluate(() => {
    const scrollCodeBlock = window.document.querySelectorAll('pre')[1]
    scrollCodeBlock!.scroll(1000, 0)
  })

  expect(
    await page.screenshot({ animations: 'disabled', fullPage: true })
  ).toMatchSnapshot('blog.png', {
    threshold: 0.1,
  })
})
