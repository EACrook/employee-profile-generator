const Manager = require('../lib/Manager');

//jest.mock('../lib/Potion');


test('When i make a manager it has a name', () => {
 

    var testValue = 'Sarah'
    var testManager = new Manager(1, testValue, 'test@gmail.com', 555)

    expect(testManager.name).toEqual(testValue)
});

// test("gets player's stats as an object", () => {
//     const player = new Player('Dave');

//     expect(player.getStats()).toHaveProperty('potions');
//     expect(player.getStats()).toHaveProperty('health');
//     expect(player.getStats()).toHaveProperty('strength');
//     expect(player.getStats()).toHaveProperty('agility');
// })

// test('get inventory from player or returns false', () => {
//     const player = new Player('Dave');

//     expect(player.getInventory()).toEqual(expect.any(Array));

//     player.inventory = [];

//     expect(player.getInventory()).toEqual(false);
// });

// test("gets player's health value", () => {
//     const player = new Player('Dave');

//     expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
// })

// test('checks if player is alive or not', () => {
//     const player = new Player('Dave');

//     expect(player.isAlive()).toBeTruthy();

//     player.health = 0;

//     expect(player.isAlive()).toBeFalsy();
// });

// test("subtracts from player's health", () => {
//     const player = new Player('Dave');
//     const oldHealth = player.health;

//     player.reduceHealth(5);

//     expect(player.health).toBe(oldHealth - 5);

//     player.reduceHealth(99999);

//     expect(player.health).toBe(0);
// });

// test("gets player's attach value", () => {
//     const player = new Player('Dave');
//     player.strength = 10;

//     expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
//     expect(player.getAttackValue()).toBeLessThanOrEqual(15);
// });

// test('uses a potion from inventory', () => {
//     const player = new Player('Dave');
//     player.inventory = [new Potion(), new Potion(), new Potion()];
//     const oldCount = player.inventory.length;

//     player.usePotion(1);

//     expect(player.inventory.length).toBeLessThan(oldCount);
// });
