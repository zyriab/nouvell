import mongoose from 'mongoose';
import { Occupation as TOccupation } from '../definitions/types';

const occupationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
});

const Occupation = mongoose.model<TOccupation>('Occupation', occupationSchema);
export { occupationSchema };
export default Occupation;
