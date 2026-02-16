import { newSpecPage } from '@stencil/core/testing';
import { BbAmbulanceWlList } from '../bb-ambulance-wl-list';

describe('bb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BbAmbulanceWlList],
      html: `<bb-ambulance-wl-list></bb-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <bb-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bb-ambulance-wl-list>
    `);
  });
});
