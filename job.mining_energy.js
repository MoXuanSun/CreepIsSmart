module.exports = {
    go_mining:function (creep){
        if (creep.harvest(Game.getObjectById(creep.memory.target))
            === ERR_NOT_IN_RANGE){
            creep.moveTo(Game.getObjectById(creep.memory.target),
                {visualizePathStyle: {stroke: '#9999FF'}})
        }
        return creep
    }
}