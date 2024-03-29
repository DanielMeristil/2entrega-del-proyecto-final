import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import generarId from '../helpers/generarId.js';

const estilistaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null,

    },
    token: {
        type: String,
        default: generarId(),

    },
    confirmado: {
        type: Boolean,
        default: false,
    },
});

estilistaSchema.pre("save", async function (next) {
 if(!this.isModified("password")) {
    next();
 }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    
});


const Estilista = mongoose.model("Estilista",estilistaSchema);
export default Estilista;
