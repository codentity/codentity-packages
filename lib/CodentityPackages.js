'use strict';

let path = require('path');
let fs = require('fs');
let q = require('q');

const PACKAGE_DIR = path.resolve(__dirname, '../packages');

class CodentityPackages {
  constructor (options) {
    options = options || {};
    this._packageDir = options.packageDir || PACKAGE_DIR;
  }
  list () {
    var deferred = q.defer();
    fs.readdir(this._packageDir, (err, filePaths) => {
      if (err) return deferred.reject(err);
      deferred.resolve(this._getPackagesFromFilePaths(filePaths));
    });
    return deferred.promise;
  }
  static list () {
    return new CodentityPackages().list();
  }
  listSync () {
    var filePaths = fs.readdirSync(this._packageDir);
    return this._getPackagesFromFilePaths(filePaths);
  }
  static listSync () {
    return new CodentityPackages().listSync();
  }
  load () {
    return this.list()
    .then(this._getAllPackageConfig.bind(this));
  }
  static load () {
    return new CodentityPackages().load();
  }
  loadSync () {
    return this._getAllPackageConfig(this.listSync());
  }
  static loadSync () {
    return new CodentityPackages().loadSync();
  }
  getImageFilePath (pkgName) {
    return path.join(this._getPackagePath(pkgName), 'icon.png');
  }
  static getImageFilePath (pkgName) {
    return new CodentityPackages().getImageFilePath(pkgName);
  }
  _getPackagePath (pkgName) {
    return path.resolve(this._packageDir, pkgName);
  }
  _getAllPackageConfig (packages) {
    return packages.map(this._getPackageConfig.bind(this));
  }
  _getPackageConfig (pkgName) {
    var configPath = path.join(this._getPackagePath(pkgName), 'config');
    var config = require(configPath);
    config.id = pkgName;
    return config;
  }
  _getPackagesFromFilePaths (filePaths) {
    return filePaths.filter(function (pkgName) {
      return pkgName !== '.DS_Store';
    });
  }
}

module.exports = CodentityPackages;
