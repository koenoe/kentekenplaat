[![Travis-CI](https://travis-ci.org/koenoe/kentekenplaat.svg)](https://travis-ci.org/koenoe/kentekenplaat)
[![David](https://david-dm.org/koenoe/kentekenplaat.svg)](https://david-dm.org)
[![npm](https://img.shields.io/npm/dt/kentekenplaat.svg)](https://www.npmjs.com/package/kentekenplaat)

Automatically formats an input to a Dutch licenseplate.

# Quick start
[Demo](https://koenromers.com/kentekenplaat/demo.html)

## Install
Install with NPM
```
npm install kentekenplaat --save
```
Install with Bower
```
bower install kentekenplaat --save
```
Or download the [latest release](https://github.com/koenoe/kentekenplaat/releases).

## Usage
Only the class `kentekenplaat` is mandatory to apply styles and formatting:

```html
<input type="text" class="kentekenplaat">
```

Include the Kentekenplaat stylesheet in your page:

```html
<link rel="stylesheet" href="css/kentekenplaat.min.css" />
```

### Pure Javascript
Include the `kentekenplaat.min.js` script in your page, and then:
```js
new Kentekenplaat(document.querySelector('.kentekenplaat'));
```
In case you want to format multiple inputs:
```js
document.querySelectorAll('.kentekenplaat').forEach(function(element){
  new Kentekenplaat(element);
});
```

### jQuery
Include the `kentekenplaat.min.js` and `kentekenplaat-jquery.min.js` scripts in your page, and then:
```js
$('.kentekenplaat').kentekenplaat();
```

### AngularJS
Coming soon!

# License

The code and the documentation are released under the [MIT License](LICENSE).
