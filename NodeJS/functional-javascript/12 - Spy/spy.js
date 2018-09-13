function Spy(target, method) {
    var result = {count: 0};

    var originalFunctional = target[method];

    target[method] = function() {
        result.count += 1;
        return originalFunctional.apply(this, arguments);
    }

    return result;
}

module.exports = Spy