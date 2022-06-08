//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LoggerDocument = Logger & Document;

@Schema()
export class Logger {
  @Prop()
  logTitle: string;
  @Prop()
  logDescription: string;
  @Prop()
  logContent: string;
  @Prop()
  logLevel: string;
  @Prop()
  logUser: string;
  @Prop()
  logUserId: string;
  @Prop()
  isActive: boolean;
}

export const LoggerSchema = SchemaFactory.createForClass(Logger);
