const db = require("../models");
const Farmaco = db.farmaco;

exports.getAllFarmacos = async (req, res) => {
    try {
        const farmacos = await Farmaco.findAll();
        res.json(farmacos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createFarmaco = async (req, res) => {
    const { number, nome, especialidadeId } = req.body;
    try {
        const newFarmaco = await Farmaco.create({
            number, nome, especialidadeId
        });
        res.status(201).json(newFarmaco);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getFarmacoById = async (req, res) => {
    const id = req.params.id;
    try {
        const farmaco = await Farmaco.findByPk(id);
        if (farmaco) {
            res.json(farmaco);
        } else {
            res.status(404).json({ error: 'Farmaco not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateFarmaco = async (req, res) => {
    const id = req.params.id;
    const { number, nome, especialidadeId } = req.body;
    try {
        const farmaco = await Farmaco.findByPk(id);
        if (farmaco) {
            farmaco.number = number;
            farmaco.nome = nome;
            farmaco.especialidadeId = especialidadeId;
            await farmaco.save();
            res.json(farmaco);
        } else {
            res.status(404).json({ error: 'Farmaco not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteFarmaco = async (req, res) => {
    const id = req.params.id;
    try {
        const farmaco = await Farmaco.findByPk(id);
        if (farmaco) {
            await farmaco.destroy();
            res.json(farmaco);
        } else {
            res.status(404).json({ error: 'Farmaco not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
