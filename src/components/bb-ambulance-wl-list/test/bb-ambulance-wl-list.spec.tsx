import { newSpecPage } from '@stencil/core/testing';
import { BbAmbulanceWlList } from '../bb-ambulance-wl-list';

describe('bb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BbAmbulanceWlList],
      html: `<bb-ambulance-wl-list></bb-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as BbAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
