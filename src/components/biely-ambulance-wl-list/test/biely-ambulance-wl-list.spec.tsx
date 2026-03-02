import { newSpecPage } from '@stencil/core/testing';
import { BielyAmbulanceWlList } from '../biely-ambulance-wl-list';

describe('biely-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BielyAmbulanceWlList],
      html: `<biely-ambulance-wl-list></biely-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as BielyAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
