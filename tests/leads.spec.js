// @ts-check
import { test, expect } from '@playwright/test';

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  await page.goto('https://localhost:3000');

  await page.getByRole('button', {name: 'Aperte o play... se tiver coragem'})

  await page.waitForTimeout(10000)
});
