import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Thing = new Schema(
	{
		name: { type: String, required: true },
		data: { type: Object }
	},
	{ timestamps: true, toJSON: { virtuals: true } }
);


export default Thing;