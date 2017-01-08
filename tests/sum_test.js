const expect = require('chai').expect;
const sum = require('../src/sum');

describe("sum", function() {
  it("sums two numbers", function() {
    expect(sum(1,2)).to.eql(3);
  });
});