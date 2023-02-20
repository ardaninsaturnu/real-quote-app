import { model, Schema, Document } from 'mongoose';

export interface IQuote extends Document {
  text: string;
  author: string;
}
