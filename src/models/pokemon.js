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
            allowNull: false,
            validate: {
                isInt: { msg: `Utilisez uniquement des nombres entiers pour les hp.`},
                notNull: { msg: `Les hp sont une propriété obligatoire.`}
            }
        },
        cp: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: `Utilisez uniquement des nombres entiers pour les cp.`},
                notNull: { msg: `Les cp sont une propriété obligatoire.`}
            }
        },
        picture: {
            type: Datatypes.STRING,
            allowNull: false
        },
        types: {
            type: Datatypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('types').split(',')
            },
            set(types) {
                this.setDataValue('types', types.join())
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}