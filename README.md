# wp-react-spa-boilerplate

> Theme boilerplate for WordPress using WP REST API and React.js

## Contains

- [x] Babel
- [x] Browsersync
- [ ] CSS-Modules or CSS in JS
- [x] node-wpapi
- [x] React
- [x] React Hot Module Reload
- [x] React Routor
- [x] React Routor Redux
- [x] Redux
- [x] Redux DevTool
- [x] Standard
- [x] WordPress
- [x] webpack
- [x] VCCW
- [x] yarn

## Initial setup

development environment uses [VCCW v3](http://vccw.cc/).  

**1.**

```
$ git clone git@github.com:blivesta/wp-react-spa-boilerplate.git
```

**2.**

```
$ cd wp-react-spa-boilerplate
```

**3.**

```
$ yarn setup
```

This command also installs [VCCW](http://vccw.cc/).


### Result

`src` -> `wordpress/wp-content/themes/wp-react-spa-boilerplate`

```
|-- .vagrant/
|-- node_modules/
|-- provision/ (vccw)
|-- src/ (theme source files)
    |-- client/
    |-- functions.php
    |-- index.php
    |-- ...
|-- wordpess/
    |-- wp-content/
        |-- themes/
            |-- wp-react-spa-boilerplate/
                |-- bundle.js
                |-- functions.php
                |-- index.php
                |-- ...
|-- .editorconfig
|-- .gitignore
|-- ansible.cfg (vccw)
|-- config.js
|-- Movefile (vccw)
|-- package.json
|-- provision-post.sh (vccw)
|-- README.md
|-- run.js
|-- site.yml (vccw)
|-- Vagrantfile (vccw)
|-- webpack.config.js
|-- wp-cli.yml (vccw)
|-- yarn.lock
```

## Usage

```
$ yarn start
```

Production (compress)

```
$ yarn build
```

## License

Released under the MIT license.
