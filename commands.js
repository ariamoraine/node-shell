var fs = require('fs');

module.exports = {

  pwd: function(file) {
    process.stdout.write(process['mainModule']['paths'][0]);
    process.stdout.write('\nprompt > ');
  },

  ls: function (file) {
    fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
    });
  },

  echo: function (words) {
    console.log(words);
  },

  cat: function (file) {
    fs.readFile(`${file}`, 'utf8', (err, data) => {
      if (err) throw err;
        process.stdout.write(data);
    });
  },

  head: function (file) {
  }
};
