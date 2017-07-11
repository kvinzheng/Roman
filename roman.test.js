var roman = require('./roman.js')
let expect = require('chai').expect;

describe('testing math', function(){
  it('expect math to be correct', function(){
    expect(roman('I')).to.deep.equal('1');
    expect(roman('IV')).to.deep.equal('4');
    expect(roman('V')).to.deep.equal('5');
    expect(roman('X')).to.deep.equal('10');
    expect(roman('XV')).to.deep.equal('15');
    expect(roman('L')).to.deep.equal('50');
  });
});
