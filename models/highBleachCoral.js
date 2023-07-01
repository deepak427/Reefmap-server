import mongoose from 'mongoose'
const HighBleachCoralSchema = mongoose.Schema({
        ID : {type : Number, },
        COUNTRY : {type: String,},
        LOCATION : {type: String,},
        LAT : {type: Number},
        LON : {type: Number},
        SEVERITY_CODE : {type: Number},
        BLEACHING_SEVERITY: {type: String},
        CORAL_FAMILY: {type: String},
        CORAL_SPECIES : {type: String},
        WATER_TEMPERATURE : {type: String}
})

export default mongoose.model('highBleachCorals', HighBleachCoralSchema)