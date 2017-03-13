const init = Symbol('init');

class Kentekenplaat {
  constructor(element, options) {
    this.options = Object.assign({}, Kentekenplaat.defaults, options);
    this.element = element || document.querySelector('.kentekenplaat');

    this[init]();
  }

  [init]() {
    console.log('Kentekenplaat:init', this); //eslint-disable-line
  }
}

Kentekenplaat.defaults = { };

module.exports = Kentekenplaat;
