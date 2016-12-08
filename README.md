# wp-react-spa-boilerplate

> Theme boilerplate for WordPress using WP REST API and React.js

## Contains

- [x] Babel
- [x] Browsersync
- [ ] CSS Modules or CSS in JS
- [x] React
- [x] React Hot Module Reload
- [x] React Routor
- [ ] Redux
- [x] Standard
- [x] WordPress
- [x] webpack
- [x] VCCW
- [x] yarn


## Initial setup

development environment uses [VCCW](http://vccw.cc/).  

0. ```
$ git clone git@github.com:blivesta/wp-react-spa-boilerplate.git`
```
0. ```
$ cd wp-react-spa-boilerplate
```
0. ```
$ yarn run setup
```
This command also installs VCCW.
0. ```
$ vagrant ssh
$ wp theme activate wp-react-spa-boilerplate
$ exit
```
0. ```
$ yarn run start
```

### Result

`src` -> `www/wordpress/wp-content/themes/wp-react-spa-boilerplate`

```
|-- .vagrant/
|-- node_modules/
|-- provision/ (vccw)
|-- src/ (theme source files)
    |-- client/
    |-- functions.php
    |-- index.php
    |-- ...
|-- www/
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
|-- config.js
|-- Movefile
|-- package.json
|-- README.md
|-- run.js
|-- site.yml (vccw config file)
|-- Vagrantfile (vccw)
|-- webpack.config.js
|-- yarn.lock
```

## Usage

```
$ yarn run start
```

Production (compress)

```
$ yarn run production
```

## License

Released under the MIT license.
