/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object, keys) => {
    console.log("🚀 ~ file: pick.js:8 ~ pick ~ pick:", pick)
    return keys.reduce((obj, key) => {
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        // eslint-disable-next-line no-param-reassign
        obj[key] = object[key];
      }
      console.log("🚀 ~ file: pick.js:16 ~ returnkeys.reduce ~ obj:", obj)
      console.log("🚀 ~ file: pick.js:16 ~ returnkeys.reduce ~ keys:", keys)
      return obj;
    }, {});
  };
  
  module.exports = pick;
  