var Questions=[
    {
        question:"which data type that is not primitive data type in javascript?",
        options:["Object type","String","Number","Boolean"],
        answer:"Object type",
        answerbtn:"btn1",
        description:""
    },
    {
        question:"What is the correct syntax for referring to an external script called index.js?",
        options:[" <script src=”index.js”>"," <script href=”index.js”>","<script ref=”index.js”>"," <script name=”index.js”>"],
        answer:"<script src=”index.js”>",
        answerbtn:"btn1",
        description:"The “src” term is used to refer to any JavaScript file."
    },
    {
        question:"JavaScript is a ________ Side Scripting Language",
        options:["Server "," ISP "," Browser ","None of the above"],
        answer:" Browser",
        answerbtn:"btn3",
        description:""
    },
    {
        question:" Which of the following is not the JavaScript operator?",
        options:["typeof","this"," delete","new"],
        answer:"this",
        answerbtn:"btn2",
        description:"This is a keyword so it is not an operator in javascript Hence option is B"
    },
    {
        question:"What will this code print? >>> a=10  >>> alert(a+10)",
        options:["This code will raise an exception"," a+10","None of these","20"],
        answer:"20",
        answerbtn:"btn4",
        description:""
    },
    {
        question:" int a==2;    int b=4;    int ans=a+b;   print(ans);",
        options:["2","6"," error","0"],
        answer:"error",
        answerbtn:"btn3",
        description:""
    },
    {
        question:"  Which of the following function of Array object calls a function for each element in the array?",
        options:["concat()","every()","  filter()"," forEach()"],
        answer:" forEach()",
        answerbtn:"btn4",
        description:"forEach() − Calls a function for each element in the array."
    },
    {
        question:"  Which built-in method returns the characters in a string beginning at the specified location?",
        options:["substr()","getSubstring()"," slice()","None of the above."],
        answer:"substr()",
        answerbtn:"btn1",
        description:"substr() method returns the characters in a string beginning at the specified location through the specified number of characters."
    },
    {
        question:" Which is not valid data type in Javascript?",
        options:["Undefined","Boolean","float"," Number"],
        answer:"float",
        answerbtn:"btn3",
        description:""
    },
    {
        question:"What are the types of Pop up boxes available in JavaScript? ",
        options:[" Prompt","Alert"," Confirm"," All of the above"],
        answer:"All of the above",
        answerbtn:"btn4",
        description:""
    },
];
let question = document.getElementById("question");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let next = document.getElementById("next");
next.addEventListener("click",nextquestion);
var count = 0
function nextquestion(){
    if(count <= 9){
    question.innerText =Questions[count].question;
     btn1.innerText =Questions[count].options[0];
     btn2.innerText =Questions[count].options[1];
     btn3.innerText =Questions[count].options[2];
     btn4.innerText =Questions[count].options[3];
     count++;
     document.getElementById("Description").innerText="";
    

    }
    else{
       
        document.getElementById("end").style.zIndex=1;
        document.getElementById('quizContainer').hidden='true';
        document.getElementById("scoreCard").innerHTML=`Your Score:${score}`
    }
   
}
var score =0

//var scores= document.getElementsById("scoreboard")
function reply_click(clicked_id){
    var clicked_value = clicked_id;
    console.log(clicked_id)
   if(clicked_value == Questions[count-1].answerbtn){
       console.log("Right answer");
      
       score++;
       document.getElementById("scoreboard").innerText ="Your Score "+score;
       document.getElementById("Description").innerHTML='Correct answer <br>'+ Questions[count-1].description;
       document.getElementById("Description").style.backgroundColor = 'green';
    }
   
   
   else {
    document.getElementById("Description").innerText ='wrong answer';
    document.getElementById("Description").style.backgroundColor = 'red';
   }
   
}



function startQuiz(){
    document.getElementById("start").hidden='true';
    nextquestion()
}