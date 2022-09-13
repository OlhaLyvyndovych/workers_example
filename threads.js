const { 
    isMainThread,
    workerData ,
    Worker } = require('worker_threads');

if(isMainThread) {
    console.log(`Main Thread Process ID: $${process.pid}`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 3, 4, 3]
    });
} else {
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(isMainThread);
    //Sorting is an expensive operation as it uses much of CPU
    //Taking advantage of multiple processors of CPU, which can run each thread in parallel
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}