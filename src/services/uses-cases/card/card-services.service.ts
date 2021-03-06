import { Inject, Injectable } from '@nestjs/common';
import { CreateCardDto, UpdateCardDto } from 'src/core/dtos';
import { Card } from 'src/core/entities';

import { IDataService } from '../../../core/abstracts';
import { CardFactoryService } from './card-factory.service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CardServices {
  constructor(
    @Inject('GREETING_SERVICE') private client: ClientProxy,
    private dataServices: IDataService,
    private CardFactoryService: CardFactoryService,
  ) {}

  getAllCard(): Promise<Card[]> {
    return this.dataServices.cards.getAll();
  }

  async getCardByUser(id: any): Promise<Card[]> {
    const cards = (await this.dataServices.cards.getAll()).filter(
      (x) => x.userId == id,
    );
    return cards;
  }

  getCardById(id: any): Promise<Card> {
    return this.dataServices.cards.get(id);
  }

  createCall(createCardDto: CreateCardDto): Promise<Card> {
    try {
      const cards = this.CardFactoryService.createNewCard(createCardDto);
      return this.dataServices.cards.create(cards);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getHello() {
    return this.client.send({ cmd: 'greeting' }, 'Progressive Coder');
  }

  async getHelloAsync() {
    const message = await this.client.send(
      { cmd: 'greeting-async' },
      'Progressive Coder',
    );
    return message;
  }

  async connectToCard() {
    const message = await this.client.send(
      { cmd: 'connect-card' },
      'Konsept 1',
    );
    return message;
  }

  updateCall(callId: string, updateCallDto: UpdateCardDto): Promise<Card> {
    const cards = this.CardFactoryService.updateCard(updateCallDto);
    return this.dataServices.cards.update(callId, cards);
  }
}
