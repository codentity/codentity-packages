'use strict';

let CodentityPackages = require('../../lib/CodentityPackages');

describe('CodentityPackages', function () {
  describe('.list', function () {
    beforeEach(function (done) {
      CodentityPackages.list().then((list) => {
        this.list = list;
        done();
      }).catch((err) => {
        console.log(err.stack);
        done();
      });
    });
    it('works', function () {
      expect(this.list).not.to.contain('.DS_Store');
    });
  });
});
