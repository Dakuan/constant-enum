var en = require('./index.js'),
    expect = require('expect.js');
describe('ConstantEnum', function () {
    var subject;
    var consts = ['MON', 'TUES', 'WEDS'];

    beforeEach(function () {
        subject = en.apply(null, consts);
    });

    it('should add a key', function () {
        consts.forEach(function (prop) {
            expect(subject).to.have.property(prop);
        });
    });

    it('should have matching keys and values', function () {
        consts.forEach(function (prop) {
            expect(subject[prop]).to.equal(prop);
        });
    });

    it('should be frozen', function () {
        subject.foo = 'bar';
        subject[consts[0]] = 'bar';
        expect(subject).to.not.have.property('foo');
        expect(subject[consts[0]]).to.not.equal('bar');
    });
});
