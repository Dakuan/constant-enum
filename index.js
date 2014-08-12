var _ = require('underscore');

module.exports = function (consts) {
    var res = _(arguments).reduce(function (memo, constant) {
        memo[constant] = constant;
        return memo;
    }, {});

    return Object.freeze(res);
};
