# vue-tap-target

[![npm](https://img.shields.io/npm/v/vue-tap-target.svg)](https://www.npmjs.com/package/vue-tap-target) [![npm](https://img.shields.io/npm/dm/vue-tap-target.svg)](https://www.npmjs.com/package/vue-tap-target) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

An implementation of [Material Design's Tap Target](https://material.io/guidelines/growth-communications/feature-discovery.html#feature-discovery-design) for Vue 2.

![vue-tap-target](/example.gif?raw=true)

## Table of contents

- [Install](#install)
- [Usage](#usage)
- [Example](#example)

# Install

```
npm install --save vue-tap-target
```

## Import

In your main.js:

```javascript
import Vue from 'vue'
import VueTapTarget from 'vue-tap-target'

Vue.use(VueTapTarget)
```

## Or via browser

```html
<link rel="stylesheet" href="vue-tap-target/dist/vue-tap-target.css"/>

<script src="vue.js"></script>
<script src="vue-tap-target/dist/vue-tap-target.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the following:

```javascript
Vue.use(VueTapTarget)
```

# Usage

```html
<template>
  <div>
    <button @click="alert('You clicked the tap target!')" ref="button">Click</button>
    <tap-target :show="show" :target="tapTargetFocus" backgroundColor="#3458b2" color="#ffffff" contentLocation="nw" title="This is the title" content="And here is some content to display underneath the title." @close="show = false"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        tapTargetFocus: null
      }
    },
    mounted () {
      this.tapTargetFocus = this.$refs.button;
      setTimeout(() => {
        this.show = true;
      }, 2000);
    }
  }
</script>
```

|Prop|Type|Default|Description|
|----|----|------|-------|
|backgroundColor|String|#3458b2|The background color of the main circular surround|
|color|String|#ffffff|The color of the text used with `title` and  `content` props, or slot content|
|content|String||The main body or description to display|
|contentLocation|String|nw|The location around the focus area to display the `title` and `content`, or slot. Possible values: n, ne, e, se, s, sw, w, nw (think: compass)|
|show|Boolean|true|Whether to show the Tap Target|
|size|String|80vw|The radius of the circular surround. Any css value is valid (eg px, %, vw)|80vw (this is the perfect size for mobile, but will be too big for desktop)|
|target|Element||A $ref value, or dom element to focus|
|title|String||The title to display|

Default slot: for more control over the contents of the tap target use the default slot. Anything in this slot will override the `title` and `content` props.

# Examples

 - We use this on the mobile version of our bibliography generator at [MyBib](https://www.mybib.com). Visit the site on a mobile device (or with a mobile useragent) and click the blue button in the modal to see it in action.

If you're using this in an accessible environment feel free to add a link to this list and send a PR.

---

# Plugin Development

## 1. Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## 2. Symlink it to a dev project

There isn't an example Vue app bundled in this repo, so you'll need to create your own and then symlink vue-tap-target to it.

In the vue-tap-target folder:

```
npm link
```

In your new Vue app folder:

```
npm link vue-tap-target
```

This will install it in node_modules as a symlink, and any changes you make to the vue-tap-target code will be propagated to your Vue app folder (when `npm run dev` is running).

## 3. Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder. If you've symlinked the vue-tap-target folder then your changes will live-update to any recipients of the symlink.

```
npm run dev
```



---

## License

[MIT](http://opensource.org/licenses/MIT)
