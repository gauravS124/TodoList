const Sequelize =require('sequelize')

const db= new Sequelize({
    dialect:'sqlite',
    storage:__dirname+'/todos.db'
})

const Notes=db.define('note',{
    id:{type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
   
    todoId:{
        type:Sequelize.INTEGER,
        
    },
    note:{
        type:Sequelize.STRING(100),
    }

})

const Todos=db.define('todo', {

    id:{type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
   
    task:{type:Sequelize.STRING(100),
        allowNull:false
    },
    desc:{
        type:Sequelize.STRING(1000),
    },
    status:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    due:{
        type:Sequelize.DATE
    },
    priority:{
        type:Sequelize.STRING(100),
        defaultValue:"low"
    }
})

Todos.hasMany(Notes);
Notes.belongsTo(Todos);

module.exports={
    db,Todos,Notes
}