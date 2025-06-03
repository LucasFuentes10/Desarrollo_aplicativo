export class UserMockup{
    static users = [
        {
            id: 1,
            username: 'admin',
            password: '1234',
            fullName: 'Administrator',
            hashPassword: '$2b$10$Eixj1z5Z3f8e7Q9k1a5u6O0m4F8y5Z3f8e7Q9k1a5u6O0m4F8y5Z3f', // bcrypt hash of '1234'
            email: 'admin@fake.com',
            roles: ['admin'],
        },
        {
            id: 2,
            username: 'operator',
            password: '12345',
            hashPassword: '$2b$10$Eixj1z5Z3f8e7Q9k1a5u6O0m4F8y5Z3f8e7Q9k1a5u6O0m4F8y5Z3f', 
            fullName:'Operator',
            email: 'operator@fake.com',
            roles: ['operator'],
        },
    ];
    static async getSingleOrNullByUsername(username){            
       return this.users.find(u => u.username == username);
    }
    static async get(){
        return this.users;
    }
};