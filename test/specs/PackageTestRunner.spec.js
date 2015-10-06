'use strict';

let fs = require('fs');
let path = require('path');
let Codentity = require('codentity');
let CodentityPackages = require('../../lib/CodentityPackages');

let codentity = new Codentity({
  packages: CodentityPackages.loadSync()
});

const PACKAGES_DIR = path.resolve(__dirname, '../../packages');

describe('Codentity', function () {
  if (process.env.PACKAGE) return testPackage(process.env.PACKAGE)
  testAllPackages();
});

function testAllPackages () {
  codentity.packages().forEach(function (pkg) {
    testPackage(pkg.name);
  });
}

function testPackage (pkgName) {
  describe(`"${pkgName}" package`, function () {
    getScenariosForPackage(pkgName).forEach(function (scenario) {
      pkgName = pkgName.toLowerCase();
      runScenario(pkgName, scenario);
    });
  });
}

function getScenariosForPackage (pkgName) {
  return require(`${PACKAGES_DIR}/${pkgName}/scenarios.js`);
}

function runScenario (pkgName, scenario) {
  it(scenario.description, function () {
    var output;
    try {
      output = codentity.analyze(scenario.input);
    } catch (err) {
      console.log(err.stack);
      process.exit(1);
    }
    output = expect(output[pkgName]).to.deep.have.members(scenario.output);
  });
}
