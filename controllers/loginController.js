const db = require("../models");
const jwt = require("jsonwebtoken");
const Medico = db.medico;
const Paciente = db.paciente;
const Admin = db.admin;

exports.login = async (req, res) => {
    const { email, password, tipo } = req.body;
    try {
        if (tipo === "MEDICO") {
            const medico = await Medico.findOne({ where: {email: email, password: password }});

            if (medico) {
                const token = jwt.sign({ id: medico.number, tipo: "MEDICO" }, "CLINICA");
                res.send({ id: medico.number, tipo: "MEDICO", token });
            } else {
                return res.status(400).send({ error: 'Email ou senha inválidos' });
            }
        } else if (tipo === "PACIENTE") {
            const paciente = await Paciente.findOne({ where: {email: email, password: password }});

            if (paciente) {
                const token = jwt.sign({ id: paciente.id, tipo: "PACIENTE" }, "CLINICA");
                res.send({ token });
            } else {
                return res.status(400).send({error: 'Email ou senha inválidos' });
            }
        } else if (tipo === "ADMIN") {
            const admin = await Admin.findOne({ where: {email: email, password: password }});
            console.log(admin)
            if (admin) {
                const token = jwt.sign({ id: admin.id, tipo: "ADMIN" }, "CLINICA");
                res.send({ token });
            } else {
                return res.status(400).send({error: 'Email ou senha inválidos' });
            }
        } else {
            res.status(400).json({ error: 'Tipo não encontrado' });    
        }

        res.status(201).json();
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
