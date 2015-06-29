# casperStarter
> A grunt + bower + less version of the casper theme for Ghost.

## Why?
This theme version is built on top of a [grunt](http://gruntjs.com/) structure, with the [bower](http://bower.io/) upgrade, making it incredibly flexible and scalable from the start. It's a perfect starting point if you want to create your own theme on top of an existig casper theme.
All the CSS has been split up into separate files, so you can easily change or simply chose which ones to use, or not.

## Features

- Follows Ghost theme best practices
- It has the base file structure and CSS style of Casper
- CSS has been split into separated files to make the overwrite easier
- User LESS instead of CSS
- It has bower included
- It has modernizr.js included
- It has normalize.css added the right way
- It features code minification & concatenation
- It has jslint built in the development

## Install
Just add the casperStarter folder to your `/themes` folder, and activate the theme in the admin panel.

## Structure
Inside the casperStarter theme there are the regular `/assets` and `/partials` folder, plus all the style and code necessary to run casper. The CSS has been divided into blocks and turned into `.less`. There is also an extra `/js/casperStarter.js` and a `/css/casperStarter.less` for you to add custom code, outside of the existing casper code.

On top of this, there are some other additional files and folders to make the actual grunt build, staging and release.
The files inside /js and /css are the ones being procesed by grunt and they are where you must add custom code. The remaining files don't need any build.

#### Staging and Release folders
None of these folders are present in the theme by default, they are a result of different build stages.

- staging: Where the `/assets` files are automaticaly built into, unminified, and the ones you should use during the development stage;
- dist: Where the final release files, built, concatenated and minified, will be.

## Usage

#### Install dependencies
After adding the theme, command-line to it and do a `npm install`. That will install all the necessary dependencies.
Next, do a `bower install` to install al the bower dependencies, and then a `grunt watcher` to start the watcher.

#### Edit files
If your watcher is running, the edited `.js` and `.less` files will be built into `/staging`. Notice that by default the `default.hbs` file is pointing to those files. When releasing, you must point them to the `/dist` folder instead, like so:

```html
<link rel="stylesheet" type="text/css" href="/dist/css/casperStarter.min.css" />
...
...
<script src="/dist/js/casperStarter.js"></script>
```

The staging task, on top of other neat things, is compiling the `.less` files into `.css` files, on by one. The release task is doing the same, however, it's concatenating all the existin `.css` files.

#### Grunt tasks

- *grunt watcher*: Will start the watcher;
- *grunt staging*: Will take care of the whole build of the `/staging` folder (this will be automaticaly done by the watcher, if running);
- *grunt release*: Will take care of the whole build of the `/dist` folder.

