/* global describe, it */
'use strict';

let expect = require('chai').expect;
let Codentity = require('codentity');
let PackageHelper = require('../helpers/PackageHelper');

const PACKAGES = PackageHelper.loadSync();

console.log(`---> ${PACKAGES.length} packages found`);

describe('Codentity', function () {
  if (process.env.PACKAGE) return testPackage(process.env.PACKAGE);
  testAllPackages();
});

function testAllPackages () {
  PACKAGES.forEach(function (pkg) {
    testPackage(pkg.id);
  });
}

function testPackage (pkgId) {
  describe(`"${pkgId}" package`, function () {
    PackageHelper.getScenario(pkgId).forEach(function (scenario) {
      runScenario(pkgId, scenario);
    });
  });
}

function runScenario (pkgId, scenario) {
  it(scenario.description, function (done) {
    var outputForPkg;
    Codentity.packages(PACKAGES)
    .filePaths(scenario.input.filePaths || [])
    .register(require('codentity-plugin-file'))
    .register(require('codentity-plugin-npm'))
    .register(require('codentity-plugin-bower'))
    .provide((query, key) => {
      return scenario.input[key];
    })
    .analyze().then((output) => {
      outputForPkg = output[pkgId];
      expect(outputForPkg).to.deep.have.members(scenario.output);
      done();
    }).catch((err) => {
      console.log('EXPECTED:');
      console.dir(scenario.output);
      console.log('ACTUAL:');
      console.dir(outputForPkg);
      console.log(err.stack);
      process.exit(1);
    });
  });
}
