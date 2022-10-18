import mongoose from 'mongoose';

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

const Occupation = mongoose.model('Occupation', occupationSchema);
export { occupationSchema };
export default Occupation;
