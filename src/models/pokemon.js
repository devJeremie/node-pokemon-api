const typePokemon = ['Feu','Eau','Air','Terre','Poison','Normal','Electrique','Fée']

module.exports = (sequelize, Datatypes) => {
    return sequelize.define('Pokemon' , {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: {
                msg: `Le nom du pokémon est déja pris.`
            },
            validate: {
                notEmpty: { msg: `Champ obligatoire.`},
                notNull: { msg: `Les hp sont une propriété obligatoire.`}
            }
        },
        hp: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: `Utilisez uniquement des nombres entiers pour les hp.`},
                min:{
                    args: [0],
                    msg: `L'hp doit être supérieur ou égale à zéro.`
                },
                max: {
                    args:[1000],
                    msg: `L'hp ne peut pas dépasser 1000.`
                },
                notNull: { msg: `Les hp sont une propriété obligatoire.`}
            }
        },
        cp: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: `Utilisez uniquement des nombres entiers pour les cp.`},
                min:{
                    args: [0],
                    msg: `Le cp doit être supérieur ou égale à zéro.`
                },
                max: {
                    args:[100],
                    msg: `Le cp ne peut pas dépasser 100.`
                },
                notNull: { msg: `Les cp sont une propriété obligatoire.`}
            }
        },
        picture: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isUrl: { msg: `Mettez une Url valide pour votre image.`},
                notNull: { msg: `L'image est une propriété obligatoire.`}
            }
        },
        types: {
            type: Datatypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('types').split(',')
            },
            set(types) {
                this.setDataValue('types', types.join())
            },
            validate: {
                isTypesValid(value) {
                    if(!value) {
                        throw new Error(`Vous devez choisir au moin un type.`)
                    }
                    if(value.split(',').length > 3) {
                        throw new Error(`Vous ne pouvez pas avoir plus de 3 types.`)
                    }
                    // si l'on veut obliger de choisir dans une liste bien specifique (validateur sur mesure)
                    // value.split(',').forEach(type => {
                    //     if(!typePokemon.includes(type)) {
                    //         throw new Error (`Le type du pokémon doit être dans cette liste : ${typePokemon}`)
                    //     }
                    // });
                }
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}