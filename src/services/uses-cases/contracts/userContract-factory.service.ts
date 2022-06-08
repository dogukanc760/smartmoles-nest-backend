import { Injectable } from '@nestjs/common';
import {
  CreateUserContractDto,
  UpdateUserContractDto,
} from '../../../core/dtos';
import { UserContract } from '../../../core';

@Injectable()
export class UserContractFactoryService {
  createUserContract(createUserContractDto: CreateUserContractDto) {
    const userContract = new UserContract();
    userContract.userId = createUserContractDto.userId;
    userContract.contractId = createUserContractDto.contractId;
    userContract.contract = createUserContractDto.contract;
    userContract.isActive = createUserContractDto.isActive;

    return userContract;
  }

  updateUserContract(updateUserContractDto: UpdateUserContractDto) {
    const userContract = new UserContract();
    userContract.userId = updateUserContractDto.userId;
    userContract.contractId = updateUserContractDto.contractId;
    userContract.contract = updateUserContractDto.contract;
    userContract.isActive = updateUserContractDto.isActive;

    return userContract;
  }
}
