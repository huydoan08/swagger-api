import { Injectable } from '@nestjs/common';
import { User } from 'src/dto/user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    create(user: User): User {
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    update(id: number, updateUser: Partial<User>): User | undefined {
        const user = this.findOne(id);
        if (user) {
            Object.assign(user, updateUser);
            return user;
        }
        return undefined;
    }

    remove(id: number): boolean {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}