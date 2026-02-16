import { newE2EPage } from '@stencil/core/testing';

describe('bb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bb-ambulance-wl-list></bb-ambulance-wl-list>');

    const element = await page.find('bb-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
