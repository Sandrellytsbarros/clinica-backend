const db = require("../models");
const Especialidade = db.especialidade;

exports.getAllEspecialidades = async (req, res) => {
    try {
        const especialidades = await Especialidade.findAll({ include: ["medicos"] });
        res.json(especialidades);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createEspecialidade = async (req, res) => {
    const { nome } = req.body;
    try {
        const newEspecialidade = await Especialidade.create({
            nome
        });
        res.status(201).json(newEspecialidade);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getEspecialidadeById = async (req, res) => {
    const id = req.params.id;
    try {
        const especialidade = await Especialidade.findByPk(id, { include: ["medicos"] });
        if (especialidade) {
            res.json(especialidade);
        } else {
            res.status(404).json({ error: 'Especialidade not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateEspecialidade = async (req, res) => {
    const id = req.params.id;
    const { nome } = req.body;
    try {
        const especialidade = await Especialidade.findByPk(id);
        if (especialidade) {
            especialidade.nome = nome;
            await especialidade.save();
            res.json(especialidade);
        } else {
            res.status(404).json({ error: 'Especialidade not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteEspecialidade = async (req, res) => {
    const id = req.params.id;
    try {
        const especialidade = await Especialidade.findByPk(id);
        if (especialidade) {
            await especialidade.destroy();
            res.json(especialidade);
        } else {
            res.status(404).json({ error: 'Especialidade not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};