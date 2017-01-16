//console.log(process);

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim();

  // process.stdout.write('You type: ' + cmd);
  // process.stdout.write('\nprompt > ');

  if(cmd === "pwd"){
    process.stdout.write(process['mainModule']['paths'][0]);
    process.stdout.write('\nprompt > ');
  }

  if(cmd === 'date'){
    var x = new Date();
    var humanDay = x.toDateString();
    var time = x.toLocaleTimeString();
  process.stdout.write(`${humanDay} ${time}`);
  process.stdout.write('\nprompt > ');
  }

});

