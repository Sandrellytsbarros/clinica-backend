module.exports = (sequelize, DataTypes) => {
    const Farmaco = sequelize.define('farmacos', {
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

    return Farmaco
}
