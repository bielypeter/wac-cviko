import { newSpecPage } from '@stencil/core/testing';
import { BielyAmbulanceWlEditor } from '../biely-ambulance-wl-editor';

describe('biely-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BielyAmbulanceWlEditor],
      html: `<biely-ambulance-wl-editor></biely-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <biely-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </biely-ambulance-wl-editor>
    `);
  });
});
