import { newE2EPage } from '@stencil/core/testing';

describe('biely-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<biely-ambulance-wl-editor></biely-ambulance-wl-editor>');

    const element = await page.find('biely-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
