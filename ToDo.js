// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var li;
let i;
for (i = 0; i < myNodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) 
{
    close[i].onclick = function() 
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
if (e.target.tagName === 'LI') 
{
  e.target.classList.toggle('checked');
}
});

var addButton = document.getElementById('addNew');
addButton.addEventListener('click',newElement);

// Create a new list item when clicking on the "Add" button
  function newElement() 
  {
    var li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    ul=document.getElementById("myUL");
    let t = document.createTextNode(inputValue);
   
    if (inputValue === '')
    {
        alert("You must write something!");
    }
    else 
    {
        document.getElementById("myUL").appendChild(li);

        li=document.createElement('LI');

        //create checkbox for each added to-do
        var checkbox= document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');

        //append checkbox to each new to-do item
        var label=document.createElement('label');

        ul.appendChild(li);
        li.appendChild(checkbox);
        label.appendChild(t);
        li.appendChild(label);
    }
    document.getElementById("myInput").value = '';
    
    //create close button append to each added To-Do item
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7"); //\u00D7 is the encoding of unicode data "Multiplication sign(×)"
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    //close the current added list item when clicked "close" button
    for (i = 0; i < close.length; i++) 
    {
      close[i].onclick = function() 
      {
          let div = this.parentElement;
          div.style.display = "none";
      }
    }
  }