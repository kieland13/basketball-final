module.exports = (sequelize, DataTypes) => {
    let Player = sequelize.define('Player', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, position: {
            type: DataTypes.STRING,
            allowNull: false
        }, year: {
            type: DataTypes.STRING,
            allowNull: false
        }, starting: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    Player.sync({force: false}).then( () => {
        console.log('synced player table')
    })

    return Player
}