
function createcontainer(tagname,attrname,attrvalue){
    var head1=document.createElement(tagname);
    head1.setAttribute(attrname,attrvalue);
    return head1
}

function createhead(tagname,attrname,attrvalue,content){
    var head1=document.createElement(tagname);
    head1.setAttribute(attrname,attrvalue);
    head1.innerHTML=content;
    return head1
}

function createptag(tagname,attrname,attrvalue,content){
    var head1=document.createElement(tagname);
    head1.setAttribute(attrname,attrvalue);
    head1.innerHTML=content;
    return head1
}

function createcalculator(tagname,attrname,attrvalue){
    var head1=document.createElement(tagname);
    head1.setAttribute(attrname,attrvalue);
    return head1
}



function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var head1=document.createElement(tagname);
    head1.setAttribute(attrname,attrvalue);
    head1.setAttribute(attrname1,attrvalue1);
    head1.setAttribute(attrname2,attrvalue2);
    return head1
}


function creatbutton(tagname,attrname,attrvalue,idname,idvalue,content){
    var head1=document.createElement(tagname);
    head1.setAttribute(attrname,attrvalue);
    head1.setAttribute(idname,idvalue);
    head1.innerHTML=content;
    return head1
}

function creatbutton2(tagname,attrname,attrvalue,classname,classvalue,idname,idvalue,content){
    var head1=document.createElement(tagname);
    head1.setAttribute(attrname,attrvalue);
    head1.setAttribute(classname,classvalue);
    head1.setAttribute(idname,idvalue);
    head1.innerHTML=content;
    return head1
}


var container=createcontainer("div","class","container");
var headtag=createhead("h1","id","title","calculator");
var paragraph=createptag("p","id","description","This is a calculator built by using dom");
var calc=createcalculator("div","class","calculator");
var input=createinput("input","type","text","placeholder","0","id","result");
var buttonclear=creatbutton("button","onclick","clear()","id","clear","Cl");
var button1=creatbutton("button","onclick","del()","id","delete","Del");
var button2=creatbutton("button","onclick","display('%')","id","%","%");
var button3=creatbutton("button","onclick","display('/')","id","/","/");
var button4=creatbutton("button","onclick","display('7')","id","7","7");
var button5=creatbutton("button","onclick","display('8')","id","8","8");
var button6=creatbutton("button","onclick","display('9')","id","9","9");
var button7=creatbutton("button","onclick","display('*')","id","*","*");
var button8=creatbutton("button","onclick","display('4')","id","4","4");
var button9=creatbutton("button","onclick","display('5')","id","5","5");
var button10=creatbutton("button","onclick","display('6')","id","6","6");
var button11=creatbutton("button","onclick","display('-')","id","subtract","-");
var button12=creatbutton("button","onclick","display('1')","id","1","1");
var button13=creatbutton("button","onclick","display('2')","id","2","2");
var button14=creatbutton("button","onclick","display('3')","id","3","3");
var button15=creatbutton("button","onclick","display('+')","id","add","+");
var button16=creatbutton("button","onclick","display('.')","id",".",".");
var button17=creatbutton("button","onclick","display('0')","id","0","0");
var button18=creatbutton2("button","onclick","calculate()","class","equal","id","equal","=");



calc.append(input,buttonclear,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17,button18);
container.append(headtag,paragraph,calc);
document.body.append(container);


let output = document.getElementById("result");

function display(number){
    output.value +=number;
    return output
}
function calculate(){
    try{
        output.value=eval(output.value);

    }
    catch(error){
        alert("invalid")
    }
}


function del(){
    output.value=output.value.slice(0,-1);
}

function clear(){
    output.value="0";
}

