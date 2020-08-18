# Awesome JavaScript [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A collection of awesome browser-side [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) libraries, resources and shiny things.

* [Awesome JavaScript](#awesome-javascript)
  * [Package Managers](#package-managers)
  * [Loaders](#loaders)
  * [Bundlers](#bundlers)
  * [Type Checkers](#type-checkers)
  * [Testing Frameworks](#testing-frameworks)
  * [QA Tools](#qa-tools)
  * [MVC Frameworks and Libraries](#mvc-frameworks-and-libraries)
  * [Node-Powered CMS Frameworks](#node-powered-cms-frameworks)
  * [Templating Engines](#templating-engines)
  * [Articles/Posts](#articles-and-posts)
  * [Data Visualization](#data-visualization)
    * [Timeline](#timeline)
    * [Spreadsheet](#spreadsheet)
  * [Editors](#editors)
  * [Documentation](#documentation)
  * Utilities
    * [Files](#files)
    * [Functional Programming](#functional-programming)
    * [Reactive Programming](#reactive-programming)
    * [Data Structure](#data-structure)
    * [Date](#date)
    * [String](#string)
    * [Number](#number)
    * [Storage](#storage)
    * [Color](#color)
    * [I18n And L10n](#i18n-and-l10n)
    * [Control Flow](#control-flow)
    * [Routing](#routing)
    * [Security](#security)
    * [Log](#log)
    * [RegExp](#regexp)
    * [Media](#videoaudio)
    * [Voice Command](#voice-command)
    * [API](#api)
    * [Streaming](#streaming)
    * [Vision Detection](#vision-detection)
    * [Browser Detection](#browser-detection)
    * [Benchmark](#benchmark)
    * [Machine Learning](#machine-learning)
  * UI
    * [Code Highlighting](#code-highlighting)
    * [Loading Status](#loading-status)
    * [Validation](#validation)
    * [Keyboard Wrappers](#keyboard-wrappers)
    * [Tours And Guides](#tours-and-guides)
    * [Notifications](#notifications)
    * [Sliders](#sliders)
    * [Range Sliders](#range-sliders)
    * [Form Widgets](#form-widgets)
    * [Tips](#tips)
    * [Modals and Popups](#modals-and-popups)
    * [Scroll](#scroll)
    * [Menu](#menu)
    * [Table/Grid](#tablegrid)
    * [Frameworks](#frameworks-1)
    * [Boilerplates](#boilerplates)
  * [Gesture](#gesture)
  * [Maps](#maps)
  * [Typography](#typography)
  * [Animations](#animations)
  * [Image processing](#image-processing)
  * [ES6](#es6)
  * [SDK](#sdk)
  * [Misc](#misc)
  * [Podcasts](#podcasts)
* [Worth Reading](#worth-reading)
* [Other Awesome Lists](#other-awesome-lists)
* [Contributing](#contributing)

----


## Package Managers
*Host the JavaScript libraries and provide tools for fetching and packaging them.*

* [npm](https://www.npmjs.com/) - npm is the package manager for JavaScript.
* [Bower](https://github.com/bower/bower) - A package manager for the web.
* [component](https://github.com/componentjs/component) - Client package management for building better web applications.
* [spm](https://github.com/spmjs/spm) - Brand new static package manager.
* [jam](https://github.com/caolan/jam) - A package manager using a browser-focused and RequireJS compatible repository.
* [jspm](https://github.com/jspm/jspm-cli) - Frictionless browser package management.
* [Ender](https://github.com/ender-js/Ender) - The no-library library.
* [volo](https://github.com/volojs/volo) - Create front end projects from templates, add dependencies, and automate the resulting projects.
* [Duo](https://github.com/duojs/duo) - Next-generation package manager that blends the best ideas from Component, Browserify and Go to make organizing and writing front-end code quick and painless.
* [yarn](https://yarnpkg.com/) - Fast, reliable, and secure dependency management.


## Loaders
*Module or loading system for JavaScript.*

* [RequireJS](https://github.com/requirejs/requirejs) - A file and module loader for JavaScript.
* [browserify](https://github.com/substack/node-browserify) - Browser-side require() the node.js way.
* [SeaJS](https://github.com/seajs/seajs) - A Module Loader for the Web.
* [HeadJS](https://github.com/headjs/headjs) - The only script in your HEAD.
* [curl](https://github.com/cujojs/curl) - A small, fast, extensible module loader that handles AMD, CommonJS Modules/1.1, CSS, HTML/text, and legacy scripts.
* [lazyload](https://github.com/rgrove/lazyload/) - Tiny, dependency-free async JavaScript and CSS loader.
* [script.js](https://github.com/ded/script.js) - Asynchronous JavaScript loader and dependency manager.
* [systemjs](https://github.com/systemjs/systemjs) - AMD, CJS & ES6 spec-compliant module loader.
* [LodJS](https://github.com/yanhaijing/lodjs) - Module loader based on AMD.
* [ESL](https://github.com/ecomfe/esl) - Module loader browser first, support lazy define and AMD.
* [modulejs](https://github.com/lrsjng/modulejs) - Lightweight JavaScript module system.


## Bundlers

* [browserify](https://github.com/substack/node-browserify) - Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
* [webpack](https://github.com/webpack/webpack) - Packs CommonJs/AMD modules for the browser.
* [Rollup](https://github.com/rollup/rollup) - Next-generation ES6 module bundler.
* [Brunch](https://github.com/brunch/brunch) - Fast front-end web app build tool with simple declarative config.
* [Parcel](https://github.com/parcel-bundler/parcel) - Blazing fast, zero configuration web application bundler.
* [Microbundle](https://github.com/developit/microbundle) - Zero-configuration bundler for tiny modules.


## Type Checkers

* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
* [Flow.js](https://flow.org/en/) - A static type checker for JavaScript from Facebook.
* [Hegel](https://jsmonk.github.io/hegel/) -  A static type checker for JavaScript with a bias on type inference an strong type system.
* [TypL](https://github.com/getify/TypL) - the JavaScript Type Linter with a bias on type inference.
* [Hindley Milner Definitions](https://github.com/xodio/hm-def) - runtime type checking for JavaScript functions using Haskell-alike Hindley Milner type signatures.


## Testing Frameworks

### Frameworks

* [mocha](https://github.com/mochajs/mocha) - Simple, flexible, fun JavaScript test framework for node.js & the browser.
* [jasmine](https://github.com/jasmine/jasmine) - DOM-less simple JavaScript testing framework.
* [qunit](https://github.com/jquery/qunit) - An easy-to-use JavaScript Unit Testing framework.
* [jest](https://github.com/facebook/jest) - Painless JavaScript Unit Testing.
* [prova](https://github.com/azer/prova) - Node & Browser test runner based on Tape and Browserify
* [DalekJS](https://github.com/dalekjs/dalek) - Automated cross browser functional testing with JavaScript
* [Protractor](https://github.com/angular/protractor) - Protractor is an end-to-end test framework for AngularJS applications.
* [tape](https://github.com/substack/tape) - Tap-producing test harness for node and browsers.
* [TestCafe](https://github.com/DevExpress/testcafe) - Automated browser testing for the modern web development stack.
* [ava](https://github.com/avajs/ava) - 🚀 Futuristic JavaScript test runner
* [Cypress](https://www.cypress.io/) - Complete end-to-end testing framework for anything that runs in a browser and beyond.

### Assertion

* [chai](https://github.com/chaijs/chai) - BDD / TDD assertion framework for node.js and the browser that can be paired with any testing framework.
* [Enzyme](http://airbnb.io/enzyme/index.html) - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
* [react testing library](https://github.com/kentcdodds/react-testing-library) - Simple and complete React DOM testing utilities that encourage good testing practices.
* [Sinon.JS](https://github.com/sinonjs/sinon) - Test spies, stubs, and mocks for JavaScript.
* [expect.js](https://github.com/Automattic/expect.js) - Minimalistic BDD-style assertions for Node.JS and the browser.
* [proxyquire](https://github.com/thlorenz/proxyquire) - Stub nodejs's require.

### Coverage

* [istanbul](https://github.com/gotwarlost/istanbul) - Yet another JS code coverage tool.
* [blanket](https://github.com/alex-seville/blanket) - A simple code coverage library for JavaScript. Designed to be easy to install and use, for both browser and nodejs.
* [JSCover](https://github.com/tntim96/JSCover) - JSCover is a tool that measures code coverage for JavaScript programs.

### Runner

* [phantomjs](https://github.com/ariya/phantomjs) - Scriptable Headless WebKit.
* [slimerjs](https://github.com/laurentj/slimerjs) - A PhantomJS-like tool running Gecko.
* [casperjs](https://github.com/casperjs/casperjs) - Navigation scripting & testing utility for PhantomJS and SlimerJS.
* [zombie](https://github.com/assaf/zombie) - Insanely fast, full-stack, headless browser testing using node.js.
* [totoro](https://github.com/totorojs/totoro) - A simple and stable cross-browser testing tool.
* [karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript.
* [nightwatch](https://github.com/nightwatchjs/nightwatch) - UI automated testing framework based on node.js and selenium webdriver.
* [intern](https://github.com/theintern/intern) - A next-generation code testing stack for JavaScript.
* [yolpo](http://www.yolpo.com) - A statement-by-statement JavaScript interpreter in the browser.
* [puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome Node.js API by official Google Chrome team.
* [webdriverio](https://github.com/webdriverio/webdriverio) - Next-gen WebDriver test automation framework for Node.js.

## QA Tools

* [prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter.
* [JSHint](https://github.com/jshint/jshint/) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.
* [jscs](https://github.com/jscs-dev/node-jscs) - JavaScript Code Style checker.
* [jsfmt](https://github.com/rdio/jsfmt) - For formatting, searching, and rewriting JavaScript.
* [jsinspect](https://github.com/danielstjules/jsinspect) - Detect copy-pasted and structurally similar code.
* [buddy.js](https://github.com/danielstjules/buddy.js) - Magic number detection for JavaScript.
* [ESLint](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.
* [JSLint](https://github.com/douglascrockford/JSLint) - High-standards, strict & opinionated code quality tool, aiming to keep only good parts of the language.
* [JavaScript Standard Style](https://github.com/feross/standard) - Opinionated, no-configuration style guide, style checker, and formatter
* [Pre-evaluate code at buildtime](https://github.com/kentcdodds/preval.macro) - Pre-evaluate your front end javascript code at build-time
* [JS-Beautifier](https://github.com/beautify-web/js-beautify) - Npm cli and library to format JS code.
* [husky](https://github.com/typicode/husky) - Prevents bad git commit, git push and more.

## MVC Frameworks and Libraries

* [angular.js](https://github.com/angular/angular.js) - HTML enhanced for web apps.
* [aurelia](http://aurelia.io) - A JavaScript client framework for mobile, desktop and web.
* [backbone](https://github.com/jashkenas/backbone) - Give your JS App some Backbone with Models, Views, Collections, and Events.
* [ember.js](https://github.com/emberjs/ember.js) - A JavaScript framework for creating ambitious web applications.
* [meteor](https://github.com/meteor/meteor) - An ultra-simple, database-everywhere, data-on-the-wire, pure-javascript web framework.
* [ractive](https://github.com/ractivejs/ractive) - Next-generation DOM manipulation.
* [vue](https://github.com/vuejs/vue) - Intuitive, fast & composable MVVM for building interactive interfaces.
* [svelte](https://github.com/sveltejs/svelte) - Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.
* [knockout](https://github.com/knockout/knockout) - Knockout makes it easier to create rich, responsive UIs with JavaScript.
* [spine](https://github.com/spine/spine) - Lightweight MVC library for building JavaScript applications.
* [espresso.js](https://github.com/techlayer/espresso.js) - A minimal JavaScript library for crafting user interfaces.
* [canjs](https://github.com/canjs/canjs) - Can do JS, better, faster, easier.
* [react](https://facebook.github.io/react/) - A library for building user interfaces. It's declarative, efficient, and extremely flexible. Works with a Virtual DOM.
* [hyperapp](https://github.com/hyperapp/hyperapp) - 1kb JavaScript library for building frontend applications.
* [preact](https://github.com/developit/preact) - Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.
* [nativescript](https://github.com/NativeScript/NativeScript) - Build truly native cross-platform iOS and Android apps with JavaScript.
* [react-native](https://github.com/facebook/react-native) - A framework for building native apps with React.
* [riot](https://github.com/riot/riot) - React-like library, but with very small size.
* [thorax](https://github.com/walmartlabs/thorax) - Strengthening your Backbone.
* [chaplin](https://github.com/chaplinjs/chaplin) - An architecture for JavaScript applications using the Backbone.js library.
* [marionette](https://github.com/marionettejs/backbone.marionette) - A composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications.
* [ripple](https://github.com/ripplejs/ripple) - A tiny foundation for building reactive views.
* [rivets](https://github.com/mikeric/rivets) - Lightweight and powerful data binding + templating solution.
* [derby](https://github.com/derbyjs/derby) - MVC framework making it easy to write realtime, collaborative applications that run in both Node.js and browsers.
    * [derby-awesome](https://github.com/russll/awesome-derby) - A collection of awesome derby components
* [way.js](https://github.com/gwendall/way.js) - Simple, lightweight, persistent two-way databinding.
* [mithril.js](https://github.com/lhorie/mithril.js) - Mithril is a client-side MVC framework (Light-weight, Robust, Fast).
* [jsblocks](https://github.com/astoilkov/jsblocks) - jsblocks is better MV-ish framework.
* [LiquidLava](http://www.lava-framework.com/) - Transparent MVC framework for building user interfaces.
* [feathers](https://github.com/feathersjs/feathers) - A minimalist real-time JavaScript framework for tomorrow's apps.
* [Keo](https://github.com/Wildhoney/Keo) - Functional stateless React components with Shadow DOM support.
* [atvjs](https://github.com/emadalam/atvjs) - Blazing fast Apple TV application development using pure JavaScript.
* [makefun](https://www.npmjs.com/package/makefun) - Use promise values as they are satisfied otherwise wait for the promise

## Node-Powered CMS Frameworks

* [KeystoneJS](https://github.com/keystonejs/keystone) - powerful CMS and web app framework.
* [Reaction Commerce](https://github.com/reactioncommerce/reaction) - reactive CMS, real-time architecture and design.
* [Ghost](https://github.com/tryghost/Ghost) - simple, powerful publishing platform.
* [Apostrophe](https://github.com/punkave/apostrophe) - CMS with content editing and essential services.
* [We.js](https://github.com/wejs/we/) - framework for real time apps, sites or blogs.
* [Hatch.js](https://github.com/inventures/hatchjs) - CMS platform with social features.
* [TaracotJS](https://github.com/xtremespb/taracotjs-generator/) - fast and minimalist CMS based on Node.js.
* [Nodizecms](https://github.com/nodize/nodizecms) - CMS for CoffeeScript lovers.
* [Cody](https://github.com/jcoppieters/cody) - CMS with WSYWYG editor.
* [PencilBlue](https://github.com/pencilblue/pencilblue/) - CMS and blogging platform.
* [Strapi](https://github.com/strapi/strapi) - Open source Node.js Headless CMS to easily build customisable APIs.
* [Factor](https://github.com/fiction-com/factor) - The Javascript CMS

## Templating Engines
*Templating engines allow you to perform string interpolation.*

* [mustache.js](https://github.com/janl/mustache.js) - Minimal templating with {{mustaches}} in JavaScript.
* [handlebars.js](https://github.com/wycats/handlebars.js/) - An extension to the Mustache templating language.
* [nunjucks](https://mozilla.github.io/nunjucks/) - A rich and powerful templating language for JavaScript from Mozilla.
* [hogan.js](https://github.com/twitter/hogan.js) - A compiler for the Mustache templating language.
* [doT](https://github.com/olado/doT) - The fastest + concise JavaScript template engine for nodejs and browsers.
* [dustjs](https://github.com/linkedin/dustjs/) - Asynchronous templates for the browser and node.js.
* [eco](https://github.com/sstephenson/eco/) - Embedded CoffeeScript templates.
* [JavaScript-Templates](https://github.com/blueimp/JavaScript-Templates) - < 1KB lightweight, fast & powerful JavaScript templating engine with zero dependencies.
* [t.js](https://github.com/jasonmoo/t.js) - A tiny JavaScript templating framework in ~400 bytes gzipped.
* [Pug](https://github.com/pugjs/pug) - Robust, elegant, feature rich template engine for nodejs. (formerly known as Jade)
* [EJS](https://github.com/mde/ejs) - Effective JavaScript templating.
* [xtemplate](https://github.com/xtemplate/xtemplate) - eXtensible Template Engine lib for node and the browser
* [marko](https://github.com/marko-js/marko) - A fast, lightweight, HTML-based templating engine for Node.js and the browser with async, streaming, custom tags and CommonJS modules as compiled output.
* [swig](http://paularmstrong.github.io/swig/) - A simple, powerful, and extendable Node.js and browser-based JavaScript template engine.
* [EHTML](https://github.com/Guseyn/EHTML) - HTML Framework that allows you not to write JavaScript code.

## Articles and Posts

* [The JavaScript that you should know](https://medium.com/@pedropolisenso/o-javasscript-que-você-deveria-conhecer-b70e94d1d706) - Article about concepts of JavaScript Functional.
* [How JavaScript works](https://blog.sessionstack.com/tagged/tutorial) - A series of articles about the building blocks of JavaScript.

## Data Visualization
*Data visualization tools for the web.*

* [d3](https://github.com/d3/d3) - A JavaScript visualization library for HTML and SVG.
  * [metrics-graphics](https://github.com/mozilla/metrics-graphics) - A library optimized for concise, principled data graphics and layouts.
* [three.js](https://github.com/mrdoob/three.js) - JavaScript 3D library.
* [Chart.js](https://github.com/chartjs/Chart.js) - Simple HTML5 Charts using the &lt;canvas&gt; tag.
* [paper.js](https://github.com/paperjs/paper.js) - The Swiss Army Knife of Vector Graphics Scripting – Scriptographer ported to JavaScript and the browser, using HTML5 Canvas.
* [fabric.js](https://github.com/kangax/fabric.js) - JavaScript Canvas Library, SVG-to-Canvas (& canvas-to-SVG) Parser.
* [peity](https://github.com/benpickles/peity) - Progressive <svg> bar, line and pie charts.
* [raphael](https://github.com/DmitryBaranovskiy/raphael) - JavaScript Vector Library.
* [echarts](https://github.com/ecomfe/echarts) - Enterprise Charts.
* [vis](https://github.com/almende/vis) - Dynamic, browser-based visualization library.
* [two.js](https://github.com/jonobr1/two.js) - A renderer agnostic two-dimensional drawing api for the web.
* [g.raphael](https://github.com/DmitryBaranovskiy/g.raphael) - Charts for Raphaël.
* [sigma.js](https://github.com/jacomyal/sigma.js) - A JavaScript library dedicated to graph drawing.
* [arbor](https://github.com/samizdatco/arbor) - A graph visualization library using web workers and jQuery.
* [cubism](https://github.com/square/cubism) - A D3 plugin for visualizing time series.
* [dc.js](https://github.com/dc-js/dc.js) - Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js
* [vega](https://github.com/trifacta/vega) - A visualization grammar.
* [processing.js](http://processingjs.org/) - Processing.js makes your data visualizations work using web standards and without any plug-ins.
* [envisionjs](https://github.com/HumbleSoftware/envisionjs) - Dynamic HTML5 visualization.
* [rickshaw](https://github.com/shutterstock/rickshaw) - JavaScript toolkit for creating interactive real-time graphs.
* [flot](https://github.com/flot/flot) - Attractive JavaScript charts for jQuery.
* [morris.js](https://github.com/morrisjs/morris.js) - Pretty time-series line graphs.
* [nvd3](https://github.com/novus/nvd3) - Build re-usable charts and chart components for d3.js.
* [svg.js](https://github.com/wout/svg.js) - A lightweight library for manipulating and animating SVG.
* [heatmap.js](https://github.com/pa7/heatmap.js) - JavaScript Library for HTML5 canvas based heatmaps.
* [jquery.sparkline](https://github.com/gwatts/jquery.sparkline) - A plugin for the jQuery JavaScript library to generate small sparkline charts directly in the browser.
* [trianglify](https://github.com/qrohlf/trianglify) - Low poly style background generator with d3.js.
* [d3-cloud](https://github.com/jasondavies/d3-cloud) - Create word clouds in JavaScript.
* [d4](https://github.com/heavysixer/d4) - A friendly reusable charts DSL for D3.
* [dimple.js](http://dimplejs.org) - Easy charts for business analytics powered by d3.
* [chartist-js](https://github.com/gionkunz/chartist-js) - Simple responsive charts.
* [epoch](https://github.com/epochjs/epoch) - A general purpose real-time charting library.
* [c3](https://github.com/c3js/c3) - D3-based reusable chart library.
* [BabylonJS](https://github.com/BabylonJS/Babylon.js) - A framework for building 3D games with HTML 5 and WebGL.
* [recharts](https://github.com/recharts/recharts) - Redefined chart library built with React and D3.
* [GraphicsJS](https://www.graphicsjs.org) - A lightweight JavaScript graphics library with the intuitive API, based on SVG/VML technology.
* [mxGraph](https://github.com/jgraph/mxgraph) - Diagramming library that enables interactive graph and charting applications to be quickly created that run natively in any major browser that is supported by its vendor.
* [Frappe Charts](https://github.com/frappe/charts) - GitHub-inspired simple and modern SVG charts for the web with zero dependencies.
* [Frappe Gantt](https://github.com/frappe/gantt) - A simple, interactive, modern gantt chart library for the web.

There're also some great commercial libraries, like [amchart](https://www.amcharts.com/), [anychart](http://www.anychart.com), [plotly](https://plot.ly/), and [highchart](http://www.highcharts.com/).


## Timeline

* [TimelineJS v3](https://github.com/NUKnightLab/TimelineJS3) - A Storytelling Timeline built in JavaScript.
* [timesheet.js](https://github.com/sbstjn/timesheet.js) - JavaScript library for simple HTML5 & CSS3 time sheets.

## Spreadsheet

* [HANDSONTABLE](https://github.com/handsontable/handsontable) - Handsontable is a JavaScript/HTML5 Spreadsheet Library for Developers
* [Frappe Datatable](https://github.com/frappe/datatable) - Frappe DataTable is a simple, modern and interactive datatable library for displaying tabular data. 

## Editors

* [ace](https://github.com/ajaxorg/ace) - Ace (Ajax.org Cloud9 Editor).
* [CodeMirror](https://github.com/codemirror/CodeMirror) - In-browser code editor.
* [esprima](https://github.com/ariya/esprima) - ECMAScript parsing infrastructure for multipurpose analysis.
* [quill](https://github.com/quilljs/quill) - A cross browser rich text editor with an API.
* [medium-editor](https://github.com/yabwe/medium-editor) - Medium.com WYSIWYG editor clone.
* [pen](https://github.com/sofish/pen) - enjoy live editing (+markdown).
* [jquery-notebook](https://github.com/raphaelcruzeiro/jquery-notebook) - A simple, clean and elegant text editor. Inspired by the awesomeness of Medium.
* [bootstrap-wysiwyg](https://github.com/mindmup/bootstrap-wysiwyg) - Tiny bootstrap-compatible WYSIWYG rich text editor.
* [ckeditor-releases](https://github.com/ckeditor/ckeditor-releases) - The best web text editor for everyone.
* [editor](https://github.com/lepture/editor) - A markdown editor. still on development.
* [EpicEditor](https://github.com/OscarGodson/EpicEditor) - An embeddable JavaScript Markdown editor with split fullscreen editing, live previewing, automatic draft saving, offline support, and more.
* [jsoneditor](https://github.com/josdejong/jsoneditor) - A web-based tool to view, edit and format JSON.
* [vim.js](https://github.com/coolwanglu/vim.js) - JavaScript port of Vim with a persistent `~/.vimrc`.
* [Squire](https://github.com/neilj/Squire) - HTML5 rich text editor.
* [TinyMCE](https://github.com/tinymce/tinymce) - The JavaScript Rich Text editor.
* [trix](https://github.com/basecamp/trix) - A rich text editor for everyday writing. By Basecamp.
* [Trumbowyg](https://github.com/Alex-D/Trumbowyg) - A lightweight and amazing WYSIWYG JavaScript editor.
* [Draft.js](https://github.com/facebook/draft-js) - A React framework for building text editors.
* [bootstrap-wysihtml5](https://github.com/jhollingworth/bootstrap-wysihtml5) - Simple, beautiful wysiwyg editor
* [wysihtml5](https://github.com/xing/wysihtml5) - Open source rich text editor based on HTML5 and the progressive-enhancement approach. Uses a sophisticated security concept and aims to generate fully valid HTML5 markup by preventing unmaintainable tag soups and inline styles.
* [raptor-editor](https://github.com/PANmedia/raptor-editor) - Raptor, an HTML5 WYSIWYG content editor!
* [popline](https://github.com/kenshin54/popline) - Popline is an HTML5 Rich-Text-Editor Toolbar.
* [Summernote](https://github.com/summernote/summernote) - Super simple WYSIWYG editor.


## Documentation

* [DevDocs](http://devdocs.io/) is an all-in-one API documentation reader with a fast, organized, and consistent interface.
* [dexy](http://www.dexy.it/) is a free-form literate documentation tool for writing any kind of technical document incorporating code.
* [docco](http://jashkenas.github.io/docco/) is a quick-and-dirty, hundred-line-long, literate-programming-style documentation generator.
* [styledocco](http://jacobrask.github.io/styledocco/) generates documentation and style guide documents from your stylesheets.
* [Ronn](https://github.com/rtomayko/ronn) builds manuals. It converts simple, human readable textfiles to roff for terminal display, and also to HTML for the web.
* [dox](https://github.com/tj/dox) is a JavaScript documentation generator written with node. Dox no longer generates an opinionated structure or style for your docs, it simply gives you a JSON representation, allowing you to use markdown and JSDoc-style tags.
* [jsdox](https://github.com/sutoiku/jsdox) is a JSDoc3 to Markdown documentation generator.
* [ESDoc](https://github.com/esdoc/esdoc) is a good documentation generator for JavaScript.
* [YUIDoc](http://yui.github.io/yuidoc/) is a Node.js application that generates API documentation from comments in source, using a syntax similar to tools like Javadoc and Doxygen.
* [coddoc](http://doug-martin.github.io/coddoc/) is a jsdoc parsing library. Coddoc is different in that it is easily extensible by allowing users to add tag and code parsers through the use of coddoc.addTagHandler and coddoc.addCodeHandler. coddoc also parses source code to be used in APIs.
* [sphinx](http://www.sphinx-doc.org/) a tool that makes it easy to create intelligent and beautiful documentation
* [Using JSDoc](http://usejsdoc.org/)
* [Beautiful docs](http://beautifuldocs.com/) is a documentation viewer based on markdown files.
* [documentation.js](http://documentation.js.org) - API documentation generator with support for ES2015+ and flow annotation.
* [jsduck](https://github.com/senchalabs/jsduck) - API documentation generator made for Sencha JavaScript frameworks, but can be used for other frameworks too.
* [codecrumbs](https://github.com/Bogdan-Lyashenko/codecrumbs) is a visual tool for learning and documenting a codebase by putting breadcrumbs in source code.


## Files
*Libraries for working with files.*

* [Papa Parse](https://github.com/mholt/PapaParse) - A powerful CSV library that supports parsing CSV files/strings and also exporting to CSV.
* [jBinary](https://github.com/jDataView/jBinary) - High-level I/O (loading, parsing, manipulating, serializing, saving) for binary files with declarative syntax for describing file types and data structures.
* [diff2html](https://github.com/rtfpessoa/diff2html) - Git diff output parser and pretty HTML generator.
* [jsPDF](https://github.com/MrRio/jsPDF) - JavaScript PDF generation.
* [PDF.js](https://github.com/mozilla/pdf.js) - PDF Reader in JavaScript.


## Functional Programming
*Functional programming libraries to extend JavaScript’s capabilities.*

* [underscore](https://github.com/jashkenas/underscore) - JavaScript's utility _ belt.
* [lodash](https://github.com/lodash/lodash) - A utility library delivering consistency, customization, performance, & extras.
* [Sugar](https://github.com/andrewplummer/Sugar) - A JavaScript library for working with native objects.
* [lazy.js](https://github.com/dtao/lazy.js) - Like Underscore, but lazier.
* [ramda](https://github.com/CrossEye/ramda) - A practical functional library for JavaScript programmers.
* [mout](https://github.com/mout/mout) - Modular JavaScript Utilities.
* [mesh](https://github.com/crcn/mesh.js) - Streamable data synchronization utility.
* [preludejs](https://github.com/alanrsoares/prelude-js) - Hardcore Functional Programming for JavaScript.


## Reactive Programming
*Reactive programming libraries to extend JavaScript’s capabilities.*

* [RxJS](https://github.com/ReactiveX/rxjs) - A reactive programming library for JavaScript.
* [Bacon](https://github.com/baconjs/bacon.js) - FRP (functional reactive programming) library for JavaScript.
* [Kefir](https://github.com/pozadi/kefir) - FRP library for JavaScript inspired by Bacon.js and RxJS with focus on high performance and low memory consumption.
* [Highland](http://highlandjs.org/) - Re-thinking the JavaScript utility belt, Highland manages synchronous and asynchronous code easily, using nothing more than standard JavaScript and Node-like Streams.
* [Most.js](https://github.com/cujojs/most) - high performance FRP library.
* [MobX](https://github.com/mobxjs/mobx) - TFRP library for simple, scalable state management.
* [Cycle.js](https://cycle.js.org) - A functional and reactive JavaScript library for cleaner code.

## Data Structure
*Data structure libraries to build a more sophisticated application.*

* [immutable-js](https://github.com/facebook/immutable-js) - Immutable Data Collections including Sequence, Range, Repeat, Map, OrderedMap, Set and a sparse Vector.
* [mori](https://github.com/swannodette/mori) - A library for using ClojureScript's persistent data structures and supporting API from the comfort of vanilla JavaScript.
* [buckets](https://github.com/mauriciosantos/Buckets-JS) - A complete, fully tested and documented data structure library written in JavaScript.
* [hashmap](https://github.com/flesler/hashmap) - Simple hashmap implementation that supports any kind of keys.


## Date
*Date Libraries.*

* [moment](https://github.com/moment/moment) - Parse, validate, manipulate, and display dates in JavaScript.
* [moment-timezone](https://github.com/moment/moment-timezone) - Timezone support for moment.js.
* [jquery-timeago](https://github.com/rmm5t/jquery-timeago) - A jQuery plugin that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago").
* [timezone-js](https://github.com/mde/timezone-js) - Timezone-enabled JavaScript Date object. Uses Olson zoneinfo files for timezone data.
* [date](https://github.com/MatthewMueller/date) - Date() for humans.
* [ms.js](https://github.com/rauchg/ms.js) - Tiny millisecond conversion utility.
* [countdown.js](https://github.com/gumroad/countdown.js) - Super simple countdowns.
* [timeago.js](https://github.com/hustcc/timeago.js) - Simple library (less then 2kb) used to format date with `*** time ago` statement.
* [fecha](https://github.com/taylorhakes/fecha) - Lightweight date formatting and parsing (~2KB). Meant to replace parsing and formatting functionality of moment.js.
* [date-fns](https://github.com/date-fns/date-fns) - Modern JavaScript date utility library.
* [map-countdown](https://github.com/dawidjaniga/map-countdown) - A browser countdown built on top of the Google Maps.
* [dayjs](https://github.com/iamkun/dayjs) - Day.js 2KB immutable date library alternative to Moment.js with the same modern API.

## String
*String Libraries.*

* [voca](https://github.com/panzerdp/voca) - The ultimate JavaScript string library
* [selecting](https://github.com/EvandroLG/selecting) - A library that allows you to access the text selected by the user.
* [underscore.string](https://github.com/epeli/underscore.string) - String manipulation extensions for Underscore.js JavaScript library.
* [string.js](https://github.com/jprichardson/string.js) - Extra JavaScript string methods.
* [he](https://github.com/mathiasbynens/he) - A robust HTML entity encoder/decoder written in JavaScript.
* [multiline](https://github.com/sindresorhus/multiline) - Multiline strings in JavaScript.
* [query-string](https://github.com/sindresorhus/query-string) - Parse and stringify URL query strings.
* [URI.js](https://github.com/medialize/URI.js/) - JavaScript URL mutation library.
* [jsurl](https://github.com/Mikhus/domurl) - Lightweight URL manipulation with JavaScript.
* [sprintf.js](https://github.com/alexei/sprintf.js) - A sprintf implementation.
* [url-pattern](https://github.com/snd/url-pattern) - Easier than regex string matching patterns for urls and other strings. Turn strings into data or data into strings.
* [plexis](https://github.com/plexis-js/plexis) - Lo-fi, powerful, community-driven string manipulation library.

## Number

* [Numeral-js](https://github.com/adamwdraper/Numeral-js) - A JavaScript library for formatting and manipulating numbers.
* [chance.js](https://github.com/chancejs/chancejs) - Random generator helper in JavaScript. Can generate numbers, strings etc.
* [odometer](https://github.com/HubSpot/odometer) - Smoothly transitions numbers with ease.
* [accounting.js](https://github.com/josscrowcroft/accounting.js) - A lightweight JavaScript library for number, money and currency formatting - fully localisable, zero dependencies.
* [money.js](https://github.com/josscrowcroft/money.js) - A tiny (1kb) JavaScript currency conversion library, for web & nodeJS.
* [Fraction.js](https://github.com/infusion/Fraction.js) - A rational number library for JavaScript.
* [Complex.js](https://github.com/infusion/Complex.js) - A complex number library for JavaScript.
* [Polynomial.js](https://github.com/infusion/Polynomial.js) - A polynomials library for JavaScript.


## Storage

* [store.js](https://github.com/marcuswestin/store.js) - LocalStorage wrapper for all browsers without using cookies or flash. Uses localStorage, globalStorage, and userData behavior under the hood.
* [localForage](https://github.com/mozilla/localForage) - Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API.
* [jStorage](https://github.com/andris9/jStorage) - jStorage is a simple key/value database to store data on browser side.
* [cross-storage](https://github.com/zendesk/cross-storage) - Cross domain local storage, with permissions.
* [basket.js](https://github.com/addyosmani/basket.js) - A script and resource loader for caching & loading scripts with localStorage.
* [bag.js](https://github.com/nodeca/bag.js) - A caching script and resource loader, similar to basket.js, but with additional k/v interface and localStorage / websql / indexedDB support.
* [basil.js](https://github.com/Wisembly/basil.js) - The missing JavaScript smart persistent layer.
* [jquery-cookie](https://github.com/carhartl/jquery-cookie) - A simple, lightweight jQuery plugin for reading, writing and deleting cookies.
* [js-cookie](https://github.com/js-cookie/js-cookie) - A simple, lightweight JavaScript API for handling browser cookies.
* [Cookies](https://github.com/ScottHamper/Cookies) - JavaScript Client-Side Cookie Manipulation Library.
* [DB.js](https://github.com/aaronpowell/db.js/) - Promise based IndexDB Wrapper library.
* [lawnchair.js](https://github.com/brianleroux/lawnchair/) - Simple client-side JSON storage.
* [sql.js](https://github.com/kripken/sql.js) - SQLite compiled to JavaScript through Emscripten.
* [crumbsjs](https://github.com/nirtz89/crumbsjs) - A lightweight vanilla ES6 cookies and local storage JavaScript library.


## Color

* [randomColor](https://github.com/davidmerfield/randomColor) - A color generator for JavaScript.
* [chroma.js](https://github.com/gka/chroma.js) - JavaScript library for all kinds of color manipulations.
* [color](https://github.com/Qix-/color) - JavaScript color conversion and manipulation library.
* [colors](https://github.com/mrmrs/colors) - Smarter defaults for colors on the web.
* [PleaseJS](https://github.com/Fooidge/PleaseJS) - JavaScript Library for creating random pleasing colors and color schemes.
* [TinyColor](https://github.com/bgrins/TinyColor) - Fast, small color manipulation and conversion for JavaScript.
* [Vibrant.js](https://github.com/jariz/vibrant.js/) - Extract prominent colors from an image.

## I18n And L10n
*Localization (l10n) and internationalization (i18n) JavaScript libraries.*

* [i18next](https://github.com/i18next/i18next) - internationalisation (i18n) with JavaScript the easy way.
* [polyglot](https://github.com/airbnb/polyglot.js) - tiny i18n helper library.
* [babelfish](https://github.com/nodeca/babelfish/) - i18n with human friendly API and built in plurals support.
* [ttag](https://github.com/ttag-org/ttag) - Modern javascript i18n localization library based on ES6 tagged templates and the good old GNU gettext.

## Control Flow

* [async](https://github.com/caolan/async) - Async utilities for node and the browser.
* [q](https://github.com/kriskowal/q) - A tool for making and composing asynchronous promises in JavaScript.
* [step](https://github.com/creationix/step/) - An async control-flow library that makes stepping through logic easy.
* [contra](https://github.com/bevacqua/contra/) - Asynchronous flow control with a functional taste to it.
* [Bluebird](https://github.com/petkaantonov/bluebird/) - fully featured promise library with focus on innovative features and performance.
* [when](https://github.com/cujojs/when) - A solid, fast Promises/A+ and when() implementation, plus other async goodies.
* [ObjectEventTarget](https://github.com/gartz/ObjectEventTarget) - Provide a prototype that add support to event listeners (with same behavior of EventTarget from DOMElements available on browsers).
* [sporadic](https://github.com/marcoonroad/sporadic) - Composable concurrency abstractions (such as streams, coroutines and Go-like channels) on top of promises, for Node and browser engines.


## Routing

* [director](https://github.com/flatiron/director) - A tiny and isomorphic URL router for JavaScript.
* [page.js](https://github.com/visionmedia/page.js) - Micro client-side router inspired by the Express router (~1200 bytes).
* [pathjs](https://github.com/mtrpcic/pathjs) - Simple, lightweight routing for web browsers.
* [crossroads](https://github.com/millermedeiros/crossroads.js) - JavaScript Routes.
* [davis.js](https://github.com/olivernn/davis.js) - RESTful degradable JavaScript routing using pushState.
* [navaid](https://github.com/lukeed/navaid) - A navigation aid (aka, router) for the browser in 850 bytes~!


## Security

* [DOMPurify](https://github.com/cure53/DOMPurify) - A DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.
* [js-xss](https://github.com/leizongmin/js-xss) - Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.
* [xss-filters](https://github.com/yahoo/xss-filters) - Secure XSS Filters by Yahoo.


## Log

* [log](https://github.com/adamschwartz/log) - Console.log with style.
* [Conzole](https://github.com/Oaxoa/Conzole) - A debug panel built in JavaScript that wraps JavaScript native console object methods and functionality in a panel displayed inside the page.
* [console.log-wrapper](https://github.com/patik/console.log-wrapper) - Log to the console in any browser with clarity.
* [loglevel](https://github.com/pimterry/loglevel) - Minimal lightweight logging for JavaScript, adding reliable log level methods to wrap any available console.log methods.
* [minilog](http://mixu.net/minilog/) – Lightweight client & server-side logging with Stream-API backends.
* [storyboard](http://guigrpa.github.io/storyboard/) - Universal logging library + Chrome extension; it lets you see all client and server tasks triggered by a user action in a single place.

## RegExp
* [RegEx101](https://regex101.com/#javascript) - Online regex tester and debugger for JavaScript. Also supports Python, PHP and PCRE.
* [RegExr](http://regexr.com) - HTML/JS based tool for creating, testing, and learning about Regular Expressions.
* [RegExpBuilder](https://github.com/thebinarysearchtree/regexpbuilderjs) - Create regular expressions using chained methods.


## Voice Command

* [annyang](https://github.com/TalAter/annyang) - A JavaScript library for adding voice commands to your site, using speech recognition.
* [voix.js](https://github.com/pazguille/voix) - A JavaScript library to add voice commands to your sites, apps or games.


## API

* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [bottleneck](https://github.com/SGrondin/bottleneck) - A powerful rate limiter that makes throttling easy.
* [oauth-signature-js](https://github.com/bettiolo/oauth-signature-js) - JavaScript OAuth 1.0a signature generator for node and the browser.
* [amygdala](https://github.com/lincolnloop/amygdala) - RESTful HTTP client for JavaScript powered web applications.
* [jquery.rest](https://github.com/jpillora/jquery.rest) - A jQuery plugin for easy consumption of RESTful APIs.
* [Rails Ranger](https://github.com/victor-am/rails-ranger) - An opinionated REST client for Ruby on Rails APIs.
* [wretch](https://github.com/elbywan/wretch) - A tiny wrapper built around fetch with an intuitive syntax.
* [Bearer.sh](https://github.com/Bearer/bearer-js) - Universal API client that supports OAuth / API Key / Basic / etc.
* [FarFetch](https://github.com/WebsiteBeaver/far-fetch) - Modern Fetch API wrapper for simplicity, with concise file uploading.
* [Optic](https://github.com/opticdev/optic) - Optic automatically documents and tests your APIs.
* [SWR](https://github.com/vercel/swr) - React Hooks library for remote data fetching.

## Streaming

* [Tailor](https://github.com/zalando/tailor) - Streaming layout service for front-end microservices, inspired by Facebook's BigPipe.


## Vision Detection

* [tracking.js](https://github.com/eduardolundgren/tracking.js) - A modern approach for Computer Vision on the web.
* [ocrad.js](https://github.com/antimatter15/ocrad.js) - OCR in JavaScript via Emscripten.


## Machine Learning

* [ConvNetJS](https://github.com/karpathy/convnetjs) - Deep Learning in JavaScript. Train Convolutional Neural Networks (or ordinary ones) in your browser.
* [DN2A](https://github.com/dn2a/dn2a-javascript) - Digital Neural Networks Architecture.
* [Brain.js](https://github.com/harthur/brain) - Neural networks in JavaScript.
* [Mind.js](https://github.com/stevenmiller888/mind) - A flexible neural network library.
* [Synaptic.js](https://github.com/cazala/synaptic) - Architecture-free neural network library for node.js and the browser.
* [TensorFlow.js](https://js.tensorflow.org) - A JavaScript library for training and deploying ML models in the browser and on Node.js.
* [ml5.js](https://ml5js.org) - Friendly Machine Learning for the Web.
* [Synapses](https://github.com/mrdimosthenis/Synapses) - Lightweight cross-platform Neural Network library.


## Browser Detection

* [bowser](https://github.com/ded/bowser) - a browser detector.

## Benchmark

* [benchmark.js](https://github.com/bestiejs/benchmark.js) - A benchmarking library. As used on jsPerf.com.
* [matcha](https://github.com/logicalparadox/matcha) - A caffeine driven, simplistic approach to benchmarking.

## Code highlighting

* [Highlight.js](https://github.com/isagalaev/highlight.js) - JavaScript syntax highlighter.
* [PrismJS](https://github.com/PrismJS/prism) - Lightweight, robust, elegant syntax highlighting.


## Loading Status
*Libraries for indicate load status.*

* [Mprogress.js](https://github.com/lightningtgc/MProgress.js) - Create Google Material Design progress linear bars.
* [NProgress](http://ricostacruz.com/nprogress/) - Slim progress bars for Ajax'y applications.
* [Spin.js](https://github.com/fgnass/spin.js) - A spinning activity indicator.
* [progress.js](https://github.com/usablica/progress.js) - Create and manage progress bar for every objects on the page.
* [progressbar.js](https://github.com/kimmobrunfeldt/progressbar.js) - Beautiful and responsive progress bars with animated SVG paths.
* [pace](https://github.com/HubSpot/pace) - Automatically add a progress bar to your site.
* [topbar](https://github.com/buunguyen/topbar) - Tiny & beautiful site-wide progress indicator.
* [nanobar](https://github.com/jacoborus/nanobar) - Very lightweight progress bars. No jQuery.
* [PageLoadingEffects](https://github.com/codrops/PageLoadingEffects) - Modern ways of revealing new content using SVG animations.
* [SpinKit](https://github.com/tobiasahlin/SpinKit) - A collection of loading indicators animated with CSS.
* [Ladda](https://github.com/hakimel/Ladda) - Buttons with built-in loading indicators.
* [css-loaders](https://github.com/lukehaas/css-loaders) - A collection of loading spinners animated with CSS

Besides libraries, there're [Collection on Codepen](http://codepen.io/collection/HtAne/), and generators like [Ajaxload](http://www.ajaxload.info/), [Preloaders](http://preloaders.net/) and [CSSLoad](http://cssload.net/).


## Validation

* [Parsley.js](https://github.com/guillaumepotier/Parsley.js) - Validate your forms, frontend, without writing a single line of JavaScript.
* [jquery-validation](https://github.com/jzaefferer/jquery-validation) - jQuery Validation Plugin.
* [validator.js](https://github.com/chriso/validator.js) - String validation and sanitization.
* [validate.js](https://github.com/rickharrison/validate.js) - Lightweight JavaScript form validation library inspired by CodeIgniter.
* [validatr](https://github.com/jaymorrow/validatr/) - Cross Browser HTML5 Form Validation.
* [FormValidation](http://formvalidation.io/) - The best jQuery plugin to validate form fields. Formerly BootstrapValidator.
* [is.js](https://github.com/arasatasaygin/is.js) - Check types, regexps, presence, time and more.
* [FieldVal](https://github.com/FieldVal/fieldval-js) - multipurpose validation library. Supports both sync and async validation.
* [Funval](https://github.com/neuledge/funval) - Data validation using functions interfaces (support TypeScript).


## Keyboard Wrappers

* [mousetrap](https://github.com/ccampbell/mousetrap) - Simple library for handling keyboard shortcuts in JavaScript.
* [keymaster](https://github.com/madrobby/keymaster) - A simple micro-library for defining and dispatching keyboard shortcuts.
* [Keypress](https://github.com/dmauro/Keypress) - A keyboard input capturing utility in which any key can be a modifier key.
* [KeyboardJS](https://github.com/RobertWHurst/KeyboardJS) - A JavaScript library for binding keyboard combos without the pain of key codes and key combo conflicts.
* [jquery.hotkeys](https://github.com/jeresig/jquery.hotkeys) - jQuery Hotkeys lets you watch for keyboard events anywhere in your code supporting almost any key combination.
* [jwerty](https://github.com/keithamus/jwerty) - Awesome handling of keyboard events.


## Tours And Guides

* [intro.js](https://github.com/usablica/intro.js) - A better way for new feature introduction and step-by-step users guide for your website and project.
* [shepherd](https://github.com/HubSpot/shepherd) - Guide your users through a tour of your app.
* [bootstrap-tour](https://github.com/sorich87/bootstrap-tour) - Quick and easy product tours with Twitter Bootstrap Popovers.
* [tourist](https://github.com/easelinc/tourist) - Simple, flexible tours for your app.
* [chardin.js](https://github.com/heelhook/chardin.js) - Simple overlay instructions for your apps.
* [pageguide](https://github.com/tracelytics/pageguide) - An interactive guide for web page elements using jQuery and CSS3.
* [hopscotch](https://github.com/linkedin/hopscotch) - A framework to make it easy for developers to add product tours to their pages.
* [joyride](https://github.com/zurb/joyride) - jQuery feature tour plugin.
* [focusable](https://github.com/zzarcon/focusable) - Set a spotlight focus on DOM element adding a overlay layer to the rest of the page.
* [driver.js](https://github.com/kamranahmedse/driver.js) - Powerful yet light-weight, vanilla JavaScript engine to drive the user's focus across the page

## Notifications

* [iziToast](https://github.com/dolce/iziToast) - Elegant, responsive, flexible and lightweight notification plugin with no dependencies.
* [messenger](https://github.com/HubSpot/messenger) - Growl-style alerts and messages for your app.
* [noty](https://github.com/needim/noty) - jQuery notification plugin.
* [pnotify](https://github.com/sciactive/pnotify) - JavaScript notifications for Bootstrap, jQuery UI, and the Web Notifications Draft.
* [toastr](https://github.com/CodeSeven/toastr) - Simple JavaScript toast notifications.
* [humane-js](https://github.com/wavded/humane-js) - A simple, modern, browser notification system.
* [smoke.js](https://github.com/hxgf/smoke.js) - Framework-agnostic styled alert system for JavaScript.
* [notie](https://github.com/jaredreich/notie) - Simple notifications and inputs with no dependencies.


## Sliders

* [Swiper](https://github.com/nolimits4web/Swiper) - Mobile touch slider and framework with hardware accelerated transitions.
* [slick](https://github.com/kenwheeler/slick) - The last carousel you'll ever need.
* [slidesJs](http://www.slidesjs.com) - Is a responsive slideshow plug-in for JQuery(1.7.1+) with features like touch and CSS3 transitions
* [FlexSlider](https://github.com/woothemes/FlexSlider) - An awesome, fully responsive jQuery slider plugin.
* [unslider](https://github.com/idiot/unslider) - The simplest jQuery slider there is.
* [sly](https://github.com/darsain/sly) - JavaScript library for one-directional scrolling with item based navigation support.
* [vegas](https://github.com/jaysalvat/vegas) - A jQuery plugin to add beautiful fullscreen backgrounds to your webpages. It even allows Slideshows.
* [Sequence](https://github.com/IanLunn/Sequence) - CSS animation framework for creating responsive sliders, presentations, banners, and other step-based applications.
* [reveal.js](https://github.com/hakimel/reveal.js) - A framework for easily creating beautiful presentations using HTML.
* [impress.js](https://github.com/impress/impress.js) - It's a presentation framework based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com.
* [bespoke.js](https://github.com/bespokejs/bespoke) - DIY Presentation Micro-Framework
* [Strut](https://github.com/tantaman/Strut) - Strut - An Impress.js and Bespoke.js Presentation Editor
* [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) - JavaScript image gallery for mobile and desktop, modular, framework independent.
* [jcSlider](https://github.com/JoanClaret/jcSlider) - A responsive slider jQuery plugin with CSS animations.
* [basic-jquery-slider](https://github.com/jcobb/basic-jquery-slider) - Simple to use, simple to theme, simple to customise.
* [jQuery.adaptive-slider](https://github.com/creative-punch/jQuery.adaptive-slider/) - A jQuery plugin for a slider with adaptive colored figcaption and navigation.
* [slidr](https://github.com/bchanx/slidr) - add some slide effects.
* [Flickity](https://github.com/metafizzy/flickity) - Touch, responsive, flickable galleries.
* [Glide.js](https://github.com/jedrzejchalubek/glidejs) - Responsive and touch-friendly jQuery slider. It's simple, lightweight and fast.
* [jQuery.adaptive-slider](https://github.com/creative-punch/jQuery.adaptive-slider/) - A jQuery plugin for a slider with adaptive colored figcaption and navigation.
* [Embla Carousel](https://github.com/davidcetinkaya/embla-carousel) - An extensible low level carousel for the web, written in TypeScript.

## Range Sliders

* [Ion.RangeSlider](https://github.com/IonDen/ion.rangeSlider) - Powerful and easily customizable range slider with many options and skin support.
* [jQRangeSlider](https://github.com/ghusse/jQRangeSlider) - A JavaScript slider selector that supports dates.
* [noUiSlider](https://github.com/leongersen/noUiSlider) - A lightweight, highly customizable range slider without bloat.
* [rangeslider.js](https://github.com/andreruffert/rangeslider.js) - HTML5 input range slider element polyfill.


## Form Widgets

### Input

* [typeahead.js](https://github.com/twitter/typeahead.js) - A fast and fully-featured autocomplete library.
* [tag-it](https://github.com/aehlke/tag-it) - A jQuery UI plugin to handle multi-tag fields as well as tag suggestions/autocomplete.
* [At.js](https://github.com/ichord/At.js) - Add GitHub like mentions autocomplete to your application.
* [Placeholders.js](https://github.com/jamesallardice/Placeholders.js) - A JavaScript polyfill for the HTML5 placeholder attribute.
* [fancyInput](https://github.com/yairEO/fancyInput) - Makes typing in input fields fun with CSS3 effects.
* [jQuery-Tags-Input](https://github.com/xoxco/jQuery-Tags-Input) - Magically convert a simple text input into a cool tag list with this jQuery plugin.
* [vanilla-masker](https://github.com/BankFacil/vanilla-masker) - A pure JavaScript mask input.
* [Ion.CheckRadio](https://github.com/IonDen/ion.checkRadio) - jQuery plugin for styling checkboxes and radio-buttons. With skin support.
* [awesomplete](https://github.com/LeaVerou/awesomplete) - Ultra lightweight, usable, beautiful autocomplete with zero dependencies. - http://leaverou.github.io/awesomplete

### Calendar

* [pickadate.js](https://github.com/amsul/pickadate.js) - The mobile-friendly, responsive, and lightweight jQuery date & time input picker.
* [bootstrap-datepicker](https://github.com/eternicode/bootstrap-datepicker) - A datepicker for @twitter bootstrap forked from Stefan Petre's (of eyecon.ro), improvements by @eternicode.
* [Pikaday](https://github.com/dbushell/Pikaday) - A refreshing JavaScript Datepicker — lightweight, no dependencies, modular CSS.
* [fullcalendar](https://github.com/fullcalendar/fullcalendar) - Full-sized drag & drop event calendar (jQuery plugin).
* [rome](https://github.com/bevacqua/rome) - A customizable date (and time) picker. Dependency free, opt-in UI.
* [datedropper](https://github.com/felicegattuso/datedropper) - datedropper is a jQuery plugin that provides a quick and easy way to manage dates for input fields.


### Select

* [selectize.js](https://github.com/brianreavis/selectize.js) - Selectize is the hybrid of a textbox and select box. It's jQuery based and it has autocomplete and native-feeling keyboard navigation; useful for tagging, contact lists, etc.
* [select2](https://github.com/select2/select2) - a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.
* [chosen](https://github.com/harvesthq/chosen) - A library for making long, unwieldy select boxes more friendly.

### File Uploader

* [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload) - File Upload widget with multiple file selection, drag&amp;drop support, progress bar, validation and preview images, audio and video for jQuery.
* [dropzone](https://github.com/enyo/dropzone) - Dropzone is an easy to use drag'n'drop library. It supports image previews and shows nice progress bars.
* [flow.js](https://github.com/flowjs/flow.js) - A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API.
* [fine-uploader](https://github.com/FineUploader/fine-uploader) - Multiple file upload plugin with progress-bar, drag-and-drop, direct-to-S3 uploading.
* [FileAPI](https://github.com/mailru/FileAPI) - A set of JavaScript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
* [plupload](https://github.com/moxiecode/plupload) - A JavaScript API for dealing with file uploads it supports features like multiple file selection, file type filtering, request chunking, client side image scaling and it uses different runtimes to achieve this such as HTML 5, Silverlight and Flash.

### Other

* [form](https://github.com/malsup/form) - jQuery Form Plugin.
* [Garlic.js](https://github.com/guillaumepotier/Garlic.js) - Automatically persist your forms' text and select field values locally, until the form is submitted.
* [Countable](https://github.com/RadLikeWhoa/Countable) - A JavaScript function to add live paragraph-, word- and character-counting to an HTML element.
* [card](https://github.com/jessepollak/card) - Make your credit card form better in one line of code.
* [stretchy](https://github.com/LeaVerou/stretchy) - Form element autosizing, the way it should be.
* [analytics](https://github.com/davidwells/analytics) - A lightweight, extendable analytics library designed to work with any third-party analytics provider to track page views, custom events, & identify users.


## Tips

* [tipsy](https://github.com/jaz303/tipsy) - Facebook-style tooltips plugin for jQuery.
* [opentip](https://github.com/enyo/opentip) - An open source JavaScript tooltip based on the prototype framework.
* [qTip2](https://github.com/qTip2/qTip2) - Pretty powerful tooltips.
* [tooltipster](https://github.com/iamceege/tooltipster) - A jQuery tooltip plugin.
* [simptip](https://github.com/arashmanteghi/simptip) - A simple CSS tooltip made with Sass.
* [jquery-popup-overlay](https://github.com/vast-engineering/jquery-popup-overlay) - jQuery plugin for responsive and accessible modal windows and tooltips.
* [toolbar](https://github.com/paulkinzett/toolbar) - A tooltip style toolbar jQuery plugin
* [hint.css](https://github.com/chinchang/hint.css) - A tooltip library in CSS for your lovely websites.

## Modals and Popups

* [Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup) - Light and responsive lightbox script with focus on performance.
* [jquery-popbox](https://github.com/gristmill/jquery-popbox) - jQuery PopBox UI Element.
* [jquery.avgrund.js](https://github.com/voronianski/jquery.avgrund.js) - A jQuery plugin with new modal concept for popups.
* [vex](https://github.com/HubSpot/vex) - A modern dialog library which is highly configurable and easy to style.
* [bootstrap-modal](https://github.com/jschr/bootstrap-modal) - Extends the default Bootstrap Modal class. Responsive, stackable, ajax and more.
* [css-modal](https://github.com/drublic/css-modal) - A modal built out of pure CSS.
* [jquery-popup-overlay](https://github.com/vast-engineering/jquery-popup-overlay) - jQuery plugin for responsive and accessible modal windows and tooltips.
* [SweetAlert](https://github.com/t4t5/sweetalert) - An awesome replacement for JavaScript's alert.
* [baguetteBox.js](https://github.com/feimosi/baguetteBox.js) - Simple and easy to use lightbox script written in pure JavaScript.
* [colorbox](https://github.com/jackmoore/colorbox) - A light-weight, customizable lightbox plugin for jQuery.
* [fancyBox](https://github.com/fancyapps/fancyBox) - A tool that offers a nice and elegant way to add zooming functionality for images, html content and multi-media on your webpages.
* [swipebox](https://github.com/brutaldesign/swipebox) - A touchable jQuery lightbox
* [jBox](https://github.com/StephanWagner/jBox) - jBox is a powerful and flexible jQuery plugin, taking care of all your popup windows, tooltips, notices and more.

## Scroll

* [scrollMonitor](https://github.com/stutrek/scrollMonitor) - A simple and fast API to monitor elements as you scroll.
* [headroom](https://github.com/WickyNilliams/headroom.js) - Give your pages some headroom. Hide your header until you need it.
* [onepage-scroll](https://github.com/peachananr/onepage-scroll) - Create an Apple-like one page scroller website (iPhone 5S website) with One Page Scroll plugin.
* [iscroll](https://github.com/cubiq/iscroll) - iScroll is a high performance, small footprint, dependency free, multi-platform JavaScript scroller.
* [skrollr](https://github.com/Prinzhorn/skrollr) - Stand-alone parallax scrolling library for mobile (Android + iOS) and desktop. No jQuery.
* [parallax](https://github.com/wagerfield/parallax) - Parallax Engine that reacts to the orientation of a smart device.
* [stellar.js](https://github.com/markdalgleish/stellar.js) - Parallax scrolling made easy.
* [plax](https://github.com/cameronmcefee/plax) - jQuery powered parallaxing.
* [jparallax](https://github.com/stephband/jparallax) - jQuery plugin for creating interactive parallax effect.
* [fullPage](https://github.com/alvarotrigo/fullPage.js) - A simple and easy to use plugin to create fullscreen scrolling websites (also known as single page websites).
* [ScrollMenu](https://github.com/s-yadav/ScrollMenu) - A new interface to replace old boring scrollbar.
* [Clusterize.js](https://github.com/NeXTs/Clusterize.js) - Tiny vanilla JS plugin to display large data sets easily.
* [simpleParallax](https://github.com/geosigno/simpleParallax) - Simple and tiny JavaScript library to add parallax animations on any images


## Menu

* [jQuery-menu-aim](https://github.com/kamens/jQuery-menu-aim) - jQuery plugin to fire events when user's cursor aims at particular dropdown menu items. For making responsive mega dropdowns like Amazon's.
* [jQuery contextMenu](https://github.com/swisnl/jQuery-contextMenu) - contextMenu manager.
* [Slideout](https://github.com/mango/slideout) - A responsive touch slideout navigation menu for mobile web apps.
* [Slide and swipe](https://github.com/JoanClaret/slide-and-swipe-menu) - A sliding swipe menu that works with touchSwipe library.


## Table/Grid

* [jTable](https://github.com/hikalkan/jtable) - A jQuery plugin to create AJAX based CRUD tables.
* [DataTables](https://www.datatables.net/) - (jQuery plug-in) It is a highly flexible tool, based upon the foundations of progressive enhancement, and will add advanced interaction controls to any HTML table.
* [Tabulator](http://olifolkerd.github.io/tabulator/) - (jQuery plug-in) An extremely flexible library that create tables with a range of interactive features from any JSON data source or existing HTML table.
* [Bootstrap Table](http://bootstrap-table.wenzhixin.net.cn/) - An Extension to the popular Bootstrap framework for creating tables that fit the style of your site with no need for additional markup.
* [floatThead](https://github.com/mkoryak/floatThead) - (jQuery plug-in) lock any table's header while scrolling within the body. Works on any table and requires no custom html or css.
* [Masonry](http://masonry.desandro.com/) - A cascading grid layout library.
* [Packery](http://packery.metafizzy.co/) - A grid layout library that uses a bin-packing algorithm. Useable for draggable layouts.
* [Isotope](http://isotope.metafizzy.co/) - A filterable, sortable, grid layout library. Can implement Masonry, Packery, and other layouts.
* [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid/) - Grid based on CSS3 flexbox.

## Frameworks

* [Semantic UI](http://semantic-ui.com/) - UI Kit with lots of themes and elements.
* [w2ui](http://w2ui.com/) - A set of jQuery plugins for front-end development of data-driven web applications.
* [fluidity](https://github.com/mrmrs/fluidity) - The worlds smallest fully-responsive css framework.
* [Ink](https://github.com/sapo/Ink) - An HTML5/CSS3 framework used at SAPO for fast and efficient website design and prototyping.
* [DataFormsJS](https://github.com/dataformsjs/dataformsjs) - A minimal JavaScript Framework and standalone components for rapid development of sites and SPA's.
* [EHTML](https://github.com/Guseyn/EHTML) - HTML Framework that allows you not to write JavaScript code.

## Boilerplates

 * [html5-boilerplate](https://github.com/h5bp/html5-boilerplate) - A professional front-end template for building fast, robust, and adaptable web apps or sites.
 * [mobile-boilerplate](https://github.com/h5bp/mobile-boilerplate) - A front-end template that helps you build fast, modern mobile web apps.
 * [webplate](https://github.com/chrishumboldt/webplate) - An awesome front-end framework that lets you stay focused on building your site or app while remaining really easy to use.
 * [Cerberus](https://github.com/TedGoas/Cerberus) - A few simple, but solid patterns for responsive HTML emails. Even in Outlook.
 * [full-page-intro-and-navigation](https://github.com/CodyHouse/full-page-intro-and-navigation) - An intro page with a full width background image, a bold animated menu and an iOS-like blurred effect behind the navigation.
 * [Fluid-Squares](https://github.com/crozynski/Fluid-Squares) - A fluid grid of square units.
 * [Mobile-First-RWD](https://github.com/bradfrost/Mobile-First-RWD) - An example of a mobile-first responsive web design.
 * [this-is-responsive](https://github.com/bradfrost/this-is-responsive) - This Is Responsive.
 * [npm run-scripts](https://gist.github.com/addyosmani/9f10c555e32a8d06ddb0) Task automation with NPM run-scripts.

## Gesture

* [hammer.js](https://github.com/hammerjs/hammer.js) - A JavaScript library for multi-touch gestures.
* [touchemulator](https://github.com/hammerjs/touchemulator) - Emulate touch input on your desktop.
* [Dragula](https://github.com/bevacqua/dragula/) - Drag and drop so simple it hurts.


## Maps

* [Leaflet](https://github.com/Leaflet/Leaflet) - JavaScript library for mobile-friendly interactive maps.
* [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) - Open Source WebGL virtual globe and map engine.
* [gmaps](https://github.com/HPNeo/gmaps) - The easiest way to use Google Maps.
* [polymaps](https://github.com/simplegeo/polymaps) - A free JavaScript library for making dynamic, interactive maps in modern web browsers.
* [kartograph.js](https://github.com/kartograph/kartograph.js) - Open source JavaScript renderer for Kartograph SVG maps.
* [mapbox.js](https://github.com/mapbox/mapbox.js) - Mapbox JavaScript API, a Leaflet Plugin.
* [jqvmap](https://github.com/manifestinteractive/jqvmap) - jQuery Vector Map Library.
* [OpenLayers3](http://openlayers.org/) - A high-performance, feature-packed library for all your mapping needs.

## Video/Audio

 * [prettyembed.js](https://github.com/mike-zarandona/prettyembed.js) - Prettier embeds for your YouTubes - with nice options like high-res preview images, advanced customization of embed options, and optional FitVids support.
 * [html5media](https://github.com/etianen/html5media) - Enables <video> and <audio> tags in all major browsers. <https://html5media.info/>
 * [Play-em JS](https://github.com/adrienjoly/playemjs) - Play'em is a JavaScript component that manages a music/video track queue and plays a sequence of songs by embedding several players in a HTML DIV including Youtube, Soundcloud and Vimeo.
 * [polyplayer](https://github.com/Acconut/polyplayer) - Rule YouTube, Soundcloud and Vimeo player with one API.
 * [flowplayer](https://github.com/flowplayer/flowplayer) - The HTML5 video player for the web
 <https://flowplayer.org/>
 * [mediaelement](https://github.com/johndyer/mediaelement) - HTML5 <audio> or <video> player with Flash and Silverlight shims that mimics the HTML5 MediaElement API, enabling a consistent UI in all browsers. <http://mediaelementjs.com/>
 * [SoundJS](https://github.com/CreateJS/SoundJS) - A library to make working with audio on the web easier. It provides a consistent API for playing audio in different browsers.
 * [video.js](https://github.com/videojs/video.js) - Video.js - open source HTML5 & Flash video player.
 * [FitVids.js](https://github.com/davatron5000/FitVids.js) - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.
 * [Ion.Sound](https://github.com/IonDen/ion.sound) - Simple sounds on any web page.
 * [photobooth-js](https://github.com/WolframHempel/photobooth-js) - A widget that allows users to take their avatar pictures on your site.
 * [clappr](https://github.com/clappr/clappr) - An extensible media player for the web http://clappr.io
 * [exifr](https://github.com/MikeKovarik/exifr) - The fastest and most versatile EXIF reading library. https://mutiny.cz/exifr/
 * [ts-audio](https://github.com/EvandroLG/ts-audio) - an agnostic and easy-to-use library to work with the `AudioContext` API

## Typography

 * [FlowType.JS](https://github.com/simplefocus/FlowType.JS) - Web typography at its finest: font-size and line-height based on element width.
 * [BigText](https://github.com/zachleat/BigText) - jQuery plugin, calculates the font-size and word-spacing needed to match a line of text to a specific width.
 * [circletype](https://github.com/peterhry/circletype) - A jQuery plugin that lets you curve type on the web.
 * [slabText](https://github.com/freqDec/slabText/) - A jQuery plugin for producing big, bold & responsive headlines.
 * [simple-text-rotator](https://github.com/peachananr/simple-text-rotator) - Add a super simple rotating text to your website with little to no markup.
 * [novacancy.js](https://github.com/chuckyglitch/novacancy.js) - Text Neon Golden effect jQuery plug-in.
 * [jquery-responsive-text](https://github.com/ghepting/jquery-responsive-text) - Make your text sizing responsive!
 * [FitText.js](https://github.com/davatron5000/FitText.js) - A jQuery plugin for inflating web type.
 * [Lettering.js](https://github.com/davatron5000/Lettering.js) - A lightweight, easy to use JavaScript `<span>` injector for radical Web Typography.


## Animations

* [velocity](https://github.com/julianshapiro/velocity) - Accelerated JavaScript animation.
* [jquery.transit](https://github.com/rstacruz/jquery.transit) - Super-smooth CSS3 transformations and transitions for jQuery.
* [impress.js](https://github.com/impress/impress.js) - Make Prezi-like presentations with CSS3 transformations/transitions in an HTML document.
* [bounce.js](https://github.com/tictail/bounce.js) - Create tasty CSS3 powered animations in no time.
* [GreenSock-JS](https://github.com/greensock/GreenSock-JS) - High-performance HTML5 animations that work in all major browsers.
* [TransitionEnd](https://github.com/EvandroLG/transitionEnd) - TransitionEnd is an agnostic and cross-browser library to work with transitioned event.
* [Dynamic.js](https://github.com/michaelvillar/dynamics.js) - JavaScript library to create physics-based CSS animations.
* [the-cube](https://github.com/pstadler/the-cube) - The Cube is an experiment with CSS3 transitions.
* [Effeckt.css](https://github.com/h5bp/Effeckt.css) - A Performant Transitions and Animations Library
* [animate.css](https://github.com/daneden/animate.css) - A cross-browser library of CSS animations. As easy to use as an easy thing.
* [textillate](https://github.com/jschr/textillate) - A simple plugin for CSS3 text animations.
* [move.js](https://github.com/visionmedia/move.js) - CSS3 backed JavaScript animation framework.
* [animatable](https://github.com/LeaVerou/animatable) - One property, two values, endless possibilities.
* [shuffle-images](https://github.com/peachananr/shuffle-images) - The Simplest Way to shuffle through images in a Creative Way http://www.thepetedesign.com/demos/shuffle-images_demo.html
* [smoothState.js](https://github.com/miguel-perez/smoothState.js) - Unobtrusive page transitions with jQuery. http://smoothstate.com/
* [Anime.js](http://animejs.com) - A JavaScript animation engine http://animejs.com.
* [Mo.js](http://mojs.io) - Motion graphics toolbelt for the web http://mojs.io.
* [particles.js](https://github.com/VincentGarreau/particles.js) - A lightweight JavaScript library for creating particles.
* [tsParticles](https://github.com/matteobruni/tsparticles) - A new and improved version of particles.js with bug fixes and many new features
* [particles-bg](https://github.com/lindelof/particles-bg) - A lightweight React particles animation background component.

## Image Processing

* [lena.js](https://github.com/davidsonfellipe/lena.js) - A Library for image processing with filters and util functions.
* [pica](https://github.com/nodeca/pica) - High quality image resize (with fast Lanczos filter, implemented in pure JS).
* [cropper](https://github.com/fengyuanchen/cropper) - A simple jQuery image cropping plugin.


## ES6

* [es6features](https://github.com/lukehoban/es6features) - Overview of ECMAScript 6 features.
* [es6-features](https://github.com/rse/es6-features) - ECMAScript 6: Feature Overview & Comparison.
* [es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet) - ES2015 [ES6] cheatsheet containing tips, tricks, best practices and code snippets.
* [ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es6/) - Compatibility tables for all ECMAScript 6 features on a variety of environments.
* [Babel (Formerly 6to5)](https://github.com/babel/babel) - Turn ES6+ code into vanilla ES5 with no runtime.
* [Traceur compiler](https://github.com/google/traceur-compiler) - ES6 features > ES5. Includes classes, generators, promises, destructuring patterns, default parameters & more.


## Generators

* [Gatsby.js](https://github.com/gatsbyjs/gatsby) - React-based static site generator.
* [Gridsome](https://github.com/gridsome/gridsome) - Vue-powered static site generator.
* [Docusaurus](https://github.com/facebook/docusaurus) - React-based static site generator by Facebook, ideal for content-centric websites.

## SDK

* [javascript-sdk-design](https://github.com/huei90/javascript-sdk-design) - JavaScript SDK design guide extracted from work and personal experience
* [Spotify SDK](https://github.com/loverajoel/spotify-sdk) - Entity oriented SDK to work with the Spotify Web API.
* [Square Node.js SDK](https://github.com/square/connect-nodejs-sdk/) - JavaScript client library for payments and other Square APIs.


## Misc

* [echo](https://github.com/toddmotto/echo) - Lazy-loading images with data-* attributes.
* [picturefill](https://github.com/scottjehl/picturefill) - A responsive image polyfill for &lt;picture&gt;, srcset, sizes.
* [platform.js](https://github.com/bestiejs/platform.js) - A platform detection library that works on nearly all JavaScript platforms.
* [json3](https://github.com/bestiejs/json3) - A modern JSON implementation compatible with nearly all JavaScript platforms.
* [Logical Or Not](http://gabinaureche.com/logicalornot/) - A game about JavaScript specificities.
* [BitSet.js](https://github.com/infusion/BitSet.js) - A JavaScript Bit-Vector implementation
* [spoiler-alert](https://github.com/joshbuddy/spoiler-alert) - SPOILER ALERT! A happy little jquery plugin to hide spoilers on your site.
* [jquery.vibrate.js](https://github.com/illyism/jquery.vibrate.js) - Vibration API Wrappers
* [list.js](https://github.com/javve/list.js) - Adds search, sort, filters and flexibility to tables, lists and various HTML elements. Built to be invisible and work on existing HTML.
http://www.listjs.com
* [mixitup](https://github.com/patrickkunka/mixitup) - MixItUp - A Filter & Sort Plugin.
* [grid](https://github.com/hootsuite/grid) - Drag and drop library for two-dimensional, resizable and responsive lists.
* [jquery-match-height](https://github.com/liabru/jquery-match-height) - a responsive equal heights plugin for jQuery.
* [survey.js](https://github.com/surveyjs/surveyjs) - JavaScript Survey Engine. It uses JSON for survey metadata and results. http://surveyjs.org/
* [Array Explorer](https://github.com/sdras/array-explorer) and [Object Explorer](https://sdras.github.io/object-explorer/) - Resources to help figure out what native JavaScript method would be best to use at any given time
* [Clipboard.js](https://clipboardjs.com/) - "Copy to clipboard" without Flash or use of Frameworks.
* [ky](https://github.com/sindresorhus/ky) - Tiny and elegant HTTP client based on the browser Fetch API.
* [Fcal](https://github.com/5anthosh/fcal) -  Math expression evaluator
* [emoji-button](https://github.com/joeattardi/emoji-button) - Vanilla JavaScript emoji picker component
* [iooxa](https://github.com/iooxa/article) - Components for interactive scientific writing, reactive documents and explorable explanations.
* [Idyll](https://github.com/idyll-lang/idyll) - Create explorable explanations and interactive storytelling essays. Can be [embedded in HTML](https://github.com/idyll-lang/idyll-embed).


* [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) - freeCodeCamp.org's open source codebase and curriculum. Learn to code at home.
* [vuejs/vue](https://github.com/vuejs/vue) - 🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.
* [facebook/react](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [twbs/bootstrap](https://github.com/twbs/bootstrap) - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.
* [airbnb/javascript](https://github.com/airbnb/javascript) - JavaScript Style Guide
* [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) - 📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings
* [axios/axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [nodejs/node](https://github.com/nodejs/node) - Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:
* [mrdoob/three.js](https://github.com/mrdoob/three.js) - JavaScript 3D library.
* [mui-org/material-ui](https://github.com/mui-org/material-ui) - React components for faster and easier web development. Build your own design system, or start with Material Design.
* [30-seconds/30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code) - Short JavaScript code snippets for all your development needs
* [webpack/webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.
* [jquery/jquery](https://github.com/jquery/jquery) - jQuery JavaScript Library
* [atom/atom](https://github.com/atom/atom) - :atom: The hackable text editor
* [chartjs/Chart.js](https://github.com/chartjs/Chart.js) - Simple HTML5 Charts using the <canvas> tag
* [expressjs/express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node.
* [goldbergyoni/nodebestpractices](https://github.com/goldbergyoni/nodebestpractices) - :white_check_mark:  The Node.js best practices list (August 2020)
* [h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate) - A professional front-end template for building fast, robust, and adaptable web apps or sites.
* [lodash/lodash](https://github.com/lodash/lodash) - A modern JavaScript utility library delivering modularity, performance, & extras.
* [moment/moment](https://github.com/moment/moment) - Parse, validate, manipulate, and display dates in javascript.
* [meteor/meteor](https://github.com/meteor/meteor) - Meteor, the JavaScript App Platform
* [yarnpkg/yarn](https://github.com/yarnpkg/yarn) - 📦🐈 Fast, reliable, and secure dependency management.
* [Dogfalo/materialize](https://github.com/Dogfalo/materialize) - Materialize, a CSS Framework based on Material Design
* [ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript) - :bathtub: Clean Code concepts adapted for JavaScript
* [prettier/prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter.
* [babel/babel](https://github.com/babel/babel) - 🐠 Babel is a compiler for writing next generation JavaScript.
* [nwjs/nw.js](https://github.com/nwjs/nw.js) - Call all Node.js modules directly from DOM/WebWorker and enable a new way of writing applications with all Web technologies.
* [serverless/serverless](https://github.com/serverless/serverless) - ⚡ Serverless Framework – Build web, mobile and IoT applications with serverless architectures using AWS Lambda, Azure Functions, Google CloudFunctions & more! –
* [parcel-bundler/parcel](https://github.com/parcel-bundler/parcel) - 📦🚀 Blazing fast, zero configuration web application bundler
* [juliangarnier/anime](https://github.com/juliangarnier/anime) - JavaScript animation engine
* [azl397985856/leetcode](https://github.com/azl397985856/leetcode) -  LeetCode Solutions: A Record of My Problem Solving Journey.( leetcode题解，记录自己的leetcode解题之路。)
* [TryGhost/Ghost](https://github.com/TryGhost/Ghost) - 👻 The #1 headless Node.js CMS for professional publishing
* [leonardomso/33-js-concepts](https://github.com/leonardomso/33-js-concepts) - 📜 33 concepts every JavaScript developer should know.
* [adobe/brackets](https://github.com/adobe/brackets) - An open source code editor for the web, written in JavaScript, HTML and CSS.
* [mozilla/pdf.js](https://github.com/mozilla/pdf.js) - PDF Reader in JavaScript
* [hexojs/hexo](https://github.com/hexojs/hexo) - A fast, simple & powerful blog framework, powered by Node.js.
* [alvarotrigo/fullPage.js](https://github.com/alvarotrigo/fullPage.js) - fullPage plugin by Alvaro Trigo. Create full screen pages fast and simple
* [immutable-js/immutable-js](https://github.com/immutable-js/immutable-js) - Immutable persistent data collections for Javascript which increase efficiency and simplicity.
* [videojs/video.js](https://github.com/videojs/video.js) - Video.js - open source HTML5 & Flash video player
* [zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js) - :scissors: Modern copy to clipboard. No Flash. Just 3kb gzipped :clipboard:
* [Leaflet/Leaflet](https://github.com/Leaflet/Leaflet) -  :leaves: JavaScript library for mobile-friendly interactive maps
* [photonstorm/phaser](https://github.com/photonstorm/phaser) - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.
* [strapi/strapi](https://github.com/strapi/strapi) - 🚀 Open source Node.js Headless CMS to easily build customisable APIs
* [RocketChat/Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) - The ultimate Free Open Source Solution for team communications.
* [caolan/async](https://github.com/caolan/async) - Async utilities for node and the browser
* [NervJS/taro](https://github.com/NervJS/taro) - 开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5 等应用。  https://taro.jd.com/
* [jashkenas/underscore](https://github.com/jashkenas/underscore) - JavaScript's utility _ belt
* [yangshun/front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook) - 🕸  No-bullshit answers to the famous h5bp "Front-end Job Interview Questions"
* [carbon-app/carbon](https://github.com/carbon-app/carbon) - :black_heart: Create and share beautiful images of your source code
* [select2/select2](https://github.com/select2/select2) - Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.
* [nylas/nylas-mail](https://github.com/nylas/nylas-mail) - :love_letter: An extensible desktop mail app built on the modern web.  Forks welcome!
* [Modernizr/Modernizr](https://github.com/Modernizr/Modernizr) - Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.
* [Marak/faker.js](https://github.com/Marak/faker.js) - generate massive amounts of realistic fake data in Node.js and the browser
* [vuejs/vuex](https://github.com/vuejs/vuex) - 🗃️ Centralized State Management for Vue.js.
* [standard/standard](https://github.com/standard/standard) - 🌟 JavaScript Style Guide, with linter & automatic code fixer
* [dcloudio/uni-app](https://github.com/dcloudio/uni-app) - uni-app 是使用 Vue 语法开发小程序、H5、App的统一框架
* [lerna/lerna](https://github.com/lerna/lerna) - :dragon: A tool for managing JavaScript projects with multiple packages.
* [github/fetch](https://github.com/github/fetch) - A window.fetch JavaScript polyfill.
* [date-fns/date-fns](https://github.com/date-fns/date-fns) - ⏳ Modern JavaScript date utility library ⌛️
* [transloadit/uppy](https://github.com/transloadit/uppy) - The next open source file uploader for web browsers :dog:
* [sequelize/sequelize](https://github.com/sequelize/sequelize) - An easy-to-use multi SQL dialect ORM for Node.js
* [webtorrent/webtorrent](https://github.com/webtorrent/webtorrent) - ⚡️ Streaming torrent client for the web
* [mobxjs/mobx](https://github.com/mobxjs/mobx) - Simple, scalable state management.
* [VincentGarreau/particles.js](https://github.com/VincentGarreau/particles.js) - A lightweight JavaScript library for creating particles
* [sentsin/layui](https://github.com/sentsin/layui) - 采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写形式，极低门槛，拿来即用。
* [SheetJS/sheetjs](https://github.com/SheetJS/sheetjs) - :green_book: SheetJS Community Edition -- Spreadsheet Data Toolkit
* [naptha/tesseract.js](https://github.com/naptha/tesseract.js) - Pure Javascript OCR for more than 100 Languages 📖🎉🖥
* [hammerjs/hammer.js](https://github.com/hammerjs/hammer.js) - A javascript library for multi-touch gestures :// You can touch this
* [elsewhencode/project-guidelines](https://github.com/elsewhencode/project-guidelines) - A set of best practices for JavaScript projects
* [emberjs/ember.js](https://github.com/emberjs/ember.js) - Ember.js - A JavaScript framework for creating ambitious web applications
* [gorhill/uBlock](https://github.com/gorhill/uBlock) - uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.
* [SortableJS/Sortable](https://github.com/SortableJS/Sortable) - Sortable — is a JavaScript library for reorderable drag-and-drop lists on modern browsers and touch devices. No jQuery required. Supports Meteor, AngularJS, React, Polymer, Vue, Ember, Knockout and any CSS library, e.g. Bootstrap.
* [dimsemenov/PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) - JavaScript image gallery for mobile and desktop, modular, framework independent
* [kriasoft/react-starter-kit](https://github.com/kriasoft/react-starter-kit) - React Starter Kit — isomorphic web app boilerplate (Node.js, Express, GraphQL, React.js, Babel, PostCSS, Webpack, Browsersync)
* [bevacqua/dragula](https://github.com/bevacqua/dragula) - :ok_hand: Drag and drop so simple it hurts
* [Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question) - 我是木易杨，公众号「高级前端进阶」作者，每天搞定一道前端大厂面试题，祝大家天天进步，一年后会看到不一样的自己。
* [Reactive-Extensions/RxJS](https://github.com/Reactive-Extensions/RxJS) - The Reactive Extensions for JavaScript
* [mochajs/mocha](https://github.com/mochajs/mocha) - ☕️ simple, flexible, fun javascript test framework for node.js & the browser
* [MrRio/jsPDF](https://github.com/MrRio/jsPDF) - Client-side JavaScript PDF generation for everyone.
* [paularmstrong/normalizr](https://github.com/paularmstrong/normalizr) - Normalizes nested JSON according to a schema
* [ramda/ramda](https://github.com/ramda/ramda) - :ram: Practical functional Javascript
* [nefe/You-Dont-Need-jQuery](https://github.com/nefe/You-Dont-Need-jQuery) - Examples of how to do query, style, dom, ajax, event etc like jQuery with plain javascript.
* [enzymejs/enzyme](https://github.com/enzymejs/enzyme) - JavaScript Testing utilities for React
* [jlmakes/scrollreveal](https://github.com/jlmakes/scrollreveal) - Animate elements as they scroll into view.
* [feathericons/feather](https://github.com/feathericons/feather) - Simply beautiful open source icons
* [MostlyAdequate/mostly-adequate-guide](https://github.com/MostlyAdequate/mostly-adequate-guide) - Mostly adequate guide to FP (in javascript)
* [ruanyf/es6tutorial](https://github.com/ruanyf/es6tutorial) - 《ECMAScript 6入门》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新增的语法特性。
* [verekia/js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch) - 🛠️⚡ Step-by-step tutorial to build a modern JavaScript stack.
* [facebook/docusaurus](https://github.com/facebook/docusaurus) - Easy to maintain open source documentation websites.
* [swagger-api/swagger-ui](https://github.com/swagger-api/swagger-ui) - Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.
* [chalk/chalk](https://github.com/chalk/chalk) - 🖍 Terminal string styling done right
* [keystonejs/keystone-classic](https://github.com/keystonejs/keystone-classic) - Node.js CMS and web app framework
* [facebook/relay](https://github.com/facebook/relay) - Relay is a JavaScript framework for building data-driven React applications.
* [yabwe/medium-editor](https://github.com/yabwe/medium-editor) - Medium.com WYSIWYG editor clone. Uses contenteditable API to implement a rich text solution.
* [nswbmw/N-blog](https://github.com/nswbmw/N-blog) - 《一起学 Node.js》
* [websockets/ws](https://github.com/websockets/ws) - Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js
* [svg/svgo](https://github.com/svg/svgo) - :tiger: Node.js tool for optimizing SVG files
* [Shopify/draggable](https://github.com/Shopify/draggable) - The JavaScript Drag & Drop library your grandparents warned you about.
* [jsdom/jsdom](https://github.com/jsdom/jsdom) - A JavaScript implementation of various web standards, for use with Node.js
* [infernojs/inferno](https://github.com/infernojs/inferno) - :fire: An extremely fast, React-like JavaScript library for building modern user interfaces
* [ccxt/ccxt](https://github.com/ccxt/ccxt) - A JavaScript / Python / PHP cryptocurrency trading API with support for more than 120 bitcoin/altcoin exchanges
* [riot/riot](https://github.com/riot/riot) - Simple and elegant component-based UI library
* [facebook/prepack](https://github.com/facebook/prepack) - A JavaScript bundle optimizer.
* [janl/mustache.js](https://github.com/janl/mustache.js) - Minimal templating with {{mustaches}} in JavaScript
* [handsontable/handsontable](https://github.com/handsontable/handsontable) - Handsontable is a JavaScript/HTML5 data grid with spreadsheet look & feel. Available for React, Vue and Angular.
* [aFarkas/lazysizes](https://github.com/aFarkas/lazysizes) - High performance and SEO friendly lazy loader for images (responsive and normal), iframes and more, that detects any visibility changes triggered through user interaction, CSS or JavaScript without configuration.
* [yaronn/blessed-contrib](https://github.com/yaronn/blessed-contrib) - Build terminal dashboards using ascii/ansi art and javascript
* [typicode/lowdb](https://github.com/typicode/lowdb) - ⚡️ lowdb is a small local JSON database powered by Lodash (supports Node, Electron and the browser)
* [processing/p5.js](https://github.com/processing/p5.js) - p5.js is a client-side JS platform that empowers artists, designers, students, and anyone to learn to code and express themselves creatively on the web. It is based on the core principles of Processing. http://twitter.com/p5xjs —
* [amazeui/amazeui](https://github.com/amazeui/amazeui) - Amaze UI, a mobile-first and modular front-end framework.
* [frappe/charts](https://github.com/frappe/charts) - Simple, responsive, modern SVG Charts with zero dependencies
* [browserify/browserify](https://github.com/browserify/browserify) - browser-side require() the node.js way
* [pouchdb/pouchdb](https://github.com/pouchdb/pouchdb) - :koala: - PouchDB is a pocket-sized database.
* [getify/Functional-Light-JS](https://github.com/getify/Functional-Light-JS) - Pragmatic, balanced FP in JavaScript. @FLJSBook on twitter.
* [zloirock/core-js](https://github.com/zloirock/core-js) - Standard Library
* [maxwellito/vivus](https://github.com/maxwellito/vivus) - JavaScript library to make drawing animation on SVG
* [marcuswestin/store.js](https://github.com/marcuswestin/store.js) - Cross-browser storage for all use cases, used across the web.
* [grab/front-end-guide](https://github.com/grab/front-end-guide) - 📚 Study guide and introduction to the modern front end stack.
* [LeCoupa/awesome-cheatsheets](https://github.com/LeCoupa/awesome-cheatsheets) - 👩‍💻👨‍💻 Awesome cheatsheets for popular programming languages, frameworks and development tools. They include everything you should know in one single file.
* [adobe-webplatform/Snap.svg](https://github.com/adobe-webplatform/Snap.svg) - The JavaScript library for modern SVG graphics.
* [feathersjs/feathers](https://github.com/feathersjs/feathers) - A framework for real-time applications and REST APIs with JavaScript and TypeScript
* [JedWatson/classnames](https://github.com/JedWatson/classnames) - A simple javascript utility for conditionally joining classNames together
* [knex/knex](https://github.com/knex/knex) - A query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use.
* [haizlin/fe-interview](https://github.com/haizlin/fe-interview) - 前端面试每日 3+1，以面试题来驱动学习，提倡每日学习与思考，每天进步一点！每天早上5点纯手工发布面试题（死磕自己，愉悦大家），3000+道前端面试题全面覆盖，HTML/CSS/JavaScript/Vue/React/Nodejs/TypeScript/ECMAScritpt/Webpack/Jquery/小程序/软技能……
* [wulkano/Kap](https://github.com/wulkano/Kap) - An open-source screen recorder built with web technology
* [requirejs/requirejs](https://github.com/requirejs/requirejs) - A file and module loader for JavaScript
* [MichMich/MagicMirror](https://github.com/MichMich/MagicMirror) - MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant.
* [janpaepke/ScrollMagic](https://github.com/janpaepke/ScrollMagic) - The javascript library for magical scroll interactions.
* [testing-library/react-testing-library](https://github.com/testing-library/react-testing-library) - 🐐 Simple and complete React DOM testing utilities that encourage good testing practices.
* [MithrilJS/mithril.js](https://github.com/MithrilJS/mithril.js) - A JavaScript Framework for Building Brilliant Applications
* [gionkunz/chartist-js](https://github.com/gionkunz/chartist-js) - Simple responsive charts
* [netlify/netlify-cms](https://github.com/netlify/netlify-cms) - A Git-based CMS for Static Site Generators
* [uxsolutions/bootstrap-datepicker](https://github.com/uxsolutions/bootstrap-datepicker) - A datepicker for twitter bootstrap (@twbs)
* [plotly/plotly.js](https://github.com/plotly/plotly.js) - Open-source JavaScript charting library behind Plotly and Dash
* [gruntjs/grunt](https://github.com/gruntjs/grunt) - Grunt: The JavaScript Task Runner
* [qianguyihao/Web](https://github.com/qianguyihao/Web) - 前端入门到进阶，超详细的Web前端学习图文教程。从零开始学前端，做一名精致优雅的前端工程师。公众号「千古壹号」作者。
* [paperjs/paper.js](https://github.com/paperjs/paper.js) - The Swiss Army Knife of Vector Graphics Scripting – Scriptographer ported to JavaScript and the browser, using HTML5 Canvas. Created by @lehni & @puckey
* [rwaldron/johnny-five](https://github.com/rwaldron/johnny-five) - JavaScript Robotics and IoT programming framework, developed at Bocoup.
* [you-dont-need/You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) - List of JavaScript methods which you can use natively + ESLint Plugin
* [louischatriot/nedb](https://github.com/louischatriot/nedb) - The JavaScript Database, for Node.js, nw.js, electron and the browser
* [zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - Redux DevTools extension.
* [VerbalExpressions/JSVerbalExpressions](https://github.com/VerbalExpressions/JSVerbalExpressions) - JavaScript Regular expressions made easy
* [STRML/react-grid-layout](https://github.com/STRML/react-grid-layout) - A draggable and resizable grid layout with responsive breakpoints, for React.
* [PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) - a vue2.0 minimal admin template
* [kamranahmedse/driver.js](https://github.com/kamranahmedse/driver.js) - A light-weight, no-dependency, vanilla JavaScript engine to drive the user's focus across the page
* [sweetalert2/sweetalert2](https://github.com/sweetalert2/sweetalert2) - A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.
* [Automattic/wp-calypso](https://github.com/Automattic/wp-calypso) - The JavaScript and API powered WordPress.com
* [aurelia/framework](https://github.com/aurelia/framework) - The Aurelia 1 framework entry point, bringing together all the required sub-modules of Aurelia.
* [jwagner/smartcrop.js](https://github.com/jwagner/smartcrop.js) - Content aware image cropping
* [DrkSephy/es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet) - ES2015 [ES6] cheatsheet containing tips, tricks, best practices and code snippets
* [jaredreich/pell](https://github.com/jaredreich/pell) - 📝 the simplest and smallest WYSIWYG text editor for web, with no dependencies
* [karma-runner/karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript
* [NodeBB/NodeBB](https://github.com/NodeBB/NodeBB) - Node.js based forum software built for the modern web
* [shelljs/shelljs](https://github.com/shelljs/shelljs) - :shell: Portable Unix shell commands for Node.js
* [BrainJS/brain.js](https://github.com/BrainJS/brain.js) - 🤖 Neural networks in JavaScript
* [greensock/GSAP](https://github.com/greensock/GSAP) - GreenSock's GSAP JavaScript animation library (including Draggable).
* [fingerprintjs/fingerprintjs2](https://github.com/fingerprintjs/fingerprintjs2) - Modern & flexible browser fingerprinting library
* [krisk/Fuse](https://github.com/krisk/Fuse) - Lightweight fuzzy-search, in JavaScript
* [mishoo/UglifyJS](https://github.com/mishoo/UglifyJS) -  JavaScript parser / mangler / compressor / beautifier toolkit
* [jsdoc/jsdoc](https://github.com/jsdoc/jsdoc) - An API documentation generator for JavaScript.
* [showdownjs/showdown](https://github.com/showdownjs/showdown) - A bidirectional Markdown to HTML to Markdown converter written in Javascript
* [jquery/jquery-ui](https://github.com/jquery/jquery-ui) - The official jQuery user interface library.
* [DmitryBaranovskiy/raphael](https://github.com/DmitryBaranovskiy/raphael) - JavaScript Vector Library
* [browserstate/history.js](https://github.com/browserstate/history.js) - History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality.
* [reactioncommerce/reaction](https://github.com/reactioncommerce/reaction) - Reaction is an API-first, headless commerce platform built using Node.js, React, GraphQL. Deployed via Docker and Kubernetes.
* [oliver-moran/jimp](https://github.com/oliver-moran/jimp) - An image processing library written entirely in JavaScript for Node, with zero external or native dependencies.
* [CodeSeven/toastr](https://github.com/CodeSeven/toastr) - Simple javascript toast notifications
* [stephentian/33-js-concepts](https://github.com/stephentian/33-js-concepts) - :scroll: 每个 JavaScript 工程师都应懂的33个概念 @leonardomso
* [node-red/node-red](https://github.com/node-red/node-red) - Low-code programming for event-driven applications
* [nightwatchjs/nightwatch](https://github.com/nightwatchjs/nightwatch) - End-to-end testing framework written in Node.js and using the Webdriver API
* [liabru/matter-js](https://github.com/liabru/matter-js) - a 2D rigid body physics engine for the web ▲● ■
* [ccampbell/mousetrap](https://github.com/ccampbell/mousetrap) - Simple library for handling keyboard shortcuts in Javascript
* [gpujs/gpu.js](https://github.com/gpujs/gpu.js) - GPU Accelerated JavaScript
* [josdejong/mathjs](https://github.com/josdejong/mathjs) - An extensive math library for JavaScript and Node.js
* [wangfupeng1988/wangEditor](https://github.com/wangfupeng1988/wangEditor) - wangEditor —— 轻量级web富文本框
* [karpathy/convnetjs](https://github.com/karpathy/convnetjs) - Deep Learning in Javascript. Train Convolutional Neural Networks (or ordinary ones) in your browser.
* [reactide/reactide](https://github.com/reactide/reactide) - Reactide is the first dedicated IDE for React web application development.
* [pandao/editor.md](https://github.com/pandao/editor.md) - The open source embeddable online markdown editor (component).
* [pagekit/vue-resource](https://github.com/pagekit/vue-resource) - The HTTP client for Vue.js
* [copy/v86](https://github.com/copy/v86) - x86 virtualization in JavaScript, running in your browser and NodeJS
* [jquery-validation/jquery-validation](https://github.com/jquery-validation/jquery-validation) - jQuery Validation Plugin library sources
* [ai/nanoid](https://github.com/ai/nanoid) - A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript
* [alpinejs/alpine](https://github.com/alpinejs/alpine) - A rugged, minimal framework for composing JavaScript behavior in your markup.
* [knockout/knockout](https://github.com/knockout/knockout) - Knockout makes it easier to create rich, responsive UIs with JavaScript
* [mattboldt/typed.js](https://github.com/mattboldt/typed.js) - A JavaScript Typing Animation Library
* [javve/list.js](https://github.com/javve/list.js) - The perfect library for adding search, sort, filters and flexibility to tables, lists and various HTML elements. Built to be invisible and work on existing HTML.
* [myliang/x-spreadsheet](https://github.com/myliang/x-spreadsheet) - A web-based JavaScript（canvas） spreadsheet
* [nock/nock](https://github.com/nock/nock) - HTTP server mocking and expectations library for Node.js
* [dangrossman/daterangepicker](https://github.com/dangrossman/daterangepicker) - JavaScript Date Range, Date and Time Picker Component
* [Netflix/falcor](https://github.com/Netflix/falcor) - A JavaScript library for efficient data fetching
* [marko-js/marko](https://github.com/marko-js/marko) - A declarative, HTML-based language that makes building web apps fun
* [uuidjs/uuid](https://github.com/uuidjs/uuid) - Generate RFC-compliant UUIDs in JavaScript
* [summernote/summernote](https://github.com/summernote/summernote) - Super simple WYSIWYG editor
* [codesandbox/codesandbox-client](https://github.com/codesandbox/codesandbox-client) - An online IDE for rapid web development
* [brix/crypto-js](https://github.com/brix/crypto-js) - JavaScript library of crypto standards.
* [pqina/filepond](https://github.com/pqina/filepond) - 🌊 A flexible and fun JavaScript file upload library
* [outline/outline](https://github.com/outline/outline) - The fastest wiki and knowledge base for growing teams. Beautiful, feature rich, and markdown compatible.
* [commitizen/cz-cli](https://github.com/commitizen/cz-cli) - The commitizen command line utility. #BlackLivesMatter
* [reactstrap/reactstrap](https://github.com/reactstrap/reactstrap) - Simple React Bootstrap 4 components
* [GoogleChrome/workbox](https://github.com/GoogleChrome/workbox) - 📦 Workbox: JavaScript libraries for Progressive Web Apps
* [jaredpalmer/razzle](https://github.com/jaredpalmer/razzle) - ✨ Create server-rendered universal JavaScript applications with no configuration
* [apexcharts/apexcharts.js](https://github.com/apexcharts/apexcharts.js) - 📊 Interactive JavaScript Charts built on SVG
* [FredrikNoren/ungit](https://github.com/FredrikNoren/ungit) - The easiest way to use git. On any platform. Anywhere.
* [jacomyal/sigma.js](https://github.com/jacomyal/sigma.js) - A JavaScript library dedicated to graph drawing
* [aui/art-template](https://github.com/aui/art-template) - High performance JavaScript templating engine
* [keeweb/keeweb](https://github.com/keeweb/keeweb) - Free cross-platform password manager compatible with KeePass
* [davidshimjs/qrcodejs](https://github.com/davidshimjs/qrcodejs) - Cross-browser QRCode generator for javascript
* [ethereum/web3.js](https://github.com/ethereum/web3.js) - Ethereum JavaScript API
* [webrtc/samples](https://github.com/webrtc/samples) - WebRTC Web demos and samples
* [snapappointments/bootstrap-select](https://github.com/snapappointments/bootstrap-select) - :rocket: The jQuery plugin that brings select elements into the 21st century with intuitive multiselection, searching, and much more.
* [ksky521/nodeppt](https://github.com/ksky521/nodeppt) - This is probably the best web presentation tool so far!
* [guillaumepotier/Parsley.js](https://github.com/guillaumepotier/Parsley.js) - Validate your forms, frontend, without writing a single line of javascript
* [visionmedia/debug](https://github.com/visionmedia/debug) - A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers
* [mholt/PapaParse](https://github.com/mholt/PapaParse) - Fast and powerful CSV (delimited text) parser that gracefully handles large files and malformed input
* [uncss/uncss](https://github.com/uncss/uncss) - Remove unused styles from CSS
* [lokesh/color-thief](https://github.com/lokesh/color-thief) - Grab the color palette from an image using just Javascript.  Works in the browser and in Node.
* [trufflesuite/truffle](https://github.com/trufflesuite/truffle) - A tool for developing smart contracts. Crafted with the finest cacaos.
* [senchalabs/connect](https://github.com/senchalabs/connect) - Connect is a middleware layer for Node.js
* [NUKnightLab/TimelineJS](https://github.com/NUKnightLab/TimelineJS) - TimelineJS: A Storytelling Timeline built in JavaScript.
* [Netflix/pollyjs](https://github.com/Netflix/pollyjs) - Record, Replay, and Stub HTTP Interactions.
* [Laverna/laverna](https://github.com/Laverna/laverna) - Laverna is a JavaScript note taking application with Markdown editor and encryption support. Consider it like open source alternative to Evernote.
* [angular/protractor](https://github.com/angular/protractor) - E2E test framework for Angular apps
* [olistic/warriorjs](https://github.com/olistic/warriorjs) - 🏰 An exciting game of programming and Artificial Intelligence
* [goldbergyoni/javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices) - 📗🌐 🚢 Comprehensive and exhaustive JavaScript & Node.js testing best practices (July 2020)
* [mozilla/BrowserQuest](https://github.com/mozilla/BrowserQuest) - A HTML5/JavaScript multiplayer game experiment
* [cube-js/cube.js](https://github.com/cube-js/cube.js) - 📊 Cube.js - Open Source Analytics Framework
* [bpampuch/pdfmake](https://github.com/bpampuch/pdfmake) - Client/server side PDF printing in pure JavaScript
* [jshint/jshint](https://github.com/jshint/jshint) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code
* [clauderic/react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) - A set of higher-order components to turn any list into an animated, accessible and touch-friendly sortable list✌️
* [tuupola/lazyload](https://github.com/tuupola/lazyload) - Vanilla JavaScript plugin for lazyloading images
* [nhn/tui.calendar](https://github.com/nhn/tui.calendar) - 🍞📅A JavaScript calendar that has everything you need.
* [adamwdraper/Numeral-js](https://github.com/adamwdraper/Numeral-js) - A javascript library for formatting and manipulating numbers.
* [desandro/imagesloaded](https://github.com/desandro/imagesloaded) - :camera: JavaScript is all like "You images done yet or what?"
* [fantasyland/fantasy-land](https://github.com/fantasyland/fantasy-land) - Specification for interoperability of common algebraic structures in JavaScript
* [microsoft/ChakraCore](https://github.com/microsoft/ChakraCore) - ChakraCore is the core part of the Chakra JavaScript engine that powers Microsoft Edge
* [didi/cube-ui](https://github.com/didi/cube-ui) - :large_orange_diamond: A fantastic mobile ui lib implement by Vue
* [Nickersoft/push.js](https://github.com/Nickersoft/push.js) - The world's most versatile desktop notifications framework :earth_americas:
* [douglascrockford/JSON-js](https://github.com/douglascrockford/JSON-js) - JSON in JavaScript
* [svgdotjs/svg.js](https://github.com/svgdotjs/svg.js) - The lightweight library for manipulating and animating SVG
* [video-dev/hls.js](https://github.com/video-dev/hls.js) - JavaScript HLS client using Media Source Extension
* [mishoo/UglifyJS-old](https://github.com/mishoo/UglifyJS-old) - JavaScript parser / mangler / compressor / beautifier library for NodeJS
* [ansible/awx](https://github.com/ansible/awx) - AWX Project
* [FineUploader/fine-uploader](https://github.com/FineUploader/fine-uploader) - Multiple file upload plugin with image previews, drag and drop, progress bars. S3 and Azure support, image scaling, form support, chunking, resume, pause, and tons of other features.
* [brave/browser-laptop](https://github.com/brave/browser-laptop) - [DEPRECATED] Please see https://github.com/brave/brave-browser for the current version of Brave
* [sinonjs/sinon](https://github.com/sinonjs/sinon) - Test spies, stubs and mocks for JavaScript.
* [google/traceur-compiler](https://github.com/google/traceur-compiler) - Traceur is a JavaScript.next-to-JavaScript-of-today compiler
* [mdbootstrap/perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar) - Minimalistic but perfect custom scrollbar plugin
* [harthur/brain](https://github.com/harthur/brain) - [UNMAINTAINED] Simple feed-forward neural network in JavaScript
* [OnsenUI/OnsenUI](https://github.com/OnsenUI/OnsenUI) - Mobile app development framework and SDK using HTML5 and JavaScript. Create beautiful and performant cross-platform mobile apps. Based on Web Components, and provides bindings for Angular 1, 2, React and Vue.js.
* [30-seconds/30-seconds-of-interviews](https://github.com/30-seconds/30-seconds-of-interviews) - A curated collection of common interview questions to help you prepare for your next interview.
* [uBlock-LLC/uBlock](https://github.com/uBlock-LLC/uBlock) - uBlock: a fast, lightweight, and lean blocker for Chrome, Firefox, and Safari.
* [invertase/react-native-firebase](https://github.com/invertase/react-native-firebase) - 🔥 A well-tested feature-rich modular Firebase implementation for React Native. Supports both iOS & Android platforms for all Firebase services.
* [easy-mock/easy-mock](https://github.com/easy-mock/easy-mock) - A persistent service that generates mock data quickly and provids visualization view.
* [sparksuite/simplemde-markdown-editor](https://github.com/sparksuite/simplemde-markdown-editor) - A simple, beautiful, and embeddable JavaScript Markdown editor. Delightful editing for beginners and experts alike. Features built-in autosaving and spell checking.
* [fengyuanchen/cropperjs](https://github.com/fengyuanchen/cropperjs) - JavaScript image cropper.
* [webtorrent/webtorrent-desktop](https://github.com/webtorrent/webtorrent-desktop) - ❤️ Streaming torrent app for Mac, Windows, and Linux
* [text-mask/text-mask](https://github.com/text-mask/text-mask) - Input mask for React, Angular, Ember, Vue, & plain JavaScript
* [HabitRPG/habitica](https://github.com/HabitRPG/habitica) - A habit tracker app which treats your goals like a Role Playing Game.
* [ueberdosis/tiptap](https://github.com/ueberdosis/tiptap) - A renderless rich-text editor for Vue.js
* [evolus/pencil](https://github.com/evolus/pencil) - The Pencil Project's unique mission is to build a free and opensource tool for making diagrams and GUI prototyping that everyone can use.
* [CreateJS/EaselJS](https://github.com/CreateJS/EaselJS) - The Easel Javascript library provides a full, hierarchical display list, a core interaction model, and helper classes to make working with the HTML5 Canvas element much easier.
* [jawil/blog](https://github.com/jawil/blog) - Too young, too simple. Sometimes, naive & stupid 🐌
* [tweenjs/tween.js](https://github.com/tweenjs/tween.js) - Javascript tweening engine
* [evilstreak/markdown-js](https://github.com/evilstreak/markdown-js) - A Markdown parser for javascript
* [GeekyAnts/vue-native-core](https://github.com/GeekyAnts/vue-native-core) - Vue Native is a framework to build cross platform native mobile apps using JavaScript
* [casperjs/casperjs](https://github.com/casperjs/casperjs) - CasperJS is no longer actively maintained. Navigation scripting and testing utility for PhantomJS and SlimerJS
* [sudheerj/reactjs-interview-questions](https://github.com/sudheerj/reactjs-interview-questions) - List of top 500 ReactJS Interview Questions & Answers....Coding exercise questions are coming soon!!
* [jakesgordon/javascript-state-machine](https://github.com/jakesgordon/javascript-state-machine) - A javascript finite state machine library
* [gka/chroma.js](https://github.com/gka/chroma.js) - JavaScript library for all kinds of color manipulations
* [kimmobrunfeldt/progressbar.js](https://github.com/kimmobrunfeldt/progressbar.js) - Responsive and slick progress bars
* [sockjs/sockjs-client](https://github.com/sockjs/sockjs-client) - WebSocket emulation - Javascript client
* [openlayers/openlayers](https://github.com/openlayers/openlayers) - OpenLayers
* [electron/electron-packager](https://github.com/electron/electron-packager) - Customize and package your Electron app with OS-specific bundles (.app, .exe, etc.) via JS or CLI
* [humanwhocodes/computer-science-in-javascript](https://github.com/humanwhocodes/computer-science-in-javascript) - Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript.
* [bradtraversy/vanillawebprojects](https://github.com/bradtraversy/vanillawebprojects) - Mini projects built with HTML5, CSS & JavaScript. No frameworks or libraries
* [marionettejs/backbone.marionette](https://github.com/marionettejs/backbone.marionette) - The Backbone Framework
* [alexfoxy/lax.js](https://github.com/alexfoxy/lax.js) - Simple & light weight (3kb minified & zipped) vanilla javascript plugin to create smooth & beautiful animations when you scrolllll! Harness the power of the most intuitive interaction and make your websites come alive!
* [jprichardson/node-fs-extra](https://github.com/jprichardson/node-fs-extra) - Node.js: extra methods for the fs object like copy(), remove(), mkdirs()
* [bramp/js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams) - Draws simple SVG sequence diagrams from textual representation of the diagram
* [olivernn/lunr.js](https://github.com/olivernn/lunr.js) - A bit like Solr, but much smaller and not as bright
* [Pikaday/Pikaday](https://github.com/Pikaday/Pikaday) - A refreshing JavaScript Datepicker — lightweight, no dependencies, modular CSS
* [chaijs/chai](https://github.com/chaijs/chai) - BDD / TDD assertion framework for node.js and the browser that can be paired with any testing framework.
* [adrai/flowchart.js](https://github.com/adrai/flowchart.js) - Draws simple SVG flow chart diagrams from textual representation of the diagram
* [es-shims/es5-shim](https://github.com/es-shims/es5-shim) - ECMAScript 5 compatibility shims for legacy (and modern) JavaScript engines
* [beautify-web/js-beautify](https://github.com/beautify-web/js-beautify) - Beautifier for javascript
* [protobufjs/protobuf.js](https://github.com/protobufjs/protobuf.js) - Protocol Buffers for JavaScript (& TypeScript).
* [sql-js/sql.js](https://github.com/sql-js/sql.js) - A javascript library to run SQLite on the web.
* [cytoscape/cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Graph theory (network) library for visualisation and analysis
* [alyssaxuu/flowy](https://github.com/alyssaxuu/flowy) - The minimal javascript library to create flowcharts ✨
* [single-spa/single-spa](https://github.com/single-spa/single-spa) - The router for easy microfrontends
* [rethinkdb/horizon](https://github.com/rethinkdb/horizon) - Horizon is a realtime, open-source backend for JavaScript apps.
* [jonobr1/two.js](https://github.com/jonobr1/two.js) - A renderer agnostic two-dimensional drawing api for the web.
* [sbstjn/timesheet.js](https://github.com/sbstjn/timesheet.js) - JavaScript library for HTML5 & CSS3 time sheets
* [novnc/noVNC](https://github.com/novnc/noVNC) - VNC client web application
* [needim/noty](https://github.com/needim/noty) - Dependency-free notification library that makes it easy to create alert - success - error - warning - information - confirmation messages as an alternative the standard alert dialog.
* [rebassjs/rebass](https://github.com/rebassjs/rebass) - :atom_symbol: React primitive UI components built with styled-system.
* [brunch/brunch](https://github.com/brunch/brunch) - :fork_and_knife: Web applications made easy. Since 2011.
* [mleibman/SlickGrid](https://github.com/mleibman/SlickGrid) - A lightning fast JavaScript grid/spreadsheet
* [zhukov/webogram](https://github.com/zhukov/webogram) - Telegram web application, GPL v3
* [flightjs/flight](https://github.com/flightjs/flight) - A component-based, event-driven JavaScript framework from Twitter
* [zeroclipboard/zeroclipboard](https://github.com/zeroclipboard/zeroclipboard) - The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* [alibaba/rax](https://github.com/alibaba/rax) - 🐰 Rax is a progressive React framework for building universal application. https://rax.js.org
* [mrdoob/stats.js](https://github.com/mrdoob/stats.js) - JavaScript Performance Monitor
* [mayswind/AriaNg](https://github.com/mayswind/AriaNg) - AriaNg, a modern web frontend making aria2 easier to use.
* [umdjs/umd](https://github.com/umdjs/umd) - UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
* [grommet/grommet](https://github.com/grommet/grommet) - a react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package
* [ReactTraining/history](https://github.com/ReactTraining/history) - Manage session history with JavaScript
* [yannickcr/eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
* [11ty/eleventy](https://github.com/11ty/eleventy) - A simpler static site generator. An alternative to Jekyll. Transforms a directory of templates (of varying types) into HTML.
* [shutterstock/rickshaw](https://github.com/shutterstock/rickshaw) -  JavaScript toolkit for creating interactive real-time graphs
* [discordjs/discord.js](https://github.com/discordjs/discord.js) - A powerful JavaScript library for interacting with the Discord API
* [ag-grid/ag-grid](https://github.com/ag-grid/ag-grid) - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
* [nextapps-de/flexsearch](https://github.com/nextapps-de/flexsearch) - Next-Generation full text search library for Browser and Node.js
* [google/lovefield](https://github.com/google/lovefield) - Lovefield is a relational database for web apps. Written in JavaScript, works cross-browser. Provides SQL-like APIs that are fast, safe, and easy to use.
* [foliojs/pdfkit](https://github.com/foliojs/pdfkit) - A JavaScript PDF generation library for Node and the browser
* [bitwiseshiftleft/sjcl](https://github.com/bitwiseshiftleft/sjcl) - Stanford Javascript Crypto Library
* [ApoorvSaxena/lozad.js](https://github.com/ApoorvSaxena/lozad.js) - 🔥  Highly performant, light ~1kb and configurable lazy loader in pure JS with no dependencies for responsive images, iframes and more
* [acornjs/acorn](https://github.com/acornjs/acorn) - A small, fast, JavaScript-based JavaScript parser
* [tsayen/dom-to-image](https://github.com/tsayen/dom-to-image) - Generates an image from a DOM node using HTML5 canvas
* [mgechev/javascript-algorithms](https://github.com/mgechev/javascript-algorithms) - 💻 JavaScript implementation of different computer science algorithms.
* [piskelapp/piskel](https://github.com/piskelapp/piskel) - A simple web-based tool for Spriting and Pixel art.
* [styled-components/polished](https://github.com/styled-components/polished) - A lightweight toolset for writing styles in JavaScript ✨
* [mapbox/mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js) - Interactive, thoroughly customizable maps in the browser, powered by vector tiles and WebGL
* [auduno/clmtrackr](https://github.com/auduno/clmtrackr) - Javascript library for precise tracking of facial features via Constrained Local Models
* [chrisvfritz/vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate) - An ever-evolving, very opinionated architecture and dev environment for new Vue SPA projects using Vue CLI.
* [sindresorhus/fkill-cli](https://github.com/sindresorhus/fkill-cli) - Fabulously kill processes. Cross-platform.
* [angular-fullstack/generator-angular-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack) - Yeoman generator for an Angular app with an Express server
* [jaredreich/notie](https://github.com/jaredreich/notie) - 🔔 a clean and simple notification, input, and selection suite for javascript, with no dependencies
* [aws/aws-sdk-js](https://github.com/aws/aws-sdk-js) - AWS SDK for JavaScript in the browser and Node.js
* [Stuk/jszip](https://github.com/Stuk/jszip) - Create, read and edit .zip files with Javascript
* [jakiestfu/Snap.js](https://github.com/jakiestfu/Snap.js) - A Library for creating beautiful mobile shelfs in Javascript (Facebook and Path style side menus)
* [CesiumGS/cesium](https://github.com/CesiumGS/cesium) - An open-source JavaScript library for world-class 3D globes and maps :earth_americas:
* [medialize/URI.js](https://github.com/medialize/URI.js) - Javascript URL mutation library
* [api-platform/api-platform](https://github.com/api-platform/api-platform) - REST and GraphQL framework to build modern API-driven projects (server-side and client-side)
* [bookshelf/bookshelf](https://github.com/bookshelf/bookshelf) - A simple Node.js ORM for PostgreSQL, MySQL and SQLite3 built on top of Knex.js
* [webdriverio/webdriverio](https://github.com/webdriverio/webdriverio) - Next-gen browser and mobile automation test framework for Node.js
* [cssinjs/jss](https://github.com/cssinjs/jss) - JSS is an authoring tool for CSS which uses JavaScript as a host language.
* [expressjs/morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js
* [flot/flot](https://github.com/flot/flot) - Attractive JavaScript charts for jQuery
* [Bogdan-Lyashenko/js-code-to-svg-flowchart](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart) - js2flowchart - a visualization library to convert any JavaScript code into beautiful SVG flowchart. Learn other’s code. Design your code. Refactor code. Document code. Explain code.
* [riccardoscalco/textures](https://github.com/riccardoscalco/textures) - Textures.js is a JavaScript library for creating SVG patterns
* [kazupon/vue-i18n](https://github.com/kazupon/vue-i18n) - :globe_with_meridians: Internationalization plugin for Vue.js
* [SocketCluster/socketcluster](https://github.com/SocketCluster/socketcluster) - Highly scalable realtime framework
* [prerender/prerender](https://github.com/prerender/prerender) - Node server that uses Headless Chrome to render a javascript-rendered page as HTML. To be used in conjunction with prerender middleware.
* [mqttjs/MQTT.js](https://github.com/mqttjs/MQTT.js) - The MQTT client for Node.js and the browser
* [reactjs/react-modal](https://github.com/reactjs/react-modal) - Accessible modal dialog component for React
* [airbnb/hypernova](https://github.com/airbnb/hypernova) - A service for server-side rendering your JavaScript views
* [remoteinterview/zero](https://github.com/remoteinterview/zero) - Zero is a web server to simplify web development.
* [verlok/vanilla-lazyload](https://github.com/verlok/vanilla-lazyload) - LazyLoad is a lightweight, flexible script that speeds up your website by deferring the loading of your below-the-fold images, backgrounds, videos, iframes and scripts to when they will enter the viewport. Written in plain "vanilla" JavaScript, it leverages IntersectionObserver, supports responsive images and enables native lazy loading.
* [playcanvas/engine](https://github.com/playcanvas/engine) - Fast and lightweight WebGL game engine
* [cure53/DOMPurify](https://github.com/cure53/DOMPurify) - DOMPurify - a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG. DOMPurify works with a secure default, but offers a lot of configurability and hooks. Demo:
* [flatiron/director](https://github.com/flatiron/director) - a tiny and isomorphic URL router for JavaScript
* [tehnokv/picojs](https://github.com/tehnokv/picojs) - A face detection library in 200 lines of JavaScript
* [glidejs/glide](https://github.com/glidejs/glide) - A dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more
* [dfahlander/Dexie.js](https://github.com/dfahlander/Dexie.js) - A Minimalistic Wrapper for IndexedDB
* [bda-research/node-crawler](https://github.com/bda-research/node-crawler) - Web Crawler/Spider for NodeJS + server-side jQuery ;-)
* [bendc/animateplus](https://github.com/bendc/animateplus) - A+ animation module for the modern web
* [facebook/jscodeshift](https://github.com/facebook/jscodeshift) - A JavaScript codemod toolkit.
* [ljharb/qs](https://github.com/ljharb/qs) - A querystring parser with nesting support
* [jwilber/roughViz](https://github.com/jwilber/roughViz) - Reusable JavaScript library for creating sketchy/hand-drawn styled charts in the browser.
* [Turfjs/turf](https://github.com/Turfjs/turf) - A modular geospatial engine written in JavaScript
* [ljianshu/Blog](https://github.com/ljianshu/Blog) - 关注基础知识，打造优质前端博客，公众号[前端工匠]的作者
* [MoOx/postcss-cssnext](https://github.com/MoOx/postcss-cssnext) - `postcss-cssnext` has been deprecated in favor of `postcss-preset-env`.
* [techfort/LokiJS](https://github.com/techfort/LokiJS) - javascript embeddable / in-memory database
* [moxiecode/plupload](https://github.com/moxiecode/plupload) - Plupload is JavaScript API for building file uploaders. It supports multiple file selection, file filtering, chunked upload, client side image downsizing and when necessary can fallback to alternative runtimes, like Flash and Silverlight.
* [sindresorhus/np](https://github.com/sindresorhus/np) - A better `npm publish`
* [os-js/OS.js](https://github.com/os-js/OS.js) - OS.js - JavaScript Web Desktop Platform
* [angular-ui/ui-grid](https://github.com/angular-ui/ui-grid) - UI Grid: an Angular Data Grid
* [shentao/vue-multiselect](https://github.com/shentao/vue-multiselect) - Universal select/multiselect/tagging component for Vue.js
* [garris/BackstopJS](https://github.com/garris/BackstopJS) - Catch CSS curve balls.
* [webslides/WebSlides](https://github.com/webslides/WebSlides) - Create HTML presentations in seconds —
* [entropic-dev/entropic](https://github.com/entropic-dev/entropic) - 🦝 :package: a package registry for anything, but mostly javascript 🦝 🦝 🦝
* [lebab/lebab](https://github.com/lebab/lebab) - Turn your ES5 code into readable ES6. Lebab does the opposite of what Babel does.
* [amejiarosario/dsa.js-data-structures-algorithms-javascript](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript) - 🥞Data Structures and Algorithms explained and implemented in JavaScript
* [GoogleChromeLabs/sw-precache](https://github.com/GoogleChromeLabs/sw-precache) - [Deprecated] A node module to generate service worker code that will precache specific resources so they work offline.
* [davatron5000/Lettering.js](https://github.com/davatron5000/Lettering.js) - A lightweight, easy to use Javascript <span> injector for radical Web Typography
* [rtfeldman/seamless-immutable](https://github.com/rtfeldman/seamless-immutable) - Immutable data structures for JavaScript which are backwards-compatible with normal JS Arrays and Objects.
* [aemkei/jsfuck](https://github.com/aemkei/jsfuck) - Write any JavaScript with 6 Characters: []()!+
* [pa7/heatmap.js](https://github.com/pa7/heatmap.js) - 🔥 JavaScript Library for HTML5 canvas based heatmaps
* [vuelidate/vuelidate](https://github.com/vuelidate/vuelidate) - Simple, lightweight model-based validation for Vue.js
* [konvajs/konva](https://github.com/konvajs/konva) - Konva.js is an HTML5 Canvas JavaScript framework that extends the 2d context by enabling canvas interactivity for desktop and mobile applications.
* [chancejs/chancejs](https://github.com/chancejs/chancejs) - Chance - Random generator helper for JavaScript
* [syntaxhighlighter/syntaxhighlighter](https://github.com/syntaxhighlighter/syntaxhighlighter) - SyntaxHighlighter is a fully functional self-contained code syntax highlighter developed in JavaScript.
* [daniel-lundin/snabbt.js](https://github.com/daniel-lundin/snabbt.js) - Fast animations with javascript and CSS transforms
* [NervJS/nerv](https://github.com/NervJS/nerv) - A blazing fast React alternative, compatible with IE8 and React 16.
* [xojs/xo](https://github.com/xojs/xo) - ❤️ JavaScript linter with great defaults
* [fengyuanchen/viewerjs](https://github.com/fengyuanchen/viewerjs) - JavaScript image viewer.
* [i18next/i18next](https://github.com/i18next/i18next) -  i18next: learn once - translate everywhere
* [agershun/alasql](https://github.com/agershun/alasql) - AlaSQL.js - JavaScript SQL database for browser and Node.js. Handles both traditional relational tables and nested JSON data (NoSQL). Export, store, and import data from localStorage, IndexedDB, or Excel.
* [documentationjs/documentation](https://github.com/documentationjs/documentation) - :book: documentation for modern JavaScript
* [insin/nwb](https://github.com/insin/nwb) - A toolkit for React, Preact, Inferno & vanilla JS apps, React libraries and other npm modules for the web, with no configuration (until you need it)
* [Jermolene/TiddlyWiki5](https://github.com/Jermolene/TiddlyWiki5) - A self-contained JavaScript wiki for the browser, Node.js, AWS Lambda etc.
* [cockpit-project/cockpit](https://github.com/cockpit-project/cockpit) - There's code a goin' on
* [1j01/jspaint](https://github.com/1j01/jspaint) - 🎨 Classic MS Paint, ＲＥＶＩＶＥＤ + ✨Extras
* [Khan/aphrodite](https://github.com/Khan/aphrodite) - Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation
* [jscs-dev/node-jscs](https://github.com/jscs-dev/node-jscs) - :arrow_heading_up: JavaScript Code Style checker (unmaintained)
* [cferdinandi/smooth-scroll](https://github.com/cferdinandi/smooth-scroll) - A lightweight script to animate scrolling to anchor links.
* [shipitjs/shipit](https://github.com/shipitjs/shipit) - Universal automation and deployment tool ⛵️
* [jquery-form/form](https://github.com/jquery-form/form) - jQuery Form Plugin
* [egoist/poi](https://github.com/egoist/poi) - ⚡A zero-config bundler for JavaScript applications.
* [expressjs/session](https://github.com/expressjs/session) - Simple session middleware for Express
* [jackocnr/intl-tel-input](https://github.com/jackocnr/intl-tel-input) - A JavaScript plugin for entering and validating international telephone numbers
* [Hacker0x01/react-datepicker](https://github.com/Hacker0x01/react-datepicker) - A simple and reusable datepicker component for React
* [elasticsearch-dump/elasticsearch-dump](https://github.com/elasticsearch-dump/elasticsearch-dump) - Import and export tools for elasticsearch
* [kpdecker/jsdiff](https://github.com/kpdecker/jsdiff) - A javascript text differencing implementation.
* [kbrsh/moon](https://github.com/kbrsh/moon) - 🌙 The minimal & fast library for functional user interfaces
* [tommoor/tinycon](https://github.com/tommoor/tinycon) - A small library for manipulating the favicon, in particular adding alert bubbles and changing images.
* [paulhodel/jexcel](https://github.com/paulhodel/jexcel) - jExcel is a lightweight vanilla javascript plugin to create amazing web-based interactive tables and spreadsheets compatible with Excel or any other spreadsheet software.
* [isomorphic-git/isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - A pure JavaScript implementation of git for node and browsers!
* [makeusabrew/bootbox](https://github.com/makeusabrew/bootbox) - Wrappers for JavaScript alert(), confirm() and other flexible dialogs using Twitter's bootstrap framework
* [square/cubism](https://github.com/square/cubism) - Cubism.js: A JavaScript library for time series visualization.
* [meanjs/mean](https://github.com/meanjs/mean) - MEAN.JS - Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js -
* [krakenjs/kraken-js](https://github.com/krakenjs/kraken-js) - An express-based Node.js web application bootstrapping module.
* [terser/terser](https://github.com/terser/terser) - 🗜 JavaScript parser, mangler and compressor toolkit for ES6+
* [reactjs/reactjs.org](https://github.com/reactjs/reactjs.org) - The React documentation website
* [phoboslab/jsmpeg](https://github.com/phoboslab/jsmpeg) - MPEG1 Video Decoder in JavaScript
* [jonschlinkert/remarkable](https://github.com/jonschlinkert/remarkable) - Markdown parser, done right. Commonmark support, extensions, syntax plugins, high speed - all in one. Gulp and metalsmith plugins available. Used by Facebook, Docusaurus and many others! Use https://github.com/breakdance/breakdance for HTML-to-markdown conversion. Use https://github.com/jonschlinkert/markdown-toc to generate a table of contents.
* [muhammederdem/vue-interactive-paycard](https://github.com/muhammederdem/vue-interactive-paycard) - Credit card form with smooth and sweet micro-interactions
* [dataarts/dat.gui](https://github.com/dataarts/dat.gui) - dat.gui is a lightweight controller library for JavaScript.
* [golden-layout/golden-layout](https://github.com/golden-layout/golden-layout) - A multi window layout manager for webapps
* [fabiospampinato/cash](https://github.com/fabiospampinato/cash) - An absurdly small jQuery alternative for modern browsers.
* [davidjbradshaw/iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer) - Keep same and cross domain iFrames sized to their content with support for window/content resizing, in page links, nesting and multiple iFrames
* [kartik-v/bootstrap-fileinput](https://github.com/kartik-v/bootstrap-fileinput) - An enhanced HTML 5 file input for Bootstrap 4.x./3.x with file preview, multiple selection, and more features.
* [faisalman/ua-parser-js](https://github.com/faisalman/ua-parser-js) - UAParser.js - JavaScript library to detect browser, engine, OS, CPU, and device type/model from userAgent string. Supports browser & node.js environment. Also available as jQuery/Zepto plugin, Bower/Meteor package, RequireJS/AMD module, & CLI tool.
* [mycolorway/simditor](https://github.com/mycolorway/simditor) - An Easy and Fast WYSIWYG Editor
* [transcranial/keras-js](https://github.com/transcranial/keras-js) - Run Keras models in the browser, with GPU support using WebGL
* [bfirsh/jsnes](https://github.com/bfirsh/jsnes) - A JavaScript NES emulator.
* [felixge/node-style-guide](https://github.com/felixge/node-style-guide) - A guide for styling your node.js / JavaScript code. Fork & adjust to your taste.
* [mde/ejs](https://github.com/mde/ejs) - Embedded JavaScript templates -- http://ejs.co
* [Soundnode/soundnode-app](https://github.com/Soundnode/soundnode-app) - Soundnode App is the Soundcloud for desktop. Built with Electron, Angular.js and Soundcloud API.
* [log4js-node/log4js-node](https://github.com/log4js-node/log4js-node) - A port of log4js to node.js
* [agentejo/cockpit](https://github.com/agentejo/cockpit) - Add content management functionality to any site - plug & play / headless / api-first CMS
* [nicholas-ochoa/OpenSC2K](https://github.com/nicholas-ochoa/OpenSC2K) - OpenSC2K - An Open Source remake of Sim City 2000 by Maxis
* [camwiegert/in-view](https://github.com/camwiegert/in-view) - Get notified when a DOM element enters or exits the viewport. :eyes:
* [NorthwoodsSoftware/GoJS](https://github.com/NorthwoodsSoftware/GoJS) - JavaScript diagramming library for interactive flowcharts, org charts, design tools, planning tools, visual languages.
* [expressjs/cors](https://github.com/expressjs/cors) - Node.js CORS middleware
* [ipfs/js-ipfs](https://github.com/ipfs/js-ipfs) - IPFS implementation in JavaScript
* [mikaelbr/node-notifier](https://github.com/mikaelbr/node-notifier) - A Node.js module for sending notifications on native Mac, Windows and Linux (or Growl as fallback)
* [nodeca/js-yaml](https://github.com/nodeca/js-yaml) - JavaScript YAML parser and dumper. Very fast.
* [nodegit/nodegit](https://github.com/nodegit/nodegit) - Native Node bindings to Git.
* [expressjs/body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
* [scottschiller/SoundManager2](https://github.com/scottschiller/SoundManager2) - A JavaScript Sound API supporting MP3, MPEG4 and HTML5 audio + RTMP, providing reliable cross-browser/platform audio control in as little as 12 KB. BSD licensed.
* [openexchangerates/accounting.js](https://github.com/openexchangerates/accounting.js) - A lightweight JavaScript library for number, money and currency formatting - fully localisable, zero dependencies.
* [olado/doT](https://github.com/olado/doT) - The fastest + concise javascript template engine for nodejs and browsers. Partials, custom delimiters and more.
* [visionmedia/move.js](https://github.com/visionmedia/move.js) - CSS3 backed JavaScript animation framework
* [MrSwitch/hello.js](https://github.com/MrSwitch/hello.js) - A Javascript RESTFUL API library for connecting with OAuth2 services, such as Google+ API, Facebook Graph and Windows Live Connect
* [leongersen/noUiSlider](https://github.com/leongersen/noUiSlider) - noUiSlider is a lightweight JavaScript range slider library with full multi-touch support. It fits wonderfully in responsive designs and has no dependencies.
* [travist/jsencrypt](https://github.com/travist/jsencrypt) - A Javascript library to perform OpenSSL RSA Encryption, Decryption, and Key Generation.
* [svaarala/duktape](https://github.com/svaarala/duktape) - Duktape - embeddable Javascript engine with a focus on portability and compact footprint
* [sarcadass/granim.js](https://github.com/sarcadass/granim.js) - Create fluid and interactive gradient animations with this small javascript library.
* [Countly/countly-server](https://github.com/Countly/countly-server) - Countly helps you get insights from your application. Available self-hosted or on private cloud.
* [serialport/node-serialport](https://github.com/serialport/node-serialport) - Access serial ports with JavaScript. Linux, OSX and Windows. Welcome your robotic JavaScript overlords. Better yet, program them!
* [lancedikson/bowser](https://github.com/lancedikson/bowser) - a browser detector
* [peterramsing/lost](https://github.com/peterramsing/lost) - LostGrid is a powerful grid system built in PostCSS that works with any preprocessor and even vanilla CSS.
* [openpgpjs/openpgpjs](https://github.com/openpgpjs/openpgpjs) - OpenPGP implementation for JavaScript
* [es-analysis/plato](https://github.com/es-analysis/plato) - JavaScript source code visualization, static analysis, and complexity tool
* [globalizejs/globalize](https://github.com/globalizejs/globalize) - A JavaScript library for internationalization and localization that leverages the official Unicode CLDR JSON data
* [timuric/Content-generator-sketch-plugin](https://github.com/timuric/Content-generator-sketch-plugin) - Sketch app plugin for generating dummy data such as avatars, names, photos, geo data etc
* [angular-translate/angular-translate](https://github.com/angular-translate/angular-translate) - Translating your AngularJS 1.x apps
* [sweet-js/sweet-core](https://github.com/sweet-js/sweet-core) - Sweeten your JavaScript.
* [jakiestfu/Medium.js](https://github.com/jakiestfu/Medium.js) - A tiny JavaScript library for making contenteditable beautiful (Like Medium's editor)
* [andrewplummer/Sugar](https://github.com/andrewplummer/Sugar) - A Javascript library for working with native objects.
* [ballercat/walt](https://github.com/ballercat/walt) - :zap: Walt is a JavaScript-like syntax for WebAssembly text format :zap:
* [muicss/mui](https://github.com/muicss/mui) - Lightweight CSS framework
* [jpuri/react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) - A Wysiwyg editor build on top of ReactJS and DraftJS. https://jpuri.github.io/react-draft-wysiwyg
* [jaredpalmer/backpack](https://github.com/jaredpalmer/backpack) - 🎒 Backpack is a minimalistic build system for Node.js projects.
* [jaywcjlove/hotkeys](https://github.com/jaywcjlove/hotkeys) - ➷ A robust Javascript library for capturing keyboard input. It has no dependencies.
* [fabien-d/alertify.js](https://github.com/fabien-d/alertify.js) - JavaScript Alert/Notification System
* [NekR/offline-plugin](https://github.com/NekR/offline-plugin) - Offline plugin  (ServiceWorker, AppCache) for webpack (https://webpack.js.org/)
* [jonathantneal/flexibility](https://github.com/jonathantneal/flexibility) - A JavaScript polyfill for Flexbox
* [tj/ejs](https://github.com/tj/ejs) - Embedded JavaScript templates for node
* [janhuenermann/neurojs](https://github.com/janhuenermann/neurojs) - A JavaScript deep learning and reinforcement learning library.
* [OscarGodson/EpicEditor](https://github.com/OscarGodson/EpicEditor) - EpicEditor is an embeddable JavaScript Markdown editor with split fullscreen editing, live previewing, automatic draft saving, offline support, and more. For developers, it offers a robust API, can be easily themed, and allows you to swap out the bundled Markdown parser with anything you throw at it.
* [istanbuljs/nyc](https://github.com/istanbuljs/nyc) - the Istanbul command line interface
* [feross/simple-peer](https://github.com/feross/simple-peer) - 📡 Simple WebRTC video, voice, and data channels
* [kangax/html-minifier](https://github.com/kangax/html-minifier) - Javascript-based HTML compressor/minifier (with Node.js support)
* [baidu/san](https://github.com/baidu/san) - A fast, portable, flexible JavaScript component framework
* [google/shaka-player](https://github.com/google/shaka-player) - JavaScript player library / DASH & HLS client / MSE-EME player
* [igorescobar/jQuery-Mask-Plugin](https://github.com/igorescobar/jQuery-Mask-Plugin) - A jQuery Plugin to make masks on form fields and HTML elements.
* [nadbm/react-datasheet](https://github.com/nadbm/react-datasheet) - Excel-like data grid (table) component for React
* [tapmodo/Jcrop](https://github.com/tapmodo/Jcrop) - Jcrop - The Javascript Image Cropping Engine
* [octokit/rest.js](https://github.com/octokit/rest.js) - GitHub REST API client for JavaScript
* [jayphelps/core-decorators](https://github.com/jayphelps/core-decorators) - Library of stage-0 JavaScript decorators (aka ES2016/ES7 decorators but not accurate) inspired by languages that come with built-ins like @​override, @​deprecate, @​autobind, @​mixin and more. Popular with React/Angular, but is framework agnostic.
* [kriasoft/react-firebase-starter](https://github.com/kriasoft/react-firebase-starter) - Boilerplate (seed) project for creating web apps with React.js, GraphQL.js and Relay
* [23/resumable.js](https://github.com/23/resumable.js) - A JavaScript library for providing multiple simultaneous, stable, fault-tolerant and resumable/restartable uploads via the HTML5 File API.
* [kitze/JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps
* [primus/primus](https://github.com/primus/primus) - :zap: Primus, the creator god of the transformers & an abstraction layer for real-time to prevent module lock-in.
* [Bogdan-Lyashenko/Under-the-hood-ReactJS](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS) - Entire React code base explanation by visual block schemes (Stack version)
* [MikeMcl/bignumber.js](https://github.com/MikeMcl/bignumber.js) - A JavaScript library for arbitrary-precision decimal and non-decimal arithmetic
* [ternjs/tern](https://github.com/ternjs/tern) - A JavaScript code analyzer for deep, cross-editor language support
* [mscdex/ssh2](https://github.com/mscdex/ssh2) - SSH2 client and server modules written in pure JavaScript for node.js
* [jsbin/jsbin](https://github.com/jsbin/jsbin) - Collaborative JavaScript Debugging App
* [totaljs/framework](https://github.com/totaljs/framework) - Node.js framework
* [jonasschmedtmann/complete-javascript-course](https://github.com/jonasschmedtmann/complete-javascript-course) - Starter files, final projects and FAQ for my Complete JavaScript course
* [maicki/why-did-you-update](https://github.com/maicki/why-did-you-update) - :boom: Puts your console on blast when React is making unnecessary updates.
* [ml5js/ml5-library](https://github.com/ml5js/ml5-library) - Friendly machine learning for the web! 🤖
* [fuse-box/fuse-box](https://github.com/fuse-box/fuse-box) - A blazing fast js bundler/loader with a comprehensive API :fire:
* [AlexNisnevich/untrusted](https://github.com/AlexNisnevich/untrusted) - A meta-JavaScript adventure game by Alex Nisnevich and Greg Shuflin.
* [cowbell/sharedrop](https://github.com/cowbell/sharedrop) - Easy P2P file transfer powered by WebRTC - inspired by Apple AirDrop
* [react-ga/react-ga](https://github.com/react-ga/react-ga) - React Google Analytics Module
* [blueimp/JavaScript-Load-Image](https://github.com/blueimp/JavaScript-Load-Image) - Load images provided as File or Blob objects or via URL. Retrieve an optionally scaled, cropped or rotated HTML img or canvas element. Use methods to parse image metadata to extract IPTC and Exif tags as well as embedded thumbnail images, to overwrite the Exif Orientation value and to restore the complete image header after resizing.
* [imba/imba](https://github.com/imba/imba) - 🐤 The friendly full-stack language
* [bebraw/jswiki](https://github.com/bebraw/jswiki) - JavaScript wiki. Focuses mainly on JS/HTML5/WebGL related tech.
* [bpmn-io/bpmn-js](https://github.com/bpmn-io/bpmn-js) - A BPMN 2.0 rendering toolkit and web modeler.
* [JosephusPaye/Keen-UI](https://github.com/JosephusPaye/Keen-UI) - A lightweight Vue.js UI library with a simple API, inspired by Google's Material Design.
* [google/end-to-end](https://github.com/google/end-to-end) - End-To-End is a crypto library to encrypt, decrypt, digital sign, and verify signed messages (implementing OpenPGP)
* [hoodiehq/hoodie](https://github.com/hoodiehq/hoodie) - :dog: The Offline First JavaScript Backend
* [FrontendMasters/front-end-handbook-2017](https://github.com/FrontendMasters/front-end-handbook-2017) - 2017 edition of our front-end development guide
* [infinitered/nsfwjs](https://github.com/infinitered/nsfwjs) - NSFW detection on the client-side via TensorFlow.js
* [CreateJS/SoundJS](https://github.com/CreateJS/SoundJS) - A Javascript library for working with Audio. It provides a consistent API for loading and playing audio on different browsers and devices. Currently supports WebAudio, HTML5 Audio, Cordova / PhoneGap, and a Flash fallback.
* [ericdrowell/KineticJS](https://github.com/ericdrowell/KineticJS) - KineticJS is an HTML5 Canvas JavaScript framework that extends the 2d context by enabling canvas interactivity for desktop and mobile applications.
* [blueimp/JavaScript-MD5](https://github.com/blueimp/JavaScript-MD5) - JavaScript MD5 implementation. Compatible with server-side environments like node.js, module loaders like RequireJS and all web browsers.
* [serratus/quaggaJS](https://github.com/serratus/quaggaJS) - An advanced barcode-scanner written in JavaScript
* [qunitjs/qunit](https://github.com/qunitjs/qunit) - 🔮 An easy-to-use JavaScript unit testing framework.
* [Studio-42/elFinder](https://github.com/Studio-42/elFinder) - 📁 Open-source file manager for web, written in JavaScript using jQuery and jQuery UI
* [kolodny/exercises](https://github.com/kolodny/exercises) - Some basic javascript coding challenges and interview questions
* [Grsmto/simplebar](https://github.com/Grsmto/simplebar) - Custom scrollbars vanilla javascript library with native scroll, done simple, lightweight, easy to use and cross-browser.
* [gpbl/react-day-picker](https://github.com/gpbl/react-day-picker) - Lightweight date picker component for React
* [ant-design/ant-motion](https://github.com/ant-design/ant-motion) -   :bicyclist: Animate specification and components of Ant Design
* [alvarotrigo/pagePiling.js](https://github.com/alvarotrigo/pagePiling.js) - pagePiling plugin by Alvaro Trigo. Create a scrolling pile of sections. http://alvarotrigo.com/pagePiling/
* [lessfish/underscore-analysis](https://github.com/lessfish/underscore-analysis) - 【NO LONGER UPDATE】underscore-1.8.3.js 源码解读 & 系列文章（完）
* [axa-group/nlp.js](https://github.com/axa-group/nlp.js) - An NLP library for building bots, with entity extraction, sentiment analysis, automatic language identify, and so more
* [imbrn/v8n](https://github.com/imbrn/v8n) - ☑️ JavaScript fluent validation library
* [dinerojs/dinero.js](https://github.com/dinerojs/dinero.js) - An immutable JavaScript library to create, calculate and format money.
* [thelounge/thelounge](https://github.com/thelounge/thelounge) - 💬 Modern, responsive, cross-platform, self-hosted web IRC client
* [Level/levelup](https://github.com/Level/levelup) - A wrapper for abstract-leveldown compliant stores, for Node.js and browsers.
* [swagger-api/swagger-node](https://github.com/swagger-api/swagger-node) - Swagger module for node.js
* [mongo-express/mongo-express](https://github.com/mongo-express/mongo-express) - Web-based MongoDB admin interface, written with Node.js and express
* [SVG-Edit/svgedit](https://github.com/SVG-Edit/svgedit) - Powerful SVG-Editor for your browser
* [shakiba/planck.js](https://github.com/shakiba/planck.js) - 2D JavaScript Physics Engine
* [exif-js/exif-js](https://github.com/exif-js/exif-js) - JavaScript library for reading EXIF image metadata
* [facebook/metro](https://github.com/facebook/metro) - 🚇 The JavaScript bundler for React Native.
* [pegjs/pegjs](https://github.com/pegjs/pegjs) - PEG.js: Parser generator for JavaScript
* [zaach/jison](https://github.com/zaach/jison) - Bison in JavaScript.
* [hybridgroup/cylon](https://github.com/hybridgroup/cylon) - JavaScript framework for robotics, drones, and the Internet of Things (IoT)
* [regl-project/regl](https://github.com/regl-project/regl) - 👑 Functional WebGL
* [soulwire/sketch.js](https://github.com/soulwire/sketch.js) - Cross-Platform JavaScript Creative Coding Framework
* [mapbox/pixelmatch](https://github.com/mapbox/pixelmatch) - The smallest, simplest and fastest JavaScript pixel-level image comparison library
* [toji/gl-matrix](https://github.com/toji/gl-matrix) - Javascript Matrix and Vector library for High Performance WebGL apps
* [kdchang/reactjs101](https://github.com/kdchang/reactjs101) - 從零開始學 ReactJS（ReactJS 101）是一本希望讓初學者一看就懂的 React 中文入門教學書，由淺入深學習 ReactJS 生態系 (Flux, Redux, React Router, ImmutableJS, React Native, Relay/GraphQL etc.)。
* [google/closure-library](https://github.com/google/closure-library) - Google's common JavaScript library
* [MikeMcl/decimal.js](https://github.com/MikeMcl/decimal.js) - An arbitrary-precision Decimal type for JavaScript
* [brianchirls/Seriously.js](https://github.com/brianchirls/Seriously.js) - A real-time, node-based video effects compositor for the web built with HTML5, Javascript and WebGL
* [geuis/helium-css](https://github.com/geuis/helium-css) - Helium - javascript tool to scan your site and show unused CSS
* [creationix/js-git](https://github.com/creationix/js-git) - A JavaScript implementation of Git.
* [haraka/Haraka](https://github.com/haraka/Haraka) - A fast, highly extensible, and event driven SMTP server
* [BoxFactura/pulltorefresh.js](https://github.com/BoxFactura/pulltorefresh.js) - A quick and powerful plugin for your pull-to-refresh needs in your webapp.
* [jnordberg/gif.js](https://github.com/jnordberg/gif.js) - JavaScript GIF encoding library
* [Okazari/Rythm.js](https://github.com/Okazari/Rythm.js) - A javascript library that makes your page dance.
* [GoogleChromeLabs/sw-toolbox](https://github.com/GoogleChromeLabs/sw-toolbox) - [Deprecated] A collection of service worker tools for offlining runtime requests
* [muaz-khan/RecordRTC](https://github.com/muaz-khan/RecordRTC) - RecordRTC is WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows.
* [mysticatea/npm-run-all](https://github.com/mysticatea/npm-run-all) - A CLI tool to run multiple npm-scripts in parallel or sequential.
* [britecharts/britecharts](https://github.com/britecharts/britecharts) - Client-side reusable Charting Library based on D3.js v5 that allows easy and intuitive use of charts and components that can be composed together creating amazing visualizations.
* [yahoo/gifshot](https://github.com/yahoo/gifshot) - JavaScript library that can create animated GIFs from media streams, videos, or images.
* [subprotocol/verlet-js](https://github.com/subprotocol/verlet-js) - A simple Verlet physics engine written in javascript
* [auduno/headtrackr](https://github.com/auduno/headtrackr) - Javascript library for headtracking via webcam and WebRTC/getUserMedia
* [WickyNilliams/enquire.js](https://github.com/WickyNilliams/enquire.js) - Awesome Media Queries in JavaScript
* [stacktracejs/stacktrace.js](https://github.com/stacktracejs/stacktrace.js) - Generate, parse, and enhance JavaScript stack traces in all web browsers
* [azat-co/practicalnode](https://github.com/azat-co/practicalnode) - Practical Node.js, 1st and 2nd Editions [Apress] 📓
* [digitalbazaar/forge](https://github.com/digitalbazaar/forge) - A native implementation of TLS in Javascript and tools to write crypto-based and network-heavy webapps
* [pinterest/gestalt](https://github.com/pinterest/gestalt) - A set of React UI components that supports Pinterest’s design language
* [matthewhudson/current-device](https://github.com/matthewhudson/current-device) - The easiest way to write conditional CSS and/or JavaScript based on device operating system (iOS, Android, Blackberry, Windows, Firefox OS, MeeGo), orientation (Portrait vs. Landscape), and type (Tablet vs. Mobile).
* [Aerolab/midnight.js](https://github.com/Aerolab/midnight.js) - Switch your nav's design on the fly
* [TheAlgorithms/Javascript](https://github.com/TheAlgorithms/Javascript) - A repository for All algorithms implemented in Javascript (for educational purposes only)
* [neutrinojs/neutrino](https://github.com/neutrinojs/neutrino) - Create and build modern JavaScript projects with zero initial configuration.
* [hustcc/canvas-nest.js](https://github.com/hustcc/canvas-nest.js) - :cancer: Interactive Particle / Nest System With JavaScript and Canvas, no jQuery.
* [iSimar/HackerNews-React-Native](https://github.com/iSimar/HackerNews-React-Native) - Hacker News iOS and Android App - Made with React Native.
* [homerchen19/nba-go](https://github.com/homerchen19/nba-go) - 🏀 💻 The finest NBA CLI.
* [babel/babel-preset-env](https://github.com/babel/babel-preset-env) - PSA: this repo has been moved into babel/babel -->
* [benhowdle89/grade](https://github.com/benhowdle89/grade) - This JavaScript library produces complementary gradients generated from the top 2 dominant colours in supplied images.
* [NickCarneiro/curlconverter](https://github.com/NickCarneiro/curlconverter) - convert curl commands to Python, JavaScript, PHP, R, Go, Rust, Dart, JSON, Ansible, Elixir
* [spine/spine](https://github.com/spine/spine) - Lightweight MVC library for building JavaScript applications
* [bkimminich/juice-shop](https://github.com/bkimminich/juice-shop) - OWASP Juice Shop: Probably the most modern and sophisticated insecure web application
* [mailru/FileAPI](https://github.com/mailru/FileAPI) - FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
* [Tencent/westore](https://github.com/Tencent/westore) - 微信小程序解决方案 - 1KB javascript 覆盖状态管理、跨页通讯、插件开发和云数据库开发
* [amir20/phantomjs-node](https://github.com/amir20/phantomjs-node) - PhantomJS integration module for NodeJS
* [521dimensions/amplitudejs](https://github.com/521dimensions/amplitudejs) - AmplitudeJS: Open Source HTML5 Web Audio Library. Design your web audio player, the way you want. No dependencies required.
* [bgrins/TinyColor](https://github.com/bgrins/TinyColor) - Fast, small color manipulation and conversion for JavaScript
* [claudiajs/claudia](https://github.com/claudiajs/claudia) - Deploy Node.js projects to AWS Lambda and API Gateway easily
* [Dash-Industry-Forum/dash.js](https://github.com/Dash-Industry-Forum/dash.js) - A reference client implementation for the playback of MPEG DASH via Javascript and compliant browsers.
* [jschr/textillate](https://github.com/jschr/textillate) - A jquery plugin for CSS3 text animations.
* [lindell/JsBarcode](https://github.com/lindell/JsBarcode) - Barcode generation library written in JavaScript that works in both the browser and on Node.js
* [plopjs/plop](https://github.com/plopjs/plop) - Consistency Made Simple
* [software-mansion/react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) - Declarative API exposing platform native touch and gesture system to React Native.
* [prototypejs/prototype](https://github.com/prototypejs/prototype) - Prototype JavaScript framework
* [ShizukuIchi/winXP](https://github.com/ShizukuIchi/winXP) - 🏁 Web based Windows XP desktop recreation.
* [jsonresume/resume-cli](https://github.com/jsonresume/resume-cli) - CLI tool to easily setup a new resume 📑
* [konvajs/react-konva](https://github.com/konvajs/react-konva) - React + Canvas = Love. JavaScript library for drawing complex canvas graphics using React.
* [markmarkoh/datamaps](https://github.com/markmarkoh/datamaps) - Customizable SVG map visualizations for the web in a single Javascript file using D3.js
* [LazarSoft/jsqrcode](https://github.com/LazarSoft/jsqrcode) - Javascript QRCode scanner
* [olifolkerd/tabulator](https://github.com/olifolkerd/tabulator) - Interactive Tables and Data Grids for JavaScript
* [kvz/locutus](https://github.com/kvz/locutus) - All your standard libraries will be assimilated into our JavaScript collective. Resistance is futile.
* [mdaines/viz.js](https://github.com/mdaines/viz.js) - A hack to put Graphviz on the web.
* [tutao/tutanota](https://github.com/tutao/tutanota) - Tutanota is an email client with a strong focus on security and privacy that lets you encrypt emails on all your devices.
* [wooorm/franc](https://github.com/wooorm/franc) - Natural language detection
* [npm/cli](https://github.com/npm/cli) - the package manager for JavaScript
* [facebook/fbt](https://github.com/facebook/fbt) - A JavaScript Internationalization Framework
* [douglascrockford/JSLint](https://github.com/douglascrockford/JSLint) - The JavaScript Code Quality Tool
* [codemix/fast.js](https://github.com/codemix/fast.js) - Faster user-land reimplementations for several common builtin native JavaScript functions.
* [KyleAMathews/typography.js](https://github.com/KyleAMathews/typography.js) - A powerful toolkit for building websites with beautiful design
* [software-mansion/react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) - React Native's Animated library reimplemented
* [deepsyx/home-automation](https://github.com/deepsyx/home-automation) - Raspberry Pi 3 based home automation with NodeJS and React Native.
* [web-animations/web-animations-js](https://github.com/web-animations/web-animations-js) - JavaScript implementation of the Web Animations API
* [benjamine/jsondiffpatch](https://github.com/benjamine/jsondiffpatch) - Diff & patch JavaScript objects
* [mattdiamond/fuckitjs](https://github.com/mattdiamond/fuckitjs) - The Original Javascript Error Steamroller
* [Qix-/color](https://github.com/Qix-/color) - :rainbow: Javascript color conversion and manipulation library
* [Alex-D/Trumbowyg](https://github.com/Alex-D/Trumbowyg) - A lightweight and amazing WYSIWYG JavaScript editor - 20kB only (8kB gzip)
* [esamattis/underscore.string](https://github.com/esamattis/underscore.string) - String manipulation helpers for javascript
* [facebook/regenerator](https://github.com/facebook/regenerator) - Source transformer enabling ECMAScript 6 generator functions in JavaScript-of-today.
* [egret-labs/egret-core](https://github.com/egret-labs/egret-core) - Egret is a brand new open mobile game and application engine which allows you to quickly build mobile games and apps on Android,iOS and Windows.
* [wellcaffeinated/PhysicsJS](https://github.com/wellcaffeinated/PhysicsJS) - A modular, extendable, and easy-to-use physics engine for javascript
* [airbnb/polyglot.js](https://github.com/airbnb/polyglot.js) - Give your JavaScript the ability to speak many languages.
* [jhu-ep-coursera/fullstack-course4](https://github.com/jhu-ep-coursera/fullstack-course4) - Example code for HTML, CSS, and Javascript for Web Developers Coursera Course
* [ember-cli/ember-cli](https://github.com/ember-cli/ember-cli) - The Ember.js command line utility
* [buttercup/buttercup-desktop](https://github.com/buttercup/buttercup-desktop) - :key: Javascript Secrets Vault - Multi-Platform Desktop Application
* [KartikTalwar/gmail.js](https://github.com/KartikTalwar/gmail.js) - Gmail JavaScript API
* [sindresorhus/execa](https://github.com/sindresorhus/execa) - Process execution for humans
* [terwanerik/ScrollTrigger](https://github.com/terwanerik/ScrollTrigger) - Let your page react to scroll changes.
* [tyroprogrammer/learn-react-app](https://github.com/tyroprogrammer/learn-react-app) - Application that will help you learn React fundamentals. Install this application locally - there's tutorial, code snippets and exercises. The main objective of this project is to help you get off the ground with React!
* [joewalnes/reconnecting-websocket](https://github.com/joewalnes/reconnecting-websocket) - A small decorator for the JavaScript WebSocket API that automatically reconnects
* [wendux/fly](https://github.com/wendux/fly) - :rocket: Supporting request forwarding and Promise based HTTP client for all JavaScript runtimes.
* [xdan/datetimepicker](https://github.com/xdan/datetimepicker) - jQuery Plugin Date and Time Picker
* [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon) - A design system built by IBM
* [appwrite/appwrite](https://github.com/appwrite/appwrite) - Appwrite is a secure end-to-end backend server for Web, Mobile, and Flutter developers that is packaged as a set of Docker containers for easy deployment 🚀
* [cyrus-and/chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface) - Chrome Debugging Protocol interface for Node.js
* [francisrstokes/super-expressive](https://github.com/francisrstokes/super-expressive) - 🦜 Super Expressive is a zero-dependency JavaScript library for building regular expressions in (almost) natural language
* [fkling/astexplorer](https://github.com/fkling/astexplorer) - A web tool to explore the ASTs generated by various parsers.
* [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark) - A comparison of the perfomance of a few popular javascript frameworks
* [apostrophecms/apostrophe](https://github.com/apostrophecms/apostrophe) - A CMS framework for Node.js that supports in-context editing, schema-driven content types, flexible widgets, and much more. Hint: start with the docs and use apostrophe-cli.
* [mroderick/PubSubJS](https://github.com/mroderick/PubSubJS) - Dependency free publish/subscribe for JavaScript
* [jasondavies/d3-cloud](https://github.com/jasondavies/d3-cloud) - Create word clouds in JavaScript.
* [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - Sample apps for Electron
* [antimatter15/ocrad.js](https://github.com/antimatter15/ocrad.js) - OCR in Javascript via Emscripten
* [pawelgrzybek/siema](https://github.com/pawelgrzybek/siema) - Siema - Lightweight and simple carousel in pure JavaScript
* [CreateJS/TweenJS](https://github.com/CreateJS/TweenJS) - A simple but powerful tweening / animation library for Javascript. Part of the CreateJS suite of libraries.
* [babel/babel-sublime](https://github.com/babel/babel-sublime) - Syntax definitions for ES6 JavaScript with React JSX extensions.
* [stutrek/scrollmonitor](https://github.com/stutrek/scrollmonitor) - A simple and fast API to monitor elements as you scroll
* [mikeric/rivets](https://github.com/mikeric/rivets) - Lightweight and powerful data binding.
* [clientIO/joint](https://github.com/clientIO/joint) - JavaScript diagramming library
* [anvaka/VivaGraphJS](https://github.com/anvaka/VivaGraphJS) - Graph drawing library for JavaScript
* [PaulLeCam/react-leaflet](https://github.com/PaulLeCam/react-leaflet) - ⚛️ React components for 🍃 Leaflet maps
* [remarkjs/remark](https://github.com/remarkjs/remark) - Markdown processor powered by plugins part of the @unifiedjs collective
* [fnando/i18n-js](https://github.com/fnando/i18n-js) - It's a small library to provide the I18n translations on the Javascript. It comes with Rails support.
* [vuejs/eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) - Official ESLint plugin for Vue.js
* [felipernb/algorithms.js](https://github.com/felipernb/algorithms.js) - Atwood's Law applied to CS101 - Classic algorithms and data structures implemented in JavaScript
* [skatejs/skatejs](https://github.com/skatejs/skatejs) - Effortless custom elements powered by modern view libraries.
* [sindresorhus/create-dmg](https://github.com/sindresorhus/create-dmg) - Create a good-looking DMG for your macOS app in seconds
* [webkul/coolhue](https://github.com/webkul/coolhue) - Coolest Gradient Hues and Swatches
* [schteppe/cannon.js](https://github.com/schteppe/cannon.js) - A lightweight 3D physics engine written in JavaScript.
* [danielstjules/jsinspect](https://github.com/danielstjules/jsinspect) - Detect copy-pasted and structurally similar code
* [stevenschobert/instafeed.js](https://github.com/stevenschobert/instafeed.js) - A simple Instagram JavaScript plugin for your website
* [sqlectron/sqlectron-gui](https://github.com/sqlectron/sqlectron-gui) - A simple and lightweight SQL client desktop with cross database and platform support.
* [paularmstrong/swig](https://github.com/paularmstrong/swig) - Take a swig of the best template engine for JavaScript.
* [yeoman/yo](https://github.com/yeoman/yo) - CLI tool for running Yeoman generators
* [panzerdp/voca](https://github.com/panzerdp/voca) - The ultimate JavaScript string library
* [melonjs/melonJS](https://github.com/melonjs/melonJS) - a fresh & lightweight javascript game engine
* [RafalWilinski/express-status-monitor](https://github.com/RafalWilinski/express-status-monitor) - 🚀 Realtime Monitoring solution for Node.js/Express.js apps, inspired by status.github.com
* [givanz/VvvebJs](https://github.com/givanz/VvvebJs) - Drag and drop website builder javascript library.
* [hainproject/hain](https://github.com/hainproject/hain) - An 'alt+space' launcher for Windows, built with Electron
* [FortAwesome/react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - Font Awesome 5 React component
* [tmcw/big](https://github.com/tmcw/big) - presentations for busy messy hackers
* [js-org/js.org](https://github.com/js-org/js.org) - Dedicated to JavaScript and its awesome community since 2015
* [ssbc/patchwork](https://github.com/ssbc/patchwork) - A decentralized messaging and sharing app built on top of Secure Scuttlebutt (SSB).
* [ccampbell/rainbow](https://github.com/ccampbell/rainbow) - Simple syntax highlighting library written in javascript
* [jpillora/xdomain](https://github.com/jpillora/xdomain) - A pure JavaScript CORS alternative
* [ramon82/zuck.js](https://github.com/ramon82/zuck.js) - A javascript library that lets you add stories EVERYWHERE.
* [Yomguithereal/baobab](https://github.com/Yomguithereal/baobab) - JavaScript & TypeScript persistent and optionally immutable data tree with cursors.
* [nodeca/pako](https://github.com/nodeca/pako) - high speed zlib port to javascript, works in browser & node.js
* [firebase/firebaseui-web](https://github.com/firebase/firebaseui-web) - FirebaseUI is an open-source JavaScript library for Web that provides simple, customizable UI bindings on top of Firebase SDKs to eliminate boilerplate code and promote best practices.
* [bilibili-helper/bilibili-helper-o](https://github.com/bilibili-helper/bilibili-helper-o) - 哔哩哔哩 (bilibili.com) 辅助工具，可以替换播放器、推送通知并进行一些快捷操作
* [Olical/EventEmitter](https://github.com/Olical/EventEmitter) - Evented JavaScript for the browser
* [rikschennink/fitty](https://github.com/rikschennink/fitty) - ✨ Makes text fit perfectly
* [30-seconds/30-seconds-of-react](https://github.com/30-seconds/30-seconds-of-react) - Short React code snippets for all your development needs
* [quirkey/sammy](https://github.com/quirkey/sammy) - Sammy is a tiny javascript framework built on top of jQuery, It's RESTful Evented Javascript.
* [ianramzy/decentralized-video-chat](https://github.com/ianramzy/decentralized-video-chat) - 🚀 Zipcall.io - 100k users 🚀 Peer to peer browser video calling platform with unmatched video quality and latency.
* [brookhong/Surfingkeys](https://github.com/brookhong/Surfingkeys) - Map your keys for web surfing, expand your browser with javascript and keyboard.
* [stampit-org/stampit](https://github.com/stampit-org/stampit) - OOP is better with stamps: Composable object factories.
* [berwin/Blog](https://github.com/berwin/Blog) - 记录成长的过程
* [kern/filepizza](https://github.com/kern/filepizza) - :pizza: Peer-to-peer file transfers in your browser
* [prettier/prettier-eslint](https://github.com/prettier/prettier-eslint) - Code :arrow_right: prettier :arrow_right: eslint --fix :arrow_right: Formatted Code :sparkles:
* [React-Proto/react-proto](https://github.com/React-Proto/react-proto) - :art: React application prototyping tool for developers and designers :building_construction:
* [chrisdiana/cms.js](https://github.com/chrisdiana/cms.js) - Client-Side JavaScript Site Generator
* [miragejs/miragejs](https://github.com/miragejs/miragejs) - A client-side server to build, test and share your JavaScript app
* [emberjs/data](https://github.com/emberjs/data) - A data persistence library for Ember.js.
* [dankogai/js-base64](https://github.com/dankogai/js-base64) - Base64 implementation for JavaScript
* [aurajs/aura](https://github.com/aurajs/aura) - A scalable, event-driven JavaScript architecture for developing component-based applications.
* [babel/babel-eslint](https://github.com/babel/babel-eslint) - :tokyo_tower: A wrapper for Babel's parser used for ESLint
* [laurentj/slimerjs](https://github.com/laurentj/slimerjs) - A scriptable browser like PhantomJS, based on Firefox
* [artberri/sidr](https://github.com/artberri/sidr) - Sidr is a jQuery plugin for creating side menus and the easiest way for doing your menu responsive.
* [redom/redom](https://github.com/redom/redom) - Tiny (2 KB) turboboosted JavaScript library for creating user interfaces.
* [noflo/noflo](https://github.com/noflo/noflo) - Flow-based programming for JavaScript
* [spencermountain/spacetime](https://github.com/spencermountain/spacetime) - A lightweight javascript timezone library
* [testem/testem](https://github.com/testem/testem) - Test'em 'Scripts! A test runner that makes Javascript unit testing fun.
* [EFForg/https-everywhere](https://github.com/EFForg/https-everywhere) - A browser extension that encrypts your communications with many websites that offer HTTPS but still allow unencrypted connections.
* [darsain/sly](https://github.com/darsain/sly) - JavaScript library for one-directional scrolling with item based navigation support.
* [craftyjs/Crafty](https://github.com/craftyjs/Crafty) - JavaScript Game Engine
* [Dynalon/mdwiki](https://github.com/Dynalon/mdwiki) - CMS/Wiki system using Javascript for 100% client side single page application using Markdown.
* [seiyria/bootstrap-slider](https://github.com/seiyria/bootstrap-slider) - A slider control for Bootstrap 3 & 4.
* [bevacqua/rome](https://github.com/bevacqua/rome) - :calendar: Customizable date (and time) picker. Opt-in UI, no jQuery!
* [grevory/angular-local-storage](https://github.com/grevory/angular-local-storage) - An AngularJS module that gives you access to the browsers local storage with cookie fallback
* [dagrejs/dagre](https://github.com/dagrejs/dagre) - Directed graph layout for JavaScript
* [maptalks/maptalks.js](https://github.com/maptalks/maptalks.js) - A light and plugable JavaScript library for integrated 2D/3D maps.
* [ded/reqwest](https://github.com/ded/reqwest) - browser asynchronous http requests
* [opentypejs/opentype.js](https://github.com/opentypejs/opentype.js) - Read and write OpenType fonts using JavaScript.
* [parallel-js/parallel.js](https://github.com/parallel-js/parallel.js) - Easy multi-core processing utilities for Node.
* [MikeMcl/big.js](https://github.com/MikeMcl/big.js) - A small, fast JavaScript library for arbitrary-precision decimal arithmetic.
* [danvk/dygraphs](https://github.com/danvk/dygraphs) - Interactive visualizations of time series using JavaScript and the HTML canvas tag
* [ded/script.js](https://github.com/ded/script.js) - Asyncronous JavaScript loader and dependency manager
* [Tencent/weui.js](https://github.com/Tencent/weui.js) - A lightweight javascript library for WeUI.
* [linkedin/dustjs](https://github.com/linkedin/dustjs) - Asynchronous Javascript templating for the browser and server
* [pomber/didact](https://github.com/pomber/didact) - A DIY guide to build your own React
* [kciter/qart.js](https://github.com/kciter/qart.js) - Generate artistic QR code. 🎨
* [apocas/dockerode](https://github.com/apocas/dockerode) - Docker + Node = Dockerode (Node.js module for Docker's Remote API)
* [rikschennink/shiny](https://github.com/rikschennink/shiny) - 🌟 Shiny reflections for mobile websites
* [simov/grant](https://github.com/simov/grant) - OAuth Proxy
* [astoilkov/jsblocks](https://github.com/astoilkov/jsblocks) - Better MV-ish Framework
* [slevithan/xregexp](https://github.com/slevithan/xregexp) - Extended JavaScript regular expressions
* [redux-orm/redux-orm](https://github.com/redux-orm/redux-orm) - A small, simple and immutable ORM to manage relational data in your Redux store.
* [TarekRaafat/autoComplete.js](https://github.com/TarekRaafat/autoComplete.js) - Simple autocomplete pure vanilla Javascript library.
* [finos/perspective](https://github.com/finos/perspective) - Streaming pivot visualization via WebAssembly
* [skulpt/skulpt](https://github.com/skulpt/skulpt) - Skulpt is a Javascript implementation of the Python programming language
* [tonytomov/jqGrid](https://github.com/tonytomov/jqGrid) - jQuery grid plugin
* [0xfe/vexflow](https://github.com/0xfe/vexflow) - A JavaScript library for rendering music notation and guitar tablature.
* [cezaraugusto/You-Dont-Know-JS](https://github.com/cezaraugusto/You-Dont-Know-JS) - :green_book::ledger: (PT-BR translation) JS Book Series.
* [feross/thanks](https://github.com/feross/thanks) - 🙌 Give thanks to the open source maintainers you depend on! ✨
* [substance/substance](https://github.com/substance/substance) - A JavaScript library for web-based content editing.
* [hustcc/echarts-for-react](https://github.com/hustcc/echarts-for-react) - :chart_with_upwards_trend: baidu Echarts(v3.0 & v4.0) components for React wrapper. 一个简单的 echarts(v3.0 & v4.0) 的 react 封装。
* [ElemeFE/vue-amap](https://github.com/ElemeFE/vue-amap) - 🌍  基于 Vue 2.x 和高德地图的地图组件
* [vasanthk/js-bits](https://github.com/vasanthk/js-bits) - ✨ JavaScript concepts with code ✨
* [reactGo/reactGo](https://github.com/reactGo/reactGo) - Your One-Stop solution for a full-stack universal Redux App!
* [renatorib/react-powerplug](https://github.com/renatorib/react-powerplug) - :electric_plug: Renderless Containers
* [sx1989827/DOClever](https://github.com/sx1989827/DOClever) - 做最好的接口管理平台
* [flowjs/flow.js](https://github.com/flowjs/flow.js) - A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API.
* [CreateJS/PreloadJS](https://github.com/CreateJS/PreloadJS) - PreloadJS makes preloading assets & getting aggregate progress events easier in JavaScript. It uses XHR2 when available, and falls back to tag-based loading when not.
* [vitaly-t/pg-promise](https://github.com/vitaly-t/pg-promise) - PostgreSQL interface for Node.js
* [reactjs/react-future](https://github.com/reactjs/react-future) - Specs & docs for potential future and experimental React APIs and JavaScript syntax.
* [benmosher/eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports.
* [cocos2d/cocos2d-html5](https://github.com/cocos2d/cocos2d-html5) - Cocos2d for Web Browsers. Built using JavaScript.
* [stuyam/pressure](https://github.com/stuyam/pressure) - :point_down::boom:  JavaScript library for handling Force Touch, 3D Touch, and Pointer Pressure.
* [hsnaydd/moveTo](https://github.com/hsnaydd/moveTo) - A lightweight scroll animation javascript library without any dependency
* [bradley/Blotter](https://github.com/bradley/Blotter) - A JavaScript API for drawing unconventional text effects on the web.
* [mpetroff/pannellum](https://github.com/mpetroff/pannellum) - Pannellum is a lightweight, free, and open source panorama viewer for the web.
* [wesbos/Advanced-React](https://github.com/wesbos/Advanced-React) - Starter Files and Solutions for Full Stack Advanced React and GraphQL
* [jejacks0n/mercury](https://github.com/jejacks0n/mercury) - Mercury Editor: The Rails WYSIWYG editor that allows embedding full page editing capabilities directly inline.
* [swup/swup](https://github.com/swup/swup) - :tada: Complete, flexible, extensible and easy to use page transition library for your web.
* [vinta/pangu.js](https://github.com/vinta/pangu.js) - Paranoid text spacing in JavaScript
* [postaljs/postal.js](https://github.com/postaljs/postal.js) - JavaScript pub/sub library supporting advanced subscription features, and several helpful add-ons.
* [testing-library/react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) - 🐏 Simple and complete React hooks testing utilities that encourage good testing practices.
* [alexk111/SVG-Morpheus](https://github.com/alexk111/SVG-Morpheus) - JavaScript library enabling SVG icons to morph from one to the other. It implements Material Design's Delightful Details transitions. (THIS PROJECT IS NOT MAINTAINED ANYMORE)
* [kach/nearley](https://github.com/kach/nearley) - 📜🔜🌲 Simple, fast, powerful parser toolkit for JavaScript.
* [deck-of-cards/deck-of-cards](https://github.com/deck-of-cards/deck-of-cards) - Deck of Cards (old version)
* [pa11y/pa11y](https://github.com/pa11y/pa11y) - Pa11y is your automated accessibility testing pal
* [angular-ui-tree/angular-ui-tree](https://github.com/angular-ui-tree/angular-ui-tree) - A tree component for AngularJS, without jQuery as dependency.
* [esdoc/esdoc](https://github.com/esdoc/esdoc) - ESDoc - Good Documentation for JavaScript
* [securingsincity/react-ace](https://github.com/securingsincity/react-ace) - React Ace Component
* [gruns/ImmortalDB](https://github.com/gruns/ImmortalDB) - :nut_and_bolt: A relentless key-value store for the browser.
* [dinbror/blazy](https://github.com/dinbror/blazy) - Hey, be lazy! bLazy.JS is a lightweight pure JavaScript script for lazy loading and multi-serving images. It's working in all modern browsers including IE7+.
* [mathiasbynens/he](https://github.com/mathiasbynens/he) - A robust HTML entity encoder/decoder written in JavaScript.
* [videojs/videojs-contrib-hls](https://github.com/videojs/videojs-contrib-hls) - HLS library for video.js
* [vpulim/node-soap](https://github.com/vpulim/node-soap) - A SOAP client and server for node.js.
* [boo1ean/casual](https://github.com/boo1ean/casual) - Fake data generator for javascript
* [gritzko/swarm](https://github.com/gritzko/swarm) - JavaScript replicated model (M of MVC) library
* [inspirit/jsfeat](https://github.com/inspirit/jsfeat) - JavaScript Computer Vision library.
* [osano/cookieconsent](https://github.com/osano/cookieconsent) - A free solution to the EU, GDPR, and California Cookie Laws
* [pieroxy/lz-string](https://github.com/pieroxy/lz-string) - LZ-based compression algorithm for JavaScript
* [sanctuary-js/sanctuary](https://github.com/sanctuary-js/sanctuary) - :see_no_evil: Refuge from unsafe JavaScript
* [conversejs/converse.js](https://github.com/conversejs/converse.js) - Web-based XMPP/Jabber chat client written in JavaScript
* [webtorrent/instant.io](https://github.com/webtorrent/instant.io) - 🚀 Streaming file transfer over WebTorrent (torrents on the web)
* [victorqribeiro/isocity](https://github.com/victorqribeiro/isocity) - A isometric city builder in JavaScript
* [power-assert-js/power-assert](https://github.com/power-assert-js/power-assert) - Power Assert in JavaScript. Provides descriptive assertion messages through standard assert interface. No API is the best API.
* [shen100/mili](https://github.com/shen100/mili) - mili 是一个开源的社区系统，界面优雅，功能丰富😛
* [tholman/intense-images](https://github.com/tholman/intense-images) - A simple library to view large images up close using simple mouse interaction, and the full screen.
* [RetireJS/retire.js](https://github.com/RetireJS/retire.js) - scanner detecting the use of JavaScript libraries with known vulnerabilities
* [rickharrison/validate.js](https://github.com/rickharrison/validate.js) - Lightweight JavaScript form validation library inspired by CodeIgniter.
* [evanw/glfx.js](https://github.com/evanw/glfx.js) - An image effects library for JavaScript using WebGL
* [e-oj/Magic-Grid](https://github.com/e-oj/Magic-Grid) - A simple, lightweight Javascript library for dynamic grid layouts.
* [ElemeFE/element-react](https://github.com/ElemeFE/element-react) - Element UI
* [jvalen/pixel-art-react](https://github.com/jvalen/pixel-art-react) - Pixel art animation and drawing web app powered by React
* [benoitvallon/computer-science-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript) - Computer science reimplemented in JavaScript
* [apify/apify-js](https://github.com/apify/apify-js) - Apify SDK — The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.
* [fbeline/design-patterns-JS](https://github.com/fbeline/design-patterns-JS) - All the 23 (GoF) design patterns implemented in Javascript
* [algolia/instantsearch.js](https://github.com/algolia/instantsearch.js) - ⚡️ A JavaScript library for building performant and instant search experiences with Algolia.
* [dcodeIO/bcrypt.js](https://github.com/dcodeIO/bcrypt.js) - Optimized bcrypt in plain JavaScript with zero dependencies.
* [HumbleSoftware/Flotr2](https://github.com/HumbleSoftware/Flotr2) - Graphs and Charts for Canvas in JavaScript.
* [bevacqua/fuzzysearch](https://github.com/bevacqua/fuzzysearch) - :crystal_ball: Tiny and blazing-fast fuzzy search in JavaScript
* [htmlhint/HTMLHint](https://github.com/htmlhint/HTMLHint) - ⚙️ The static code analysis tool you need for your HTML
* [andreasbm/web-skills](https://github.com/andreasbm/web-skills) - A visual overview of useful skills to learn as a web developer
* [marijnh/Eloquent-JavaScript](https://github.com/marijnh/Eloquent-JavaScript) - The sources for the Eloquent JavaScript book
* [React-Sight/React-Sight](https://github.com/React-Sight/React-Sight) - Visualization tool for React, with support for Fiber, Router (v4), and Redux
* [flitbit/diff](https://github.com/flitbit/diff) - Javascript utility for calculating deep difference, capturing changes, and applying changes across objects; for nodejs and the browser.
* [ashtuchkin/iconv-lite](https://github.com/ashtuchkin/iconv-lite) - Convert character encodings in pure javascript.
* [uNmAnNeR/imaskjs](https://github.com/uNmAnNeR/imaskjs) - vanilla javascript input mask
* [muicss/loadjs](https://github.com/muicss/loadjs) - A tiny async loader / dependency manager for modern browsers (899 bytes)
* [botui/botui](https://github.com/botui/botui) - 🤖 A JavaScript framework to create conversational UIs
* [igorprado/react-notification-system](https://github.com/igorprado/react-notification-system) - A complete and totally customizable component for notifications in React
* [ghosh/Micromodal](https://github.com/ghosh/Micromodal) - ⭕   Tiny javascript library for creating accessible modal dialogs
* [pedant/safe-java-js-webview-bridge](https://github.com/pedant/safe-java-js-webview-bridge) - 为WebView中的Java与JavaScript提供【安全可靠】的多样互通方案
* [STRML/strml.net](https://github.com/STRML/strml.net) - STRML: Projects & Work
* [IonDen/ion.rangeSlider](https://github.com/IonDen/ion.rangeSlider) - jQuery only range slider
* [FormidableLabs/nuka-carousel](https://github.com/FormidableLabs/nuka-carousel) - Pure React Carousel Component
* [franciscop/brownies](https://github.com/franciscop/brownies) - 🍫 Tastier cookies, local, session, and db storage in a tiny package. Includes subscribe() events for changes.
* [simple-statistics/simple-statistics](https://github.com/simple-statistics/simple-statistics) - simple statistics for node & browser javascript
* [angus-c/just](https://github.com/angus-c/just) - A library of dependency-free JavaScript functions that do just do one thing.
* [usablica/progress.js](https://github.com/usablica/progress.js) - ProgressJs is a JavaScript and CSS3 library which help developers to create and manage progress bar for every objects on the page.
* [ansman/validate.js](https://github.com/ansman/validate.js) - A declarative validation library written javascript
* [lipka/piecon](https://github.com/lipka/piecon) - A tiny javascript library for generating progress pie charts in your favicon.
* [mattdesl/canvas-sketch](https://github.com/mattdesl/canvas-sketch) - [beta] A framework for making generative artwork in JavaScript and the browser.
* [alohaeditor/Aloha-Editor](https://github.com/alohaeditor/Aloha-Editor) - Aloha Editor is a JavaScript content editing library
* [Bogdan-Lyashenko/codecrumbs](https://github.com/Bogdan-Lyashenko/codecrumbs) - Learn, design or document codebase by putting breadcrumbs in source code. Live updates, multi-language support and more.
* [RickWong/react-isomorphic-starterkit](https://github.com/RickWong/react-isomorphic-starterkit) - Create an isomorphic React app in less than 5 minutes
* [developit/express-es6-rest-api](https://github.com/developit/express-es6-rest-api) - :battery: Starter project for an ES6 RESTful Express API.
* [philipwalton/html-inspector](https://github.com/philipwalton/html-inspector) - HTML Inspector is a code quality tool to help you and your team write better markup. It's written in JavaScript and runs in the browser, so testing your HTML has never been easier.
* [thomasdavis/backbonetutorials](https://github.com/thomasdavis/backbonetutorials) - As single page apps and large scale javascript applications become more prominent on the web, useful resources for those developers who are jumping the ship are crucial.
* [Atyantik/react-pwa](https://github.com/Atyantik/react-pwa) - An upgradable boilerplate for Progressive web applications (PWA) with server side rendering, build with SEO in mind and achieving max page speed and optimized user experience.
* [fengyuanchen/compressorjs](https://github.com/fengyuanchen/compressorjs) - JavaScript image compressor.
* [openstreetmap/iD](https://github.com/openstreetmap/iD) - 🆔 The easy-to-use OpenStreetMap editor in JavaScript.
* [bcoin-org/bcoin](https://github.com/bcoin-org/bcoin) - Javascript bitcoin library for node.js and browsers
* [stdlib-js/stdlib](https://github.com/stdlib-js/stdlib) - ✨ Standard library for JavaScript and Node.js. ✨
* [rgrove/rawgit](https://github.com/rgrove/rawgit) - Served files from raw.githubusercontent.com, but with the correct content types. No longer actively developed.
* [paypal/accessible-html5-video-player](https://github.com/paypal/accessible-html5-video-player) - Accessible HTML5 Video Player
* [jekyll/jekyll-admin](https://github.com/jekyll/jekyll-admin) - A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites.
* [telerik/kendo-ui-core](https://github.com/telerik/kendo-ui-core) - An HTML5, jQuery-based widget library for building modern web apps.
* [DominicTobias/react-image-crop](https://github.com/DominicTobias/react-image-crop) - A responsive image cropping tool for React
* [TeehanLax/Hyperlapse.js](https://github.com/TeehanLax/Hyperlapse.js) - JavaScript hyper-lapse utility for Google Street View.
* [farzher/fuzzysort](https://github.com/farzher/fuzzysort) - Fast SublimeText-like fuzzy search for JavaScript.
* [survivejs/webpack-book](https://github.com/survivejs/webpack-book) - From apprentice to master (CC BY-NC-ND)
* [kylefox/jquery-modal](https://github.com/kylefox/jquery-modal) - The simplest possible modal for jQuery
* [LeaVerou/bliss](https://github.com/LeaVerou/bliss) - Blissful JavaScript
* [caiogondim/fast-memoize.js](https://github.com/caiogondim/fast-memoize.js) - :rabbit2: Fastest possible memoization library
* [js-csp/js-csp](https://github.com/js-csp/js-csp) - CSP channels for Javascript (like Clojurescript's core.async, or Go)
* [reduxjs/redux-mock-store](https://github.com/reduxjs/redux-mock-store) - A mock store for testing Redux async action creators and middleware.
* [jxcore/jxcore](https://github.com/jxcore/jxcore) - Evented IO for ChakraCore, SpiderMonkey & V8 JavaScript
* [francoischalifour/medium-zoom](https://github.com/francoischalifour/medium-zoom) - 🔎🖼 A JavaScript library for zooming images like Medium
* [expressjs/compression](https://github.com/expressjs/compression) - Node.js compression middleware
* [speakeasyjs/speakeasy](https://github.com/speakeasyjs/speakeasy) - Two-factor authentication for Node.js. One-time passcode generator (HOTP/TOTP) with support for Google Authenticator.
* [formly-js/angular-formly](https://github.com/formly-js/angular-formly) - JavaScript powered forms for AngularJS
* [loryjs/lory](https://github.com/loryjs/lory) - ☀ Touch enabled minimalistic slider written in vanilla JavaScript.
* [thisandagain/sentiment](https://github.com/thisandagain/sentiment) - AFINN-based sentiment analysis for Node.js.
* [sdras/array-explorer](https://github.com/sdras/array-explorer) - ⚡️ A resource to help figure out what JavaScript array method would be best to use at any given time
* [amazon-archives/aws-mobile-react-native-starter](https://github.com/amazon-archives/aws-mobile-react-native-starter) - AWS Mobile React Native Starter App     https://aws.amazon.com/mobile
* [tcorral/Design-Patterns-in-Javascript](https://github.com/tcorral/Design-Patterns-in-Javascript) - Design Patterns applied to Javascript code.
* [angular/material-start](https://github.com/angular/material-start) - Starter Repository for AngularJS Material
* [Fooidge/PleaseJS](https://github.com/Fooidge/PleaseJS) - JavaScript Library for creating random pleasing colors and color schemes
* [hasura/graphqurl](https://github.com/hasura/graphqurl) - curl for GraphQL with autocomplete, subscriptions and GraphiQL. Also a dead-simple universal javascript GraphQL client.
* [schmich/instascan](https://github.com/schmich/instascan) - HTML5 QR code scanner using your webcam
* [mxflutter/mxflutter](https://github.com/mxflutter/mxflutter) - 基于JavaScript 的Flutter框架 mxflutter
* [sindresorhus/meow](https://github.com/sindresorhus/meow) - 🐈 CLI app helper
* [AudithSoftworks/Uniform](https://github.com/AudithSoftworks/Uniform) - A jQuery plugin to make your form controls look how you want them to. Now with HTML-5 attributes!
* [isaacs/minimatch](https://github.com/isaacs/minimatch) - a glob matcher in javascript
* [creeperyang/blog](https://github.com/creeperyang/blog) - 前端博客，关注基础知识和性能优化。
* [jedireza/drywall](https://github.com/jedireza/drywall) - :construction: Project moved, see Aqua and Frame
* [spite/ccapture.js](https://github.com/spite/ccapture.js) - A library to capture canvas-based animations at a fixed framerate
* [SAP/openui5](https://github.com/SAP/openui5) - OpenUI5 lets you build enterprise-ready web applications, responsive to all devices, running on almost any browser of your choice.
* [zxlie/WeixinApi](https://github.com/zxlie/WeixinApi) - 专门用于微信公众平台的Javascript API
* [ctimmerm/axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) - Axios adapter that allows to easily mock requests
* [schteppe/p2.js](https://github.com/schteppe/p2.js) - JavaScript 2D physics library
* [stalniy/casl](https://github.com/stalniy/casl) - CASL is an isomorphic authorization JavaScript library which restricts what resources a given user is allowed to access
* [binux/yaaw](https://github.com/binux/yaaw) - Yet Another Aria2 Webui in pure HTML/CSS/Javascirpt
* [mar10/fancytree](https://github.com/mar10/fancytree) - JavaScript tree view / tree grid plugin with support for keyboard, inline editing, filtering, checkboxes, drag'n'drop, and lazy loading
* [react-native-community/react-native-side-menu](https://github.com/react-native-community/react-native-side-menu) - Side menu component for React Native
* [bgrins/spectrum](https://github.com/bgrins/spectrum) - The No Hassle JavaScript Colorpicker
* [ronami/minipack](https://github.com/ronami/minipack) - 📦 A simplified example of a modern module bundler written in JavaScript
* [mrdavidlaing/javascript-koans](https://github.com/mrdavidlaing/javascript-koans) - Koans to learn Javascript
* [ExpressGateway/express-gateway](https://github.com/ExpressGateway/express-gateway) - A microservices API Gateway built on top of Express.js
* [workshopper/javascripting](https://github.com/workshopper/javascripting) - Learn JavaScript by adventuring around in the terminal.
* [aluxian/Messenger-for-Desktop](https://github.com/aluxian/Messenger-for-Desktop) - This is not an official Facebook product, and is not affiliated with, or sponsored or endorsed by, Facebook.
* [terrymun/Fluidbox](https://github.com/terrymun/Fluidbox) - Replicating and improving the lightbox module seen on Medium with fluid transitions.
* [gildas-lormeau/SingleFile](https://github.com/gildas-lormeau/SingleFile) - Web Extension for Firefox/Chrome/Edge and CLI tool to save a faithful copy of an entire web page in a single HTML file
* [lo-th/Oimo.js](https://github.com/lo-th/Oimo.js) - Lightweight 3d physics engine for javascript
* [npm/tink](https://github.com/npm/tink) - a dependency unwinder for javascript
* [avajs/ava](https://github.com/avajs/ava) - Node.js test runner that lets you develop with confidence 🚀
* [ianstormtaylor/slate](https://github.com/ianstormtaylor/slate) - A completely customizable framework for building rich text editors. (Currently in beta.)
* [julianshapiro/velocity](https://github.com/julianshapiro/velocity) - Accelerated JavaScript animation.
* [goldfire/howler.js](https://github.com/goldfire/howler.js) - Javascript audio library for the modern web.
* [vuejs/vue-router](https://github.com/vuejs/vue-router) - 🚦 The official router for Vue.js.
* [angular/material](https://github.com/angular/material) - Material design for AngularJS
* [wekan/wekan](https://github.com/wekan/wekan) - The open-source kanban (built with Meteor). Keep variable/table/field names camelCase. For translations, only add Pull Request changes to wekan/i18n/en.i18n.json , other translations are done at https://transifex.com/wekan/wekan only.
* [graphql/graphql-js](https://github.com/graphql/graphql-js) - A reference implementation of GraphQL for JavaScript
* [fabricjs/fabric.js](https://github.com/fabricjs/fabric.js) - Javascript Canvas Library, SVG-to-Canvas (& canvas-to-SVG) Parser
* [js-cookie/js-cookie](https://github.com/js-cookie/js-cookie) - A simple, lightweight JavaScript API for handling browser cookies
* [validatorjs/validator.js](https://github.com/validatorjs/validator.js) - String validation
* [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) - 网易云音乐 Node.js API service
* [alsotang/node-lessons](https://github.com/alsotang/node-lessons) - :closed_book:《Node.js 包教不包会》 by alsotang
* [mysqljs/mysql](https://github.com/mysqljs/mysql) - A pure node.js JavaScript Client implementing the MySQL protocol.
* [quasarframework/quasar](https://github.com/quasarframework/quasar) - Quasar Framework - Build high-performance VueJS user interfaces in record time
* [statsd/statsd](https://github.com/statsd/statsd) - Daemon for easy but powerful stats aggregation
* [bower/bower](https://github.com/bower/bower) - A package manager for the web
* [hapijs/joi](https://github.com/hapijs/joi) - The most powerful data validation library for JS
* [enyo/dropzone](https://github.com/enyo/dropzone) - Dropzone is an easy to use drag'n'drop library. It supports image previews and shows nice progress bars.
* [kriskowal/q](https://github.com/kriskowal/q) - A promise library for JavaScript
* [jasmine/jasmine](https://github.com/jasmine/jasmine) - Simple JavaScript testing framework for browsers and node.js
* [scrumpy/tiptap](https://github.com/scrumpy/tiptap) - A rich-text editor for Vue.js
* [rematch/rematch](https://github.com/rematch/rematch) - A Redux Framework
* [lyswhut/lx-music-desktop](https://github.com/lyswhut/lx-music-desktop) - 一个基于 electron 的音乐软件
* [naver/billboard.js](https://github.com/naver/billboard.js) - :bar_chart: Re-usable, easy interface JavaScript chart library based on D3.js
* [zdhxiong/mdui](https://github.com/zdhxiong/mdui) - MDUI 是一个基于 Material Design 的前端框架。
* [ondras/my-mind](https://github.com/ondras/my-mind) - Online Mindmapping Software
* [aws-samples/aws-mobile-react-native-starter](https://github.com/aws-samples/aws-mobile-react-native-starter) - AWS Mobile React Native Starter App     https://aws.amazon.com/mobile
* [ondras/wwwsqldesigner](https://github.com/ondras/wwwsqldesigner) - WWW SQL Designer, your online SQL diagramming tool
* [jakejs/jake](https://github.com/jakejs/jake) - JavaScript build tool, similar to Make or Rake. Built to work with Node.js.
* [wojodesign/simplecart-js](https://github.com/wojodesign/simplecart-js) - A simple javascript shopping cart that easily integrates with your current website.
* [FortAwesome/vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) - Font Awesome 5 Vue component
* [jpillora/notifyjs](https://github.com/jpillora/notifyjs) - Notify.js - A simple, versatile notification library
* [julmot/mark.js](https://github.com/julmot/mark.js) - JavaScript keyword highlighting. Mark text with with options that fit every application. Also available as jQuery plugin.
* [YvetteLau/Blog](https://github.com/YvetteLau/Blog) - 【前端进阶】优质博文
* [bbc/peaks.js](https://github.com/bbc/peaks.js) - JavaScript UI component for interacting with audio waveforms
* [riophae/vue-treeselect](https://github.com/riophae/vue-treeselect) - A multi-select component with nested options support for Vue.js
* [coresmart/persistencejs](https://github.com/coresmart/persistencejs) - persistence.js is an asynchronous Javascript database mapper library. You can use it in the browser, as well on the server (and you can share data models between them).
* [mljs/ml](https://github.com/mljs/ml) - Machine learning tools in JavaScript
* [facebook/rebound-js](https://github.com/facebook/rebound-js) - Spring dynamics in JavaScript.
* [DavidWells/isomorphic-react-example](https://github.com/DavidWells/isomorphic-react-example) - Deprecated! ReactJS + NodeJS ( express ) demo tutorial with video. Universal/Isomorphic JS = Shared JavaScript that runs on both the client & server.
* [victordibia/handtrack.js](https://github.com/victordibia/handtrack.js) - A library for prototyping realtime hand detection (bounding box), directly in the browser.
* [node-webot/weixin-robot](https://github.com/node-webot/weixin-robot) - 微信公共帐号自动回复机器人 A Node.js robot for wechat.
* [pattern-lab/patternlab-node](https://github.com/pattern-lab/patternlab-node) - The Node version of Pattern Lab
* [TylerBrock/mongo-hacker](https://github.com/TylerBrock/mongo-hacker) - MongoDB Shell Enhancements for Hackers
* [ayojs/ayo](https://github.com/ayojs/ayo) - A fork of Node.js. Humans before technology.
* [justjavac/ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN) - :cancer: 一个 Chrome 插件：将 Google CDN 替换为国内的。
* [rdio/jsfmt](https://github.com/rdio/jsfmt) - For formatting, searching, and rewriting JavaScript.
* [nytimes/ice](https://github.com/nytimes/ice) - track changes with javascript
* [Jianru-Lin/lambda-view](https://github.com/Jianru-Lin/lambda-view) - A New Tool for Reading JavaScript Code since 2017
* [asciidwango/js-primer](https://github.com/asciidwango/js-primer) - :book: JavaScript Primer - 迷わないための入門書
* [sodium-friends/learntocrypto](https://github.com/sodium-friends/learntocrypto) - Learn to crypto workshop
* [shzlw/zeu](https://github.com/shzlw/zeu) - A JavaScript library for real-time visualization
* [ondras/rot.js](https://github.com/ondras/rot.js) - ROguelike Toolkit in JavaScript
* [camwiegert/baffle](https://github.com/camwiegert/baffle) - A tiny javascript library for obfuscating and revealing text in DOM elements. :astonished:
* [galaxykate/tracery](https://github.com/galaxykate/tracery) - Tracery: a story-grammar generation library for javascript
* [getify/asynquence](https://github.com/getify/asynquence) - Asynchronous flow control (promises, generators, observables, CSP, etc)
* [wise9/enchant.js](https://github.com/wise9/enchant.js) - A simple JavaScript framework for creating games and apps
* [alexmacarthur/typeit](https://github.com/alexmacarthur/typeit) - The most versatile JavaScript animated typing utility on the planet.
* [Valve/fingerprintjs2](https://github.com/Valve/fingerprintjs2) - Modern & flexible browser fingerprinting library
* [clappr/clappr](https://github.com/clappr/clappr) - :clapper: An extensible media player for the web.
* [ppoffice/hexo-theme-icarus](https://github.com/ppoffice/hexo-theme-icarus) - A simple, delicate, and modern theme for the static site generator Hexo.
* [apifytech/apify-js](https://github.com/apifytech/apify-js) - Apify SDK — The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.
* [sproutcore/sproutcore](https://github.com/sproutcore/sproutcore) - JavaScript Application Framework - JS library only
* [denysdovhan/wtfjs](https://github.com/denysdovhan/wtfjs) - A list of funny and tricky JavaScript examples
* [localForage/localForage](https://github.com/localForage/localForage) - 💾 Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API.
* [sampotts/plyr](https://github.com/sampotts/plyr) - A simple HTML5, YouTube and Vimeo player
* [lovell/sharp](https://github.com/lovell/sharp) - High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP and TIFF images. Uses the libvips library.
* [benweet/stackedit](https://github.com/benweet/stackedit) - In-browser Markdown editor
* [highlightjs/highlight.js](https://github.com/highlightjs/highlight.js) - Javascript syntax highlighter
* [eslint/eslint](https://github.com/eslint/eslint) - Find and fix problems in your JavaScript code.
* [getredash/redash](https://github.com/getredash/redash) - Make Your Company Data Driven. Connect to any data source, easily visualize, dashboard and share your data.
* [mojs/mojs](https://github.com/mojs/mojs) - The motion graphics toolbelt for the web
* [laurent22/joplin](https://github.com/laurent22/joplin) - Joplin - an open source note taking and to-do application with synchronization capabilities for Windows, macOS, Linux, Android and iOS. Forum: https://discourse.joplinapp.org/
* [wulkano/kap](https://github.com/wulkano/kap) - An open-source screen recorder built with web technology
* [nicolodavis/boardgame.io](https://github.com/nicolodavis/boardgame.io) - Open Source Game Engine for Turn-Based Games
* [lk-geimfari/awesomo](https://github.com/lk-geimfari/awesomo) - An extensive list of cool open source projects written in С, C++, Clojure, Lisp, Elixir, Erlang, Elm, Golang, Haskell, JavaScript, Lua, OCaml, Python, R, Ruby, Rust, Scala etc.
* [thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist) - 🗂 The perfect Front-End Checklist for modern websites and meticulous developers
* [alibaba/ice](https://github.com/alibaba/ice) - 🚀Simple and friendly front-end development system（飞冰，简单而友好的前端研发体系 ）https://ice.work/
* [homebridge/homebridge](https://github.com/homebridge/homebridge) - HomeKit support for the impatient
* [ExactTarget/fuelux](https://github.com/ExactTarget/fuelux) - Extends Twitter Bootstrap with additional lightweight JavaScript controls. Easy to install, customize, update, and optimize. All functionality covered by live documentation and unit tests.
* [react-community/create-react-native-app](https://github.com/react-community/create-react-native-app) - Create a React Native app on any OS with no build config.
* [mishoo/UglifyJS2](https://github.com/mishoo/UglifyJS2) -  JavaScript parser / mangler / compressor / beautifier toolkit
* [mathjax/MathJax](https://github.com/mathjax/MathJax) - Beautiful math in all browsers
* [nfarina/homebridge](https://github.com/nfarina/homebridge) - HomeKit support for the impatient
* [pixijs/pixi.js](https://github.com/pixijs/pixi.js) - The HTML5 Creation Engine: Create beautiful digital content with the fastest, most flexible 2D WebGL renderer.
* [airbnb/enzyme](https://github.com/airbnb/enzyme) - JavaScript Testing utilities for React
* [scrollreveal/scrollreveal](https://github.com/scrollreveal/scrollreveal) - Animate elements as they scroll into view.
* [PatrickJS/angular-starter](https://github.com/PatrickJS/angular-starter) - :tada: An Angular Starter kit featuring Angular (Router, Http, Forms, Services, Tests, E2E, Dev/Prod, HMR, Async/Lazy Routes, AoT via ngc), Karma, Protractor, Jasmine, Istanbul, TypeScript, TsLint, Codelyzer, Hot Module Replacement, @types, and Webpack

## Podcasts
* [JavaScript Air](https://javascriptair.com/) - The live video broadcast podcast all about JavaScript and the Web platform.
* [Web of Tomorrow](http://www.weboftomorrowpodcast.com/) - Podcast about JavaScript for beginners.
* [JavaScript Jabber](https://devchat.tv/js-jabber) - A weekly podcast about JavaScript, including Node.js, Front-End Technologies, Careers, Teams and more.

# Worth Reading

* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - Possibly the best book written on modern JavaScript, completely readable online for free, or can be bought to support the author.
* [braziljs/js-the-right-way](https://github.com/braziljs/js-the-right-way/) - An easy-to-read, quick reference for JS best practices, accepted coding standards, and links around the Web.
* [JSbooks](https://github.com/revolunet/JSbooks) - Directory of free JavaScript ebooks.
* [Superhero.js](http://superherojs.com) - A collection of resources about creating, testing and maintaining a large JavaScript code base.
* [SJSJ](https://github.com/HugoGiraudel/SJSJ) - Simplified JavaScript Jargon is a community-driven attempt at explaining the loads of buzzwords making the current JavaScript ecosystem in a few simple words.
* [How to Write an Open Source JavaScript Library](https://github.com/sarbbottam/write-an-open-source-js-lib) - A comprehensive guide through a set of steps to publish a JavaScript open source library.
* [JavaScript Tutorials](https://hackr.io/tutorials/learn-javascript) - Learn Javascript online from a diverse range of user ranked online tutorials.
* [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS) - Pragmatic, balanced FP in JavaScript.
* [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) - Clean Code concepts adapted for JavaScript.


# Other Awesome Lists
* [sotayamashita/awesome-css](https://github.com/sotayamashita/awesome-css)
* [emijrp/awesome-awesome](https://github.com/emijrp/awesome-awesome)
* [bayandin/awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
* [sindresorhus/awesome](https://github.com/sindresorhus/awesome)
* [jnv/list](https://github.com/jnv/lists)
* [gianarb/angularjs](https://github.com/gianarb/awesome-angularjs)
* [peterkokot/awesome-dojo](https://github.com/peterkokot/awesome-dojo)
* [addyosmani/es6-tools](https://github.com/addyosmani/es6-tools)
* [ericdouglas/ES6-Learning](https://github.com/ericdouglas/ES6-Learning)
* [obetomuniz/awesome-webcomponents](https://github.com/obetomuniz/awesome-webcomponents)
* [willianjusten/awesome-svg](https://github.com/willianjusten/awesome-svg)
* [davidsonfellipe/awesome-wpo](https://github.com/davidsonfellipe/awesome-wpo)
* [instanceofpro/awesome-backbone](https://github.com/sadcitizen/awesome-backbone)
* [enaqx/awesome-react](https://github.com/enaqx/awesome-react)
* [bolshchikov/js-must-watch](https://github.com/bolshchikov/js-must-watch)
* [peterkokot/awesome-jquery](https://github.com/peterkokot/awesome-jquery)
* [davidyezsetz/you-might-not-need-jquery-plugins](https://github.com/davidyezsetz/you-might-not-need-jquery-plugins)
* [MaximAbramchuck/awesome-interviews](https://github.com/MaximAbramchuck/awesome-interview-questions)
* [denolib/awesome-deno](https://github.com/denolib/awesome-deno)

# Contributing

Contributions welcome! 

# License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [chencheng](https://github.com/sorrycc) has waived all copyright and related or neighboring rights to this work.