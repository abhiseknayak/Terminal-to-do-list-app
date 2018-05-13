// console.log('starting temp.js');
const fs=require('fs');

var fetch_notes=()=>
{
  try
  {
    var temp=fs.readFileSync("notes-file.json");
    return JSON.parse(temp);
  }
  catch
  {
    return [];
  }

};

var save_notes=(notes)=>
{
  fs.writeFileSync("notes-file.json",JSON.stringify(notes));
};

var addnotes=(title,body)=>{
  var notes=[];
  var temp=[];
  var note={
    title,
    body

  };
  notes=fetch_notes();
  var duplicate=notes.filter((word)=>word.title===title);
  if(duplicate.length===0)
  {
    notes.push(note);
    save_notes(notes);
    return note;
  }



};

var listall=()=>{
  return fetch_notes();

};

var read=(title)=>{
  var temp=fetch_notes();
  temp=temp.filter((word)=>word.title===title);
  if(temp.length===0)
    return temp;
  else
    return temp;
};

var remove=(title)=>{
  var notes=fetch_notes();
  var temp=notes.filter((word)=>word.title!=title);
  save_notes(temp);
  if(notes.length===temp.length)
    return false;
  else {
    return true;
  }

}


var display=(note)=>{
  debugger;
  console.log("----");
  console.log(`Title--->${note.title}`);
  console.log(`Body--->${note.body}`);
}

module.exports={
  addnotes,listall,read,remove,display
};
