import { newE2EPage } from '@stencil/core/testing';

describe('biely-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<biely-ambulance-wl-app></biely-ambulance-wl-app>');

    const element = await page.find('biely-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
