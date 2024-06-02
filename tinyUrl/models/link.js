import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    clicks: [
        {
            insertedAt: { type: Date, default: Date.now },
            ipAddress: {
                type: String,
                required: true,
                default: "0.0.0.0"
            },
            targetParamValue: {type:String,default:"1"}
        }
    ],
    targetParamName: {
        type: String,
        default: "target"
    },
    targetValues: [
        {
            name: String,
            value: String
        }
    ]

});

export default mongoose.model("Link", linkSchema);