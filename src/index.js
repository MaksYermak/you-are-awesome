// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => property;
const createNotEnumerableProperty = (property) => {

    Object.defineProperty(Object.prototype, property, { value: 'value', enumerable: false });
    return property;
};
const createProtoMagicObject = () => {
    const magicObject = () => {};
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};

let iter = 0;
const incrementor = () => {
    iter++;
    return incrementor;
};
incrementor.toString = incrementor.valueOf = () => iter;

let asyncIter = 0;
const asyncIncrementor = () => {
    return new Promise(resolve => {
        asyncIter++;
        return resolve(asyncIter);
    });
};
function* createIncrementer() {
    let incr = 1;
    while(true)
        yield incr++;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(param);
        }, 1100);
    });
};
const getDeepPropertiesCount = (data) => {
    let count = 0;
    
    (countProperties = (obj) => {
        count += Object.keys(obj).length;

        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                countProperties(obj[key]);
            }
        });
    })(data);

    return count;
};
const createSerializedObject = () => ({
    toJSON: () => 'object',
    toString: () => 'object',
});
const toBuffer = () => {}; // I am not understand why this function is here
const sortByProto = (obj) => obj.sort((a, b) => a.__proto__ - b.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;