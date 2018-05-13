// console.log('hello world');

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;


var command=argv._[0];
// console.log('yargs :',argv);

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
  var temp=notes.listall();
  if(temp.length!=0)
  {
    console.log(`Ther are a total of ${temp.length} notes--->`);
    temp.forEach((word)=>notes.display(word));
  }
  else {
    console.log("----The notes list is empty----");
  }
}
else if(command==='remove')
{

  var test=notes.remove(argv.title);
  if(test)
  {
    console.log("The note has been deleted");
  }
  else
  {
    console.log("The note hasn't been deleted");
  }
}

else if(command==='read')
{
  var temp=notes.read(argv.title);
  if(temp[0])
    notes.display(temp[0]);
  else {
    console.log("note not found");
  }

}
else
{
  console.log('unknown command');
}
