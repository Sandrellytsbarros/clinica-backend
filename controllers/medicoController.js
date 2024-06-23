const db = require("../models");
const Medico = db.medico;

exports.getAllMedicos = async (req, res) => {
    try {
        const medicos = await Medico.findAll({ include: ["especialidade"] });
        res.json(medicos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createMedico = async (req, res) => {
    const { number, nome, especialidadeId } = req.body;
    try {
        const newMedico = await Medico.create({
            number, nome, especialidadeId
        });
        res.status(201).json(newMedico);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getMedicoById = async (req, res) => {
    const id = req.params.id;
    try {
        const medico = await Medico.findByPk(id, { include: ["especialidade"]  });
        if (medico) {
            res.json(medico);
        } else {
            res.status(404).json({ error: 'Médico not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateMedico = async (req, res) => {
    const id = req.params.id;
    const { number, nome, especialidadeId } = req.body;
    try {
        const medico = await Medico.findByPk(id);
        if (medico) {
            medico.number = number;
            medico.nome = nome;
            medico.especialidadeId = especialidadeId;
            await medico.save();
            res.json(medico);
        } else {
            res.status(404).json({ error: 'Médico not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteMedico = async (req, res) => {
    const id = req.params.id;
    try {
        const medico = await Medico.findByPk(id);
        if (medico) {
            await medico.destroy();
            res.json(medico);
        } else {
            res.status(404).json({ error: 'Médico not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
