const db = require("../models");
const Consulta = db.consulta;

exports.getAllConsultas = async (req, res) => {
    try {
        const Consultas = await Consulta.findAll({ include: ["paciente", "medico"] });
        res.json(Consultas);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createConsulta = async (req, res) => {
    const { medicoNumber, pacienteId, data } = req.body;
    try {
        const newConsulta = await Consulta.create({
            medicoNumber, pacienteId, data
        });
        res.status(201).json(newConsulta);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getConsultaById = async (req, res) => {
    const id = req.params.id;
    try {
        const Consulta = await Consulta.findByPk(id, { include: ["paciente", "medico"] });
        if (Consulta) {
            res.json(Consulta);
        } else {
            res.status(404).json({ error: 'Consulta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateConsulta = async (req, res) => {
    const id = req.params.id;
    const { nome } = req.body;
    try {
        const Consulta = await Consulta.findByPk(id);
        if (Consulta) {
            Consulta.nome = nome;
            await Consulta.save();
            res.json(Consulta);
        } else {
            res.status(404).json({ error: 'Consulta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteConsulta = async (req, res) => {
    const id = req.params.id;
    try {
        const Consulta = await Consulta.findByPk(id);
        if (Consulta) {
            await Consulta.destroy();
            res.json(Consulta);
        } else {
            res.status(404).json({ error: 'Consulta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getConsultasByMedico = async (req, res) => {
    const medicoNumber = req.params.id;
    try {
        const Consultas = await Consulta.findAll({where: {medicoNumber: medicoNumber}, include: ["paciente", "medico"]});
        res.json(Consultas);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};