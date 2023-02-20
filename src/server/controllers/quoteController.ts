/*import { Request, Response } from 'express';
import { Quote } from '../models/quote';

export const getQuotes = async (req: Request, res: Response) => {
  const quotes = await Quote.find();
  res.json(quotes);
};

export const addQuote = async (req: Request, res: Response) => {
  const { text, author } = req.body;
  const quote = new Quote({ text, author });
  await quote.save();
  res.json(quote);
};*/
