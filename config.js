const fs = require('fs')
const pkg = require('./package.json')
const yaml = require('js-yaml')

const wpSettings = yaml.safeLoad(fs.readFileSync('site.yml', 'utf8'))
const themeName = pkg.name

module.exports = {
  dirs: {
    src: './src',
    dest: wpSettings.synced_folder + '/wp-content/themes/' + themeName
  },
  wpSettings: wpSettings,
  url: wpSettings.hostname,
  themeName: themeName
}
