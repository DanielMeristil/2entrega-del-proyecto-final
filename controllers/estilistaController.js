import { Error } from "mongoose";
import Estilista from "../models/Estilista.js";


const registrar = async (req, res) => {
    const { email } = req.body;
    // Prevenir registro duplicados
    const existeUsuario = await Estilista.findOne({email})
    if(existeUsuario){
       const error = new Error("Usuario ya registrado");
       return res.status(404).json({msg: error.message})
    }
try {
//guardar una nueva estilista
const estilista = new Estilista(req.body);
const estilistaGuardada = await estilista.save();

res.json(estilistaGuardada);
} catch ( error) {
    console.log(error)
    
}
//const {email} = req.body;

    console.log(email);
    console.log(password);
    console.log(nombre);



    res.json({ msg: "Registrando usuario..."});
};

const perfil =  (req, res) => {
    res.json({ msg: "mostrando perfil..."});
};


const confirmar = async (req, res) => {
    const { token } = req.params

    const usuarioConfirmar = await Estilista.findOne({token})
   
    if(!usuarioConfirmar) {
        const error = new Error('token no válido');
        return res.status(404).json({ msg: error.message});
    }
try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();

    res.json({msg: "Usuario Confirmando Correctamente"});

} catch (error) {
    console.log(error)
}
};


const autenticar = async (req, res) => {
    const { email } = req.body
//verificar si usuario existe
const usuario = await Estilista.findOne({ email })

if(usuario) {
    console.log('si existe...')
} else {
    res.status(403).json({ msg: "EL USUARIO NO ESISTE"});
}
    res.json ({ msg: "Autenticado" })
};

export { registrar, perfil, confirmar, autenticar };