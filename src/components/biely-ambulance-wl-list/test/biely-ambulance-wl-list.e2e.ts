import { newE2EPage } from '@stencil/core/testing';

describe('biely-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<biely-ambulance-wl-list></biely-ambulance-wl-list>');

    const element = await page.find('biely-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
