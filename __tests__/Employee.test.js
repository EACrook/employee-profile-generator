const Employee = require('../lib/Employee.js');

test('verify employee id', () => {
    const id = 1
    const employee = new Employee(id)

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getId()).toBe(id);
})

test('verify employee name', () => {
    const name = 'Hello'
    const employee = new Employee(1, name);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toBe(name);
})

test('verify employee email', () => {
    const email = 'email@email.com'
    const employee = new Employee(1, 'Me', email)

    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getEmail()).toBe(email);
})