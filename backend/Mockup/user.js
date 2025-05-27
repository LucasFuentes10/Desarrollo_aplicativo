export class UserMockup{
    static users = [
        {
            id: 1,
            username: 'admin',
            password: '1234',
            email: '',
        },
        {
            username: 'operator',
            password: '12345',
            name:'Operator',
            email: '',
        },
    ];
    static async getSingleOrNullByUsername(username){            
       return this.users.find(u => u.username == username);
    }
};