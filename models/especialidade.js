module.exports = (sequelize, DataTypes) => {
    const Especialidade = sequelize.define('especialidades', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Especialidade
}
