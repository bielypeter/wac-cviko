import { newSpecPage } from '@stencil/core/testing';
import { BielyAmbulanceWlApp } from '../biely-ambulance-wl-app';

describe('biely-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [BielyAmbulanceWlApp],
      html: `<biely-ambulance-wl-app base-path="/"></biely-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("biely-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [BielyAmbulanceWlApp],
      html: `<biely-ambulance-wl-app base-path="/ambulance-wl/"></biely-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("biely-ambulance-wl-list");
  });
})