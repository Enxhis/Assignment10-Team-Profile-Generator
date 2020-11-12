// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        if(!name){
            throw new Error("You should provide a NAME");
        }
        if(!id){
            throw new Error("You should provide an ID");
        }
        if(!email){
            throw new Error("You should provide an EMAIL");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;