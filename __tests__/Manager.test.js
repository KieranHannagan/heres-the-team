const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Guy', '21', 'email123@email.com', '88');

    expect(manager.name).toBe('Guy');
    expect(manager.id).toBe('21');
    expect(manager.email).toBe('email123@email.com');
    expect(manager.officeNumber).toBe('88');
});


test('getRole returns Manager', () => {
    const manager = new Manager('Guy', '21', 'email123@email.com', '88');

    const role = manager.getRole();

    expect(role).toBe('Manager');
});

test('getOfficeNumber returns Office Number', () => {
    const manager = new Manager('Guy', '21', 'email123@email.com', '88');

    const officeNumber = manager.getOfficeNumber();

    expect(officeNumber).toBe('88');
});


