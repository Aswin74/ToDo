// Create a "close" button and append it to each list item

var myList=document.getElementsByTagName('li');
var i;
for(i=0;i<myList.length;i++){
    var span=document.createElement('span');
    var txt=document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(txt)
    myList[i].appendChild(span);
}

//Click close button hide

var close=document.getElementsByClassName('close');
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}

//Checked symbol on click

var list = document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName ==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);

//add new

function newElement(){
    var li= document.createElement('li');
    var inp=document.getElementById('addNew').value;
    var t=document.createTextNode('inp');
    li.appendChild(t);
}

