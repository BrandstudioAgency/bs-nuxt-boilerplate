module.exports = {
  "root": true,
  "rules": {
    "wrap-iife": 0,
    "func-names": ["error", "never"],
    "prettier/prettier": "error"
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
  },
  "parserOptions": {
    parser: 'babel-eslint'
  },
  "extends": [
    "airbnb-base",
    "plugin:vue/essential",
    "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  "plugins": [
    'vue'
  ],
  // add your custom rules here
  "rules": {
    "wrap-iife": 0,
    "func-names": ["error", "never"],
    "prettier/prettier": "error"
  },
  "globals": {
    "TimelineLite": false,
    "TimelineMax": false,
    "TweenLite": false,
    "TweenMax": false,
    "Back": false,
    "Bounce": false,
    "Circ": false,
    "Cubic": false,
    "Ease": false,
    "EaseLookup": false,
    "Elastic": false,
    "Expo": false,
    "Linear": false,
    "Power0": false,
    "Power1": false,
    "Power2": false,
    "Power3": false,
    "Power4": false,
    "Quad": false,
    "Quart": false,
    "Quint": false,
    "RoughEase": false,
    "Sine": false,
    "SlowMo": false,
    "SteppedEase": false,
    "Strong": false,
    "Draggable": false,
    "SplitText": false,
    "VelocityTracker": false,
    "CSSPlugin": false,
    "ThrowPropsPlugin": false,
    "BezierPlugin": false,
    "ScrollMagic": false,
    "_": false,
    "Vue": false
  }
}
