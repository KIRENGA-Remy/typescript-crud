import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  completed: boolean;
}

const TodoSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
