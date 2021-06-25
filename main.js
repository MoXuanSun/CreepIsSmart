let SCVControl = require('./role.scv');
const testerHander = require('./role.tester');
//核心思路问题：Sceep必须将代码分为多个tick执行，不能在单一个tick中执行过长的代码,每一个tick尽量只执行一步

module.exports.loop = function () {
    
    // Game.spawns['AK1'].spawnCreep([MOVE],
    //     "Cell B",{memory:{role:'Memory',Energy_Source1:'eee50774086309c',
    // Energy_Source2:'eff307740862fd8',current_building_target:''}})

    Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV1",{memory:{role:'SCV',target:"5bbcac9c9099fc012e635d9d",harvesting:false}})
    Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV2",{memory:{role:'SCV',target:"5bbcac9c9099fc012e635d9d",harvesting:false}})
    Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV3",{memory:{role:'SCV',target:"5bbcac9c9099fc012e635d9e",harvesting:false}})
    Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV4",{memory:{role:'SCV',target:"5bbcac9c9099fc012e635d9e",harvesting:false}})
    // Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV5",{memory:{role:'SCV',target:0,harvesting:false}})
    // Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV6",{memory:{role:'SCV',target:0,harvesting:false}})
    // Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV7",{memory:{role:'SCV',target:0,harvesting:false}})
    // Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV8",{memory:{role:'SCV',target:1,harvesting:false}})
    // Game.spawns['AK1'].spawnCreep([WORK,CARRY,MOVE,MOVE,CARRY],"SCV9",{memory:{role:'SCV',target:1,harvesting:false}})

    //Game.spawns['AK1'].spawnCreep([MOVE,MOVE,MOVE,MOVE],"Tester",{memory:{role:'tester',target:1,harvesting:false}})
    for (let creepName in Game.creeps){
        let creep = Game.creeps[creepName]
        if (creep.memory.role === 'SCV'){
            SCVControl.handle(creep,Game.spawns['AK1'])
        }
        else if (creep.memory.role === 'tester'){
            testerHander.handle(creep)
        }
    }
}
//第一种逻辑：使用采集函数的返回值判断是否在可以采集的位置上
//第二种逻辑：使用creep的pos判断是否再可以采集的位置上
