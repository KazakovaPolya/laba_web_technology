let Clock = function()
            {   
            let  datecur, hour, minute;     
            let time ="";
            datecur = new Date();
            hour = datecur.getHours();
            minute= datecur.getMinutes();
            sec = datecur.getSeconds();
            time  = ((hour <10) ? ":0" : "" ) + hour;
            time  += ((minute <10) ? ":0" : ":" ) +  minute;
            time  += ((sec <10) ? ":0" : ":" ) +  sec;
            tmr = document.getElementById("clock");
            tmr.innerText = time; 
            (minute%2==0) ? document.getElementById("clock").style.color='red': 
            document.getElementById("clock").style.color='blue';
            }