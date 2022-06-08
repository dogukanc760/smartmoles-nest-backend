import { Injectable } from '@nestjs/common';
import {
  CreateContractTypesDto,
  UpdateContractTypesDto,
} from '../../../core/dtos';
import { ContractTypes } from '../../../core';

@Injectable()
export class ContractTypeFactoryService {
  createContractType(createContractTypeDto: CreateContractTypesDto) {
    const newCreateContractType = new ContractTypes();
    newCreateContractType.name = createContractTypeDto.name;
    newCreateContractType.title = createContractTypeDto.title;
    newCreateContractType.subMainTitle = createContractTypeDto.subMainTitle;
    newCreateContractType.subContTitle = createContractTypeDto.subContTitle;
    newCreateContractType.description = createContractTypeDto.description;
    newCreateContractType.mainDescription =
      createContractTypeDto.mainDescription;
    newCreateContractType.content = createContractTypeDto.content;
    newCreateContractType.mainContent = createContractTypeDto.mainContent;
    newCreateContractType.subContent = createContractTypeDto.subContent;
    newCreateContractType.altText = createContractTypeDto.altText;
    newCreateContractType.altMainText = createContractTypeDto.altMainText;
    newCreateContractType.contractTime = createContractTypeDto.contractTime;

    return newCreateContractType;
  }

  updateContractType(updateContractType: UpdateContractTypesDto) {
    const newCreateContractType = new ContractTypes();
    newCreateContractType.name = updateContractType.name;
    newCreateContractType.title = updateContractType.title;
    newCreateContractType.subMainTitle = updateContractType.subMainTitle;
    newCreateContractType.subContTitle = updateContractType.subContTitle;
    newCreateContractType.description = updateContractType.description;
    newCreateContractType.mainDescription = updateContractType.mainDescription;
    newCreateContractType.content = updateContractType.content;
    newCreateContractType.mainContent = updateContractType.mainContent;
    newCreateContractType.subContent = updateContractType.subContent;
    newCreateContractType.altText = updateContractType.altText;
    newCreateContractType.altMainText = updateContractType.altMainText;
    newCreateContractType.contractTime = updateContractType.contractTime;

    return newCreateContractType;
  }
}
