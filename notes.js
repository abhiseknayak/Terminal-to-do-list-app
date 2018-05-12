console.log('starting temp.js');
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
  var arr1=fetch_notes();
  for(var i=0;i<arr1.length;i++)
  {
    console.log(`${i+1} title:${arr1[i].title} body:${arr1[i].body}`);
  }
};

var read=(title)=>{
  var temp=fetch_notes();
  temp=temp.filter((word)=>word.title===title);
  if(temp.length===0)
    console.log("note doesn't exist");
  else
    console.log(`the title is ${temp[0].title} body is ${temp[0].body}`);
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

module.exports={
  addnotes,listall,read,remove
};
