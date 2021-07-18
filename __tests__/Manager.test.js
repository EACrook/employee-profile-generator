const Manager = require('../lib/Manager');

//jest.mock('../lib/Potion');


test('Manager has an office number', () => {
    var office = 108
    var manager = new Manager(1, "Tina", 'test@gmail.com', office)

    expect(manager.officeNumber).toEqual(expect.any(Number))
    expect(manager.getOfficeNumber()).toBe(office)
});
