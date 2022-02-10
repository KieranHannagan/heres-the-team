const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Guy', '21', 'email123@email.com', 'Yale');

    expect(intern.name).toBe('Guy');
    expect(intern.id).toBe('21');
    expect(intern.email).toBe('email123@email.com');
    expect(intern.school).toBe('Yale');
});

test('getSchool returns their school', () => {
    const intern = new Intern('Guy', '21', 'email123@email.com', 'Yale');

    const school = intern.getSchool();

    expect(school).toBe('Yale');
});

test('Role return Intern', () => {
    const intern = new Intern('Guy', '21', 'email123@email.com', 'Yale');

    const role = intern.getRole();

    expect(role).toBe('Intern');
});



