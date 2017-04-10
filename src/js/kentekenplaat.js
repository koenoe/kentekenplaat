/* global CustomEvent */
class Kentekenplaat {
  constructor(element, options) {
    this.options = Object.assign({}, Kentekenplaat.defaults, options);
    this.element = element || document.querySelector('.kentekenplaat');
    this.element.setAttribute('maxlength', 8);

    this.init();
  }

  init() {
    this.format();
    this.addEventListeners();
  }

  addEventListener(event) {
    this.element.addEventListener(event, this.format.bind(this));
  }

  addEventListeners() {
    this.options.events.forEach(this.addEventListener.bind(this));
  }

  dispatch(licenseplate, valid) {
    const event = valid ? 'kentekenplaat.valid' : 'kentekenplaat.invalid';
    const validEvent = new CustomEvent(event, {
      detail: {
        licenseplate,
      },
    });
    this.element.dispatchEvent(validEvent);
  }

  format() {
    let licenseplate = this.parseLicenseplate();
    // If licenseplate first was valid, but not anymore, fire invalid event
    if (this.valid && licenseplate.length < 6) {
      this.valid = false;
      this.dispatch(licenseplate, this.valid);
    }
    // By default valid is false
    this.valid = false;

    if (licenseplate.length === 6) {
      const sidecode = this.getSidecode();
      if (sidecode) {
        if (sidecode <= 6) {
          licenseplate = `${licenseplate.substr(0, 2)}-${licenseplate.substr(2, 2)}-${licenseplate.substr(4, 2)}`;
        }
        if (sidecode === 7 || sidecode === 9) {
          licenseplate = `${licenseplate.substr(0, 2)}-${licenseplate.substr(2, 3)}-${licenseplate.substr(5, 1)}`;
        }
        if (sidecode === 8 || sidecode === 10) {
          licenseplate = `${licenseplate.substr(0, 1)}-${licenseplate.substr(1, 3)}-${licenseplate.substr(4, 2)}`;
        }
        if (sidecode === 11 || sidecode === 14) {
          licenseplate = `${licenseplate.substr(0, 3)}-${licenseplate.substr(3, 2)}-${licenseplate.substr(5, 1)}`;
        }
        if (sidecode === 12 || sidecode === 13) {
          licenseplate = `${licenseplate.substr(0, 1)}-${licenseplate.substr(1, 2)}-${licenseplate.substr(3, 3)}`;
        }
        this.valid = true;
      }
      this.dispatch(licenseplate, this.valid);
    }
    this.element.value = licenseplate;
  }

  getSidecode() {
    const licenseplate = this.parseLicenseplate();
    const sidecodes = Kentekenplaat.sidecodes();
    const index = sidecodes.findIndex(item => licenseplate.match(item));
    return index + 1;
  }

  parseLicenseplate() {
    return this.element.value.replace(/-/g, '').toUpperCase();
  }

  static sidecodes() {
    // See https://nl.wikipedia.org/wiki/Nederlands_kenteken#Alle_sidecodes
    const sidecodes = [];
    sidecodes[0] = /^[a-zA-Z]{2}[\d]{2}[\d]{2}$/; // 1 XX-99-99
    sidecodes[1] = /^[\d]{2}[\d]{2}[a-zA-Z]{2}$/; // 2 99-99-XX
    sidecodes[2] = /^[\d]{2}[a-zA-Z]{2}[\d]{2}$/; // 3 99-XX-99
    sidecodes[3] = /^[a-zA-Z]{2}[\d]{2}[a-zA-Z]{2}$/; // 4 XX-99-XX
    sidecodes[4] = /^[a-zA-Z]{2}[a-zA-Z]{2}[\d]{2}$/; // 5 XX-XX-99
    sidecodes[5] = /^[\d]{2}[a-zA-Z]{2}[a-zA-Z]{2}$/; // 6 99-XX-XX
    sidecodes[6] = /^[\d]{2}[a-zA-Z]{3}[\d]{1}$/; // 7 99-XXX-9
    sidecodes[7] = /^[\d]{1}[a-zA-Z]{3}[\d]{2}$/; // 8 9-XXX-99
    sidecodes[8] = /^[a-zA-Z]{2}[\d]{3}[a-zA-Z]{1}$/; // 9 XX-999-X
    sidecodes[9] = /^[a-zA-Z]{1}[\d]{3}[a-zA-Z]{2}$/; // 10 X-999-XX
    sidecodes[10] = /^[a-zA-Z]{3}[\d]{2}[a-zA-Z]{1}$/; // 11 XXX-99-X
    sidecodes[11] = /^[a-zA-Z]{1}[\d]{2}[a-zA-Z]{3}$/; // 12 X-99-XXX
    sidecodes[12] = /^[\d]{1}[a-zA-Z]{2}[\d]{3}$/; // 13 9-XX-999
    sidecodes[13] = /^[\d]{3}[a-zA-Z]{2}[\d]{1}$/; // 14 999-XX-9
    return sidecodes;
  }
}

Kentekenplaat.defaults = {
  events: ['keyup', 'focus'],
};

module.exports = Kentekenplaat;
