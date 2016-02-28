'use strict';

let path = require('path');
let fs = require('fs');

const PACKAGE_DIR = path.resolve(__dirname, '../../packages');

class PackageHelper {
  static listSync () {
    return new PackageHelper().listSync();
  }
  static loadSync () {
    return new PackageHelper().loadSync();
  }
  static getScenario (pkgId) {
    return new PackageHelper().getScenario(pkgId);
  }
  listSync () {
    var filePath = fs.readdirSync(PACKAGE_DIR);
    return this._getPackagesFromfilePath(filePath);
  }
  loadSync () {
    return this._getAllPackageConfig(this.listSync());
  }
  getScenario (pkgId) {
    return require(`${PACKAGE_DIR}/${pkgId}/scenarios.js`);
  }
  _getPackagesFromfilePath (filePath) {
    return filePath.filter(function (pkgId) {
      return pkgId !== '.DS_Store';
    });
  }
  _getAllPackageConfig (packages) {
    return packages.map(this._getPackageConfig.bind(this));
  }
  _getPackageConfig (pkgId) {
    var configPath = path.join(this._getPackagePath(pkgId), 'config');
    var config = require(configPath);
    config.id = pkgId;
    return config;
  }
  _getPackagePath (pkgId) {
    return path.resolve(PACKAGE_DIR, pkgId);
  }
}

module.exports = PackageHelper;
