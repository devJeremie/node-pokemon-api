module.exports = (sequelize, Datatypes) => {
    return sequelize.define('Pokemon' , {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        hp: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        cp: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        picture: {
            type: Datatypes.STRING,
            allowNull: false
        },
        types: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}