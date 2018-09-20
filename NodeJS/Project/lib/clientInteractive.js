const request = require('request')
const readline = require('readline')

const rl = readline.createInterface( process.stdin);


const pushRequest = (item) => {
    request('http://localhost:3000/push/'+item, (err,response, body) => {
        console.log(body);
    })
};

const popRequest = () => {
    request('http://localhost:3000/pop/', (err,response, body) => {
        console.log(body);
    })
};

const topRequest = () => {
    request('http://localhost:3000/top/', (err,response, body) => {
        console.log(body);
    })
};

const sizeRequest = () => {
    request('http://localhost:3000/size/', (err,response, body) => {
        console.log(body);
    })
};

const printRequest = () => {
    request('http://localhost:3000/print/', (err,response, body) => {
        console.log(body);
    })
};

const commandHandler = (command) => {
    if(command[0] === 'push'){
        pushRequest(command.splice(1));
    }
    else if(command[0] === 'pop'){
        popRequest();
    }
    else if(command[0] === 'top'){
        topRequest();
    }
    else if(command[0] === 'size'){
        sizeRequest();
    }
    else if(command[0] === 'print'){
        printRequest();
    }
    else{
        console.log("ERROR INVALID COMMAND")
    }
};

// Read input from user
const recursiveAsyncReadLine = () => {
    rl.question('' , (answer) => {
        command = answer.toString().split(' ');
        commandHandler(command);

        recursiveAsyncReadLine();
    })
}

recursiveAsyncReadLine();
