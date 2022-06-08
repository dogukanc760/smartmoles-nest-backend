import { IDataService, PumpKhas } from '../../../core';
import { PumpKhasFactoryService } from './pumpKhas-factory.service';
import { CreatePumpKhasDto, UpdatePumpKhasDto } from '../../../core/dtos';

export class PumpsKhasService {
  constructor(
    private dataService: IDataService,
    private pumpKhasFactoryService: PumpKhasFactoryService,
  ) {}

  async getAllPumpKhas(): Promise<PumpKhas[]> {
    return await this.dataService.pumpsKhas.getAll();
  }

  async getPumpKhasByUser(id: any): Promise<PumpKhas[]> {
    return (await this.dataService.pumpsKhas.getAll()).filter(
      (x) => x.userId == id,
    );
  }

  async getOnePumpKhas(id: any): Promise<PumpKhas> {
    return await this.dataService.pumpsKhas.get(id);
  }

  async createPumpKhas(createPumpKhasDto: CreatePumpKhasDto) {
    const newPumpKhas =
      this.pumpKhasFactoryService.createPumpKhas(createPumpKhasDto);
    return await this.dataService.pumpsKhas.create(newPumpKhas);
  }

  async updatePumpKhas(updatePumpKhasDto: UpdatePumpKhasDto, id) {
    const updatePumpKhas =
      this.pumpKhasFactoryService.updatePumpKhas(updatePumpKhasDto);
    return await this.dataService.pumpsKhas.update(id, updatePumpKhas);
  }

  async deletePumpKhas(id: any) {
    return await this.dataService.pumpsKhas.delete(id);
  }
}
