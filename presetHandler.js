// Use this presets array inside your presetHandler
const presets = require("./presets");

// Complete this function:
const presetHandler = (req, ind, arr) => {
    if(0 > ind || ind > presets.length) {
        return [404];
    }

    switch (req) {
    case "GET":
        return [200, presets[ind]];
    case "PUT":
        if(arr) {
            presets[ind] = arr;
            return [200, presets[ind]];
        }
    default:
      return [400];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
