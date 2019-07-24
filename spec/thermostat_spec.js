describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees

  it('starts at 20 degrees by default', function() {
    expect(thermostat.displayTemp()).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.increaseTemp(3);
    expect(thermostat.displayTemp()).toEqual(23);
  });

  it('can decrease the temperature', function() {
    thermostat.decreaseTemp(3);
    expect(thermostat.displayTemp()).toEqual(17);
  });

  it('has a minimum temp', function() {
    expect(function(){thermostat.decreaseTemp(11);}).toThrowError('cannot lower temperature below 10 degrees');
    expect(thermostat.displayTemp()).toEqual(20);
  });

  it('has a power-saving mode - ON ', function() {
    expect(thermostat.displayMode()).toEqual(true);
  });

  it('has a power-saving mode - OFF', function() {
    thermostat.changeMode();
    expect(thermostat.displayMode()).toEqual(false);
  });

  it('power-saving mode has maximum temp of 25 ', function() {
    expect(function(){thermostat.increaseTemp(6);}).toThrowError('Power-saving mode is on. Maximum temperature is 25 degrees');
  });

  it('thermostat has maximum temp of 32 ', function() {
    thermostat.changeMode();
    expect(function(){thermostat.increaseTemp(13);}).toThrowError('Maximum temperature is 32 degrees');
  });

  it('reset temperature to 20', function() {
    thermostat.increaseTemp(2);
    thermostat.reset();
    expect(thermostat.displayTemp()).toEqual(20);
  });

  it('tells you current energy usage', function() {
    expect(thermostat.displayUsage()).toEqual('medium-usage');
    thermostat.decreaseTemp(3);
    expect(thermostat.displayUsage()).toEqual('low-usage');
    thermostat.changeMode();
    thermostat.increaseTemp(10);
    expect(thermostat.displayUsage()).toEqual('high-usage');
  });
});
