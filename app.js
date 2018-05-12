console.log('hello world');

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;


var command=argv._[0];
console.log('yargs :',argv);

if(command==='add')
{
  var temp=notes.addnotes(argv.title,argv.body);
  if(typeof temp==="object")
    console.log("item successfully added");
  else
  {
    console.log("item with same title exits!!");
  }
}
else if(command==='list')
{
  notes.listall();
}
else if(command==='remove')
{
  notes.remove(argv.title);
}
else if(command==='read')
{
  notes.read(argv.title);
}
else {
  console.log('unknown command');
}
