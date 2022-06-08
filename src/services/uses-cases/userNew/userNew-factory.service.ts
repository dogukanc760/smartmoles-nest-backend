import { Injectable } from '@nestjs/common';
import { CreateUserNewDto, UpdateUserNewDto } from '../../../core/dtos';
import { UserNew } from '../../../core';

@Injectable()
export class UserNewFactoryService {
  createUser(createUserDto: CreateUserNewDto) {
    const user = new UserNew();
    user.username = createUserDto.username;
    user.citizenshipNum = createUserDto.citizenshipNum;
    user.nationality = createUserDto.nationality;
    user.companyName = createUserDto.companyName;
    user.taxNum = createUserDto.taxNum;
    user.mersisNo = createUserDto.mersisNo;
    user.address = createUserDto.address;
    user.name = createUserDto.name;
    user.surname = createUserDto.surname;
    user.email = createUserDto.email;
    user.emailIsVerified = createUserDto.emailIsverified;
    user.emailVerifiedAt = createUserDto.emailverifiedAt;
    user.country = createUserDto.country;
    user.city = createUserDto.city;
    user.distinct = createUserDto.distinct;
    user.detailAddress = createUserDto.detailAddress;
    user.postalCode = createUserDto.postalCode;
    user.phone = createUserDto.phone;
    user.homePhone = createUserDto.homePhone;
    user.password = createUserDto.password;
    user.permissions = createUserDto.permissions;

    return user;
  }

  updateUser(updateUserDto: UpdateUserNewDto) {
    const user = new UserNew();
    user.username = updateUserDto.username;
    user.citizenshipNum = updateUserDto.citizenshipNum;
    user.nationality = updateUserDto.nationality;
    user.companyName = updateUserDto.companyName;
    user.taxNum = updateUserDto.taxNum;
    user.mersisNo = updateUserDto.mersisNo;
    user.address = updateUserDto.address;
    user.name = updateUserDto.name;
    user.surname = updateUserDto.surname;
    user.email = updateUserDto.email;
    user.emailIsVerified = updateUserDto.emailIsverified;
    user.emailVerifiedAt = updateUserDto.emailverifiedAt;
    user.country = updateUserDto.country;
    user.city = updateUserDto.city;
    user.distinct = updateUserDto.distinct;
    user.detailAddress = updateUserDto.detailAddress;
    user.postalCode = updateUserDto.postalCode;
    user.phone = updateUserDto.phone;
    user.homePhone = updateUserDto.homePhone;
    user.password = updateUserDto.password;
    user.permissions = updateUserDto.permissions;

    return user;
  }
}
