/*global describe it expect */
'use strict';

let expect = require('chai').expect;
let Codentity = require('codentity');
let PackageHelper = require('../helpers/PackageHelper');

const PACKAGES = PackageHelper.loadSync();

console.log(`---> ${PACKAGES.length} packages found`);

let codentity = new Codentity({
  packages: PACKAGES
});

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
    codentity.analyze(scenario.input).then((output) => {
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
