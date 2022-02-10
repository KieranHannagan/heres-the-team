const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Guy', '21', 'email123@email.com');

    expect(employee.name).toBe('Guy');
    expect(employee.id).toBe('21');
    expect(employee.email).toBe('email123@email.com');
});

test('getName() returns their name', () => {
    const employee = new Employee('Guy', '21', 'email123@email.com');

    const name = employee.getName()
    expect(name).toBe('Guy');
});

test('getId() returns their id', () => {
    const employee = new Employee('Guy', '21', 'email123@email.com');

    const id = employee.getId()
    expect(id).toBe('21');

});

test('getEmail() returns their email', () => {
    const employee = new Employee('Guy', '21', 'email123@email.com');

    const email = employee.getEmail()
    expect(email).toBe('email123@email.com');
});



