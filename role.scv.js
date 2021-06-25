let mining = require("job.mining_energy")

let SCVcontroler = {

    handle:function(creep,spawn){
        let sources = ['5bbcacba9099fc012e636191','5bbcacba9099fc012e636192']
        let target = typeof(creep.memory.target) == "undefined" ? 0 : creep.memory.target
        //每个creep出生前已经确定要去哪个位置采矿
        if (
            (creep.store.getFreeCapacity(RESOURCE_ENERGY) !==0
                && creep.harvest(creep.memory.target))
        || creep.store[RESOURCE_ENERGY] === 0 ){
            // creep.memory.harvesting = true;
            //边界条件：0能量或是在sources旁边，其他情况都为false 判断方式
            //首先判断store中的能量是否小于最大能量存储，
            // 如果是则false，在判断是否在能量矿旁边
           mining.go_mining(creep)
        }
        else{
            if (spawn.store[RESOURCE_ENERGY] < 300){
                let need = 300 - spawn.store[RESOURCE_ENERGY]
                if (creep.transfer(spawn,RESOURCE_ENERGY, need 
                    > creep.store[RESOURCE_ENERGY] ? creep.store[RESOURCE_ENERGY] : need) 
                    === ERR_NOT_IN_RANGE){
                    //向能量中心传递能量，如果缺多少就传输多少，如果缺少的能量超过缺口则传输creep当前存储的所有能量
                    creep.moveTo(spawn, {visualizePathStyle: {stroke: '#9999FF'}})
                }
            }
            // else if (creep.){
                        
            // }
            else if (creep.room.find(FIND_CONSTRUCTION_SITES).length){
                if (Game.creeps['Cell B'].memory.current_building_target === ''){
                    let constructions = creep.room.find(FIND_CONSTRUCTION_SITES)
                    Game.creeps['Cell B'].memory.current_building_target = constructions[0].id
                    //constructions 数组中包含的是construction数组对象的一个引用，不是字符串，占内存，应该用为字符类型存入
                }
                else {
                    let target = Game.creeps['Cell B'].memory.current_building_target;
                    if (creep.build(Game.getObjectById(target)) === ERR_NOT_IN_RANGE){
                        creep.moveTo(Game.getObjectById(target),{visualizePathStyle: {stroke: '#9999FF'}})
                    }
                    else {
                        Game.creeps['Cell B'].memory.current_building_target = ''
                    }
                }
            }
            else {
                if (creep.transfer(Game.getObjectById('24b307748aeaa42'),RESOURCE_ENERGY)
                === ERR_NOT_IN_RANGE){
                    creep.moveTo(Game.getObjectById('24b307748aeaa42'),
                        {visualizePathStyle: {stroke: '#9999FF'}})
                }
            }
        }
    }
}
module.exports = SCVcontroler