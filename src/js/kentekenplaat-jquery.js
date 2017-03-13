/* eslint no-param-reassign: 0, func-names: 0 */
(($, Kentekenplaat) => {
  if (!$ || !Kentekenplaat) {
    return;
  }
  $.fn.Kentekenplaat = function (options) {
    function init() {
      return new Kentekenplaat(this, $.extend({}, Kentekenplaat.defaults, options));
    }
    return this.each(init);
  };
})(window.jQuery, window.Kentekenplaat);
