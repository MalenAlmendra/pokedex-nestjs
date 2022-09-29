import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose/dist';
import {Document} from 'mongoose'

@Schema() 
export class Pokemon extends Document {

    @Prop({
        unique:true,
        id: true,
    })
    name:string;

    @Prop({
        unique:true,
        id: true,
    })
    no:number; 
}

export const PokemonSchema=SchemaFactory.createForClass(Pokemon)