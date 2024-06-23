const Sequelize = require("sequelize");
const sequelize = new Sequelize('clinica', 'admin', '123123', {
    host: 'localhost',
    dialect: 'postgres',
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.especialidade = require("./especialidade")(sequelize, Sequelize);
db.paciente = require("./paciente")(sequelize, Sequelize);
db.medico = require("./medico")(sequelize, Sequelize);
db.consulta = require("./consulta")(sequelize, Sequelize);
db.farmaco = require("./farmaco")(sequelize, Sequelize);
db.admin = require("./admin")(sequelize, Sequelize);

db.especialidade.hasMany(db.medico, { as: "medicos" });
db.medico.belongsTo(db.especialidade, {
    foreignKey: "especialidadeId",
    as: "especialidade"
});

db.paciente.hasMany(db.consulta, { as: "consultas" });
db.consulta.belongsTo(db.paciente, {
    foreignKey: "pacienteId",
    as: "paciente"
});

db.medico.hasMany(db.consulta, { as: "consultas" });
db.consulta.belongsTo(db.medico, {
    foreignKey: "medicoNumber",
    as: "medico"
});

db.farmaco.belongsToMany(db.consulta, { through: 'consulta_farmaco'});
db.consulta.belongsToMany(db.farmaco, { through: 'consulta_farmaco'});

module.exports = db
