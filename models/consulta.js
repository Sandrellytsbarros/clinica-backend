module.exports = (sequelize, DataTypes) => {
    const Consulta = sequelize.define('consultas', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })

    return Consulta;
}
