const os = require('os');
const cluster = require('cluster');
const cpuNum = os.cpus().length;

if (cluster.isMaster) {
    console.log("Product cluster.js");
    //cpu 개수만큼 프로세스 생성
    for (var i = 0; i < cpuNum; ++i) {
        cluster.fork({doLog:!i});
    }
} else {
    require('./web');
}

