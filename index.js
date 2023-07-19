// input refrence
let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
//to store the result;
let string = "";
//to create the array of buttons
let arr=Array.from(buttons);
//to iterate on buttons
arr.forEach(button =>
    {   
        //add event listener.
        button.addEventListener('click',(e)=>
        {
            if(e.target.innerHTML == '=')
            {
                //eval is inbuilt javascript function it give final result of what ever input in the string.
                string = eval(string);
                input.value=string;

            }
            else if(e.target.innerHTML == 'AC')
            {
                string="";
                input.value=string;
            }
            else if(e.target.innerHTML =='DEL')
            {    //here we are using substring function of string
                 string=string.substring(0,string.length-1);
                 input.value=string;
            }
            else
            {
            string +=e.target.innerHTML;
            input.value=string;
            }
        }
        )
    })
