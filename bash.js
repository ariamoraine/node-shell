//console.log(process);
var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim();

  // process.stdout.write('You type: ' + cmd);
  // process.stdout.write('\nprompt > ');
  if(cmd === 'pwd') {
    commands[cmd]();
  }

  if (cmd === "ls") {
    commands[cmd]();
  }

  if (cmd.indexOf("echo") === 0) {
    commands[cmd.slice(0, 4)](cmd.slice(5));
  }

  if (cmd.indexOf("cat") === 0) {
    commands[cmd.slice(0, 3)](cmd.slice(4));
    //cmd.slice(0, 2)](cmd.slice(3));
  }

  if (cmd.indexOf('head') === 0) {
    commands[cmd.slice(0, 4)](cmd.slice(5));
  }

  if(cmd === 'date'){
    var x = new Date();
    var humanDay = x.toDateString();
    var time = x.toLocaleTimeString();
  process.stdout.write(`${humanDay} ${time}`);
  process.stdout.write('\nprompt > ');
  }

});
