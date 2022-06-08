import { Injectable } from '@nestjs/common';
import { IDataService, UserNew } from '../../../core';
import { UserNewFactoryService } from './userNew-factory.service';
import {
  CreateUserNewDto,
  LoginUserNewDto,
  UpdateUserNewDto,
} from '../../../core/dtos';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import * as bcrypt from 'bcrypt';
import { hash } from 'bcrypt';

@Injectable()
export class UserNewService {
  constructor(
    private dataService: IDataService,
    private userFactoryService: UserNewFactoryService,
  ) {}

  async register(createUserDto: CreateUserNewDto): Promise<UserNew> {
    const saltOrRounds = 23;
    //create hash password
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );
    const newRecord = this.userFactoryService.createUser(createUserDto);
    return await this.dataService.usersNew.create(newRecord);
  }

  async auth(loginUserDto: LoginUserNewDto): Promise<UserNew> {
    const checkUser = (await this.dataService.usersNew.getAll()).find(
      (x) => x.email == loginUserDto.email,
    );
    if (checkUser) {
      //to compare/check a password, use the compare func
      let hash = checkUser.password;
      hash = await bcrypt.hash(hash, 23);
      const isMatch = await bcrypt.compare(checkUser.password, hash);
      if (isMatch) {
        //JWT yada OAuth tarzı bir yöntem eklenecek
        return checkUser;
      }
    }
  }

  async updateUser(id: any, updateUserDto: UpdateUserNewDto): Promise<UserNew> {
    const updateUser = this.userFactoryService.updateUser(updateUserDto);
    return await this.dataService.usersNew.update(id, updateUser);
  }

  async deleteUser(id: any): Promise<UserNew> {
    return await this.dataService.usersNew.delete(id);
  }

  async getAllUser(): Promise<UserNew[]> {
    return await this.dataService.usersNew.getAll();
  }

  async getOneUser(id: any): Promise<UserNew> {
    return await this.dataService.usersNew.get(id);
  }

  async getUsersByCity(city: any): Promise<UserNew[]> {
    return (await this.dataService.usersNew.getAll()).filter(
      (x) => x.city === city,
    );
  }

  async getUsersByCountry(country: any): Promise<UserNew[]> {
    return (await this.dataService.usersNew.getAll()).filter(
      (x) => x.country === country,
    );
  }

  async getUsersByVerified(verified: any): Promise<UserNew[]> {
    return (await this.dataService.usersNew.getAll()).filter(
      (x) => x.emailIsVerified === verified,
    );
  }

  async getUsersByState(state: any): Promise<UserNew[]> {
    return (await this.dataService.usersNew.getAll()).filter(
      (x) => x.isBusiness === state,
    );
  }

  async getUsersByPermission(permission: any): Promise<UserNew[]> {
    return (await this.dataService.usersNew.getAll()).filter(
      (x) => x.isAdmin === permission,
    );
  }

  async getUsersByActivated(activated: any): Promise<UserNew[]> {
    return (await this.dataService.usersNew.getAll()).filter(
      (x) => x.isActive === activated,
    );
  }
}
