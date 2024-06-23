const db = require("../models");
const Paciente = db.paciente;

exports.getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createPaciente = async (req, res) => {
    const { nome } = req.body;
    try {
        const newPaciente = await Paciente.create({
            nome
        });
        res.status(201).json(newPaciente);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getPacienteById = async (req, res) => {
    const id = req.params.id;
    try {
        const paciente = await Paciente.findByPk(id);
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({ error: 'Paciente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updatePaciente = async (req, res) => {
    const id = req.params.id;
    const { nome } = req.body;
    try {
        const paciente = await Paciente.findByPk(id);
        if (paciente) {
            paciente.nome = nome;
            await paciente.save();
            res.json(paciente);
        } else {
            res.status(404).json({ error: 'Paciente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deletePaciente = async (req, res) => {
    const id = req.params.id;
    try {
        const paciente = await Paciente.findByPk(id);
        if (paciente) {
            await paciente.destroy();
            res.json(paciente);
        } else {
            res.status(404).json({ error: 'Paciente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};