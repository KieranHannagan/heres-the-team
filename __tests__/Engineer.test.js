const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Guy', '21', 'email123@email.com', 'thisIsMyGitHub');

    expect(engineer.name).toBe('Guy');
    expect(engineer.id).toBe('21');
    expect(engineer.email).toBe('email123@email.com');
    expect(engineer.gitHub).toBe('thisIsMyGitHub');
});

test('getGitHub returns their gitHub', () => {
    const engineer = new Engineer('Guy', '21', 'email123@email.com', 'thisIsMyGitHub');

    const gitHub = engineer.getGitHub();

    expect(gitHub).toBe('thisIsMyGitHub');
});

test('Role return Engineer', () => {
    const engineer = new Engineer('Guy', '21', 'email123@email.com', 'thisIsMyGitHub');

    const role = engineer.getRole();

    expect(role).toBe('Engineer');
});



