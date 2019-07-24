function Thermostat() {
  this.default_temp = 20;
  this._temp = this.default_temp;
  this._saveMode = true;
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
};

Thermostat.prototype.displayTemp = function () {
  return this._temp;
};

Thermostat.prototype.increaseTemp = function (change) {
  var targetTemp = this._temp + change;
  if(targetTemp > this.MAX_TEMP_PSM_OFF) {
    throw new Error('Maximum temperature is 32 degrees');
  } else if (this._saveMode == true && targetTemp > this.MAX_TEMP_PSM_ON) {
    throw new Error('Power-saving mode is on. Maximum temperature is 25 degrees');
  }
  this._temp += change;
};

Thermostat.prototype.decreaseTemp = function (change) {
  if(this._temp - change < this.MINIMUM_TEMP) {
    throw new Error('cannot lower temperature below 10 degrees');
  }
  this._temp -= change;
};

Thermostat.prototype.displayMode = function () {
  return this._saveMode;
};

Thermostat.prototype.changeMode = function () {
  this._saveMode = !this._saveMode;
};

Thermostat.prototype.reset = function () {
  this._temp = this.default_temp;
};

Thermostat.prototype.displayUsage = function () {
  if(this._temp < 18) {
    return 'low-usage'
  } else if (this._temp < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
};
