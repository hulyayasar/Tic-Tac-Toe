var a, b;
var codes = {};

var express = require('express');
var app = express();
var idCounter = 0;

app.post('/post', (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query)

    if (z['action']=='computerTurn'){
        idCounter++;
        var jsontext=JSON.stringify({
            'action':'computerTurn',
            'flag': flag,
            
        })
    } else if (z['action']=='computerTurn') {
        var flag = false;
        for ( i = 0; i< 3; i++) {
            for (j = 0; j< 3; j++) {
            
                if(board[i][j] == 0){
                    flag=false;
                }
            }
        }
        return flag;
    
        

    } else{
        res.send(JSON.stringify({ 'msg': 'error!!!' }));

    }
}).listen(3000);


function computerTurn(codes,a,b){

    do{
        
        randomC = Math.floor(Math.random()*3);
        console.log(randomC);
        randomR = Math.floor(Math.random()*3);
        console.log(randomR);

    }while(board[randomC][randomR] != 0)
    
    board[randomC][randomR] = 2;
    counter++;

    if(randomC == 0){
        if(randomR == 0){
            document.getElementById("cell1").value =   "O";
            document.getElementById('cell1').onclick = null;

            document.getElementById("cell1").disabled = true;


        }
        else if(randomR == 1){
            document.getElementById("cell2").value =   "O";
            document.getElementById('cell2').onclick = null;

            document.getElementById("cell2").disabled = true;


        }
        else if(randomR == 2){
            document.getElementById("cell3").value =   "O";
            document.getElementById('cell3').onclick = null;

            document.getElementById("cell3").disabled = true;


        }
    }
    else if(randomC == 1){
        if(randomR == 0){
            document.getElementById("cell4").value =   "O";
            document.getElementById('cell4').onclick = null;

            document.getElementById("cell4").disabled = true;


        }
        else if(randomR == 1){
            document.getElementById("cell5").value =   "O";
            document.getElementById('cell5').onclick = null;

            document.getElementById("cell5").disabled = true;


        }
        else if(randomR == 2){
            document.getElementById("cell6").value =   "O";
            document.getElementById('cell6').onclick = null;

            document.getElementById("cell6").disabled = true;


        }
    }
    else if(randomC == 2){
        if(randomR == 0){
            document.getElementById("cell7").value =   "O";
            document.getElementById('cell7').onclick = null;

            document.getElementById("cell7").disabled = true;

        }
        else if(randomR == 1){
            document.getElementById("cell8").value =   "O";
            document.getElementById('cell8').onclick = null;

            document.getElementById("cell8").disabled = true;

        }
        else if(randomR == 2){
            document.getElementById("cell9").value =   "O";
            document.getElementById('cell9').onclick = null;

            document.getElementById("cell9").disabled = true;


        }
    }
    
}


