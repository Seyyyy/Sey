import { test, expect } from '@playwright/test'

test.describe('ブログがマークダウンから生成されている', () => {
  test('タイトルが生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const title = await page.getByRole('heading', { name: 'title' }).innerHTML()
    await expect(title).toBe('title')
  })

  test('作成日が生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const createdAt = await page.getByText('作成日：2022/2/22').innerHTML()
    await expect(createdAt).toBe('作成日：2022/2/22')
  })

  test('h1が生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const h1 = await page.getByRole('heading', { name: 'H1' }).innerHTML()
    await expect(h1).toBe('H1')
  })

  test('h2が生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const h2 = await page.getByRole('heading', { name: 'H2' }).innerHTML()
    await expect(h2).toBe('H2')
  })

  test('bodyが生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const body = await page.getByText('body').innerHTML()
    await expect(body).toBe('body')
  })

  test('listが生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const list = await page
      .getByRole('list')
      .filter({ hasText: 'list1 list2' })
      .innerHTML()
    await expect(list).toBe('\n<li>list1\n<ul>\n<li>list2</li>\n</ul>\n</li>\n')
  })
})

test.describe('ブログがマークダウンから生成されている', () => {
  test('code blockが生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const codeblock = await page
      .getByText('# code block comment $ code')
      .innerHTML()
    await expect(codeblock).toBe('# code block comment\n$ code')
  })

  test('inline codeが生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const inline = await page
      .getByRole('paragraph')
      .filter({ hasText: 'inline code' })
      .innerText()
    await expect(inline).toBe('inline code')
  })

  test('bold textが生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const bold = await page
      .getByRole('paragraph')
      .filter({ hasText: 'bold text' })
      .innerText()
    await expect(bold).toBe('bold text')
  })

  test('Anchorが生成されている', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByRole('link', { name: 'title 2022/2/22 tag1' }).click()

    const anchor = await page
      .getByRole('paragraph')
      .filter({ hasText: 'Anchor' })
      .innerText()
    await expect(anchor).toBe('Anchor')
  })
})
