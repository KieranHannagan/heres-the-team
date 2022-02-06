const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name){
        super(name);

        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return this.role;
    }
}