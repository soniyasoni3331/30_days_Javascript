const obj = {
    firstName: "John",
    lastName: "Cooper",
    name: function(){
        return this.firstName + this.lastName;
    }
}

export default obj