import {IsString} from 'class-validator';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import * as mongoose from 'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://jarvis-mongo:27017/jarvis');

export class Inventory extends Typegoose {
    @IsString()
    @prop({ unique: true })
    public product: string;

    @IsString()
    @prop()
    public lote: string;

    public toJson(): string {
        return JSON.stringify(this);
    }
}

export const InventoryModel = new Inventory().getModelForClass(Inventory);
