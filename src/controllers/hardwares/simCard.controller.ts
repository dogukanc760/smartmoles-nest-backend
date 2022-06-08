import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiForbiddenResponse,
  ApiBadGatewayResponse,
} from '@nestjs/swagger';
import { TransformInterceptor } from '../../libs/api-results/standart-results';

import environment from '../../environment/environment';
import { SimCardsService } from '../../services';
import {
  CreateCentralUnitDto,
  CreateSimCardDto,
  UpdateSimCardDto,
} from '../../core/dtos';

@Controller('simcard')
@ApiTags('SimCard Endpoints')
@UseInterceptors(TransformInterceptor)
export class SimCardController {
  constructor(private simCardService: SimCardsService) {}

  @Get()
  async getAllSimCard() {
    return await this.simCardService.getAllSimCard();
  }

  @Get(':id')
  async getOneSimCard(@Param('id') id: any) {
    return await this.simCardService.getOneSimCard(id);
  }

  /* @Get('/by-user/:id')
  async getByUser(@Param('id') id: any){
    return await this.simCardService.getSimCardByUser()
  }*/

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateSimCardDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createSimCard(@Body() createSimCardDto: CreateSimCardDto) {
    return await this.simCardService.createSimCard(createSimCardDto);
  }

  @Put(':id')
  async updateSimCard(
    @Param('id') id: any,
    updateSimCardDto: UpdateSimCardDto,
  ) {
    return await this.simCardService.updateSimCard(id, updateSimCardDto);
  }

  @Delete(':id')
  async deleteSimCard(@Param('id') id: any) {
    return await this.simCardService.deleteSimCard(id);
  }
}
