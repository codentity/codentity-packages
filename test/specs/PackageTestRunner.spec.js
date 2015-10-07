'use strict';

let fs = require('fs');
let path = require('path');
let Codentity = require('codentity');
let PackageHelper = require('../helpers/PackageHelper');

let codentity = new Codentity({
  packages: PackageHelper.loadSync()
});

const PACKAGES_DIR = path.resolve(__dirname, '../../packages');

describe('Codentity', function () {
  if (process.env.PACKAGE) return testPackage(process.env.PACKAGE);
  testAllPackages();
});

function testAllPackages () {
  codentity.packages().forEach(function (pkg) {
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
  it(scenario.description, function () {
    var output;
    try {
      output = codentity.analyze(scenario.input);
    } catch (err) {
      console.log(err.stack);
      process.exit(1);
    }
    output = expect(output[pkgId]).to.deep.have.members(scenario.output);
  });
}
