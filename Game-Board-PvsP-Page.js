

var board = [[0,0,0],
            [0,0,0],
            [0,0,0]];

var counter = 0 ;
var a ,b;




function cell1(){

    counter++;
    a =0, b=0;

    if(counter % 2 != 0){

        document.getElementById("cell1").value =  "X";
        document.getElementById('cell1').onclick = null;

       board[a][b]=1;
    }else{
        document.getElementById("cell1").value =   "O";
        document.getElementById('cell1').onclick = null;
        
        board[a][b]=2;
    }



    if(checkIfWin(a,b)){
        alert("You Winn!!");
    }


    
}
function cell2(){
    counter++;
    a =0, b=1;

    if(counter % 2 != 0){

       document.getElementById("cell2").value =  "X";
       document.getElementById('cell2').onclick = null;

       board[a][b]=1;
    
    }else{
        document.getElementById("cell2").value =   "O";
        document.getElementById('cell2').onclick = null;
        
        board[a][b]=2;
    }


    

    if(checkIfWin(a,b)){
        
        alert("You Winn!!");
    }
   
    
}

function cell3(){
    counter++;
    a =0, b=2;

    if(counter % 2 != 0){

       document.getElementById("cell3").value =  "X";
       document.getElementById('cell3').onclick = null;

       board[a][b]=1;
      
    }else{
        document.getElementById("cell3").value =   "O";
        document.getElementById('cell3').onclick = null;

        board[a][b]=2;
        
    }


    if(checkIfWin(a,b)){
        alert("You Winn!!");
    }
   
}

function cell4(){
    counter++;
    a =1, b=0;

    if(counter % 2 != 0){

        document.getElementById("cell4").value =  "X";
        document.getElementById('cell4').onclick = null;
        
       board[a][b]=1;
       
    }else{
        document.getElementById("cell4").value =   "O";
        document.getElementById('cell4').onclick = null;

        board[a][b]=2;
    }

 
    if(checkIfWin(a,b)){
        
        alert("You Winn!!");
    }
   
}

function cell5(){
    counter++;
    a =1, b=1;

    if(counter % 2 != 0){

       document.getElementById("cell5").value =  "X";
       document.getElementById('cell5').onclick = null;

       board[a][b]=1;
      
    }else{
        document.getElementById("cell5").value =   "O";
        document.getElementById('cell5').onclick = null;

        board[a][b]=2;
       
    }



    if(checkIfWin(a,b)){
        
        alert("You Winn!!");
    }
   
   
    
}

function cell6(){
    counter++;
    a =1, b=2;

    if(counter % 2 != 0){

       document.getElementById("cell6").value =  "X";
       document.getElementById('cell6').onclick = null;

       board[a][b]=1;
       
    }else{
        document.getElementById("cell6").value =   "O";
        document.getElementById('cell6').onclick = null;

        board[a][b]=2;
        
    }

    

    if(checkIfWin(a,b)){
        
        alert("You Winn!!");
    }
   
    
}

function cell7(){
    counter++;
    a =2, b=0;

    if(counter % 2 != 0){
        document.getElementById("cell7").value =  "X";
        document.getElementById('cell7').onclick = null;

       board[a][b]=1;
       
    }else{
        document.getElementById("cell7").value =   "O";
        document.getElementById('cell7').onclick = null;

        board[a][b]=2;
       
    }

   

    if(checkIfWin(a,b)){
        
        alert("You Winn!!");
    }
   
    

}

function cell8(){
    counter++;
    a =2, b=1;

    if(counter % 2 != 0){

       document.getElementById("cell8").value =  "X";
       document.getElementById('cell8').onclick = null;

       board[a][b]=1;
       
    }else{
        document.getElementById("cell8").value =   "O";
        document.getElementById('cell8').onclick = null;

        board[a][b]=2;
        
    }

 

    if(checkIfWin(a,b)){
        
        alert("You Winn!!");
    }
   
    
}
function cell9(){
    counter++;
    a =2, b=2;

    if(counter % 2 != 0){

       
         document.getElementById("cell9").value = "X";
         document.getElementById('cell9').onclick = null;

       board[a][b]=1;
       
    }else{
        document.getElementById("cell9").value = "O";
        document.getElementById('cell9').onclick = null;

        board[a][b]=2;
       
    }

   

    if(checkIfWin(a,b)){
       
        alert("You Winn!!");
    }
   
   


    
}
function checkIfWin(a,b){
    var flag1 = 0;
    var flag2 = 0;

    for ( i = 0; i< 3; i++) {
        
        if(board[i][0]==1){
            flag1 ++ ;
        } 
        if(board[i][0]==2){
            flag2 ++ ;
        } 

    }
    if( flag1 == 3 || flag2 == 3){
        return true;
    }

    flag1 = 0;
    flag2 = 0;
    for ( i = 0; i< 3; i++) {
        
        if(board[i][1]==1){
            flag1 ++ ;
        } 
        if(board[i][1]==2){
            flag2 ++ ;
        } 
    }
    if( flag1 == 3 || flag2 == 3 ){
        return true;
    }

    flag1 = 0;
    flag2 = 0;
    for ( i = 0; i< 3; i++) {
        
        if(board[i][2]==1){
            flag1 ++ ;
        } 
        if(board[i][2]==2){
            flag2 ++ ;
        } 
    }
    if( flag2 == 3 || flag2 == 3 ){
        return true;
    }
    
    flag1 = 0;
    flag2 = 0;
    for ( j = 0; j< 3; j++) {
        
        if(board[0][j]==1){
            flag1 ++ ;
        } 
        if(board[0][j]==2){
            flag2 ++ ;
        } 
    }
    if( flag1 == 3 || flag2 == 3 ){
        return true;
    }

    flag1 = 0;
    flag2 = 0;
    for ( j = 0; j< 3; j++) {
        
        if(board[1][j]==1){
            flag1 ++ ;
        } 
        if(board[1][j]==2){
            flag2 ++ ;
        } 
    }
    if( flag1 == 3  || flag2 == 3 ){
        return true;
    }

    flag1 = 0;
    flag2 = 0;
    for ( j = 0; j< 3; j++) {
        
        if(board[2][j]==1){
            flag1 ++ ;
        } 
        if(board[2][j]==2){
            flag2 ++ ;
        } 
    }
    if( flag1 == 3  || flag2 == 3 ){
        return true;
    }

    flag1 = 0;
    flag2 = 0;
    for ( k = 0; k< 3; k++) {
        
        if(board[k][k]==1){
            flag1 ++ ;
        } 
        if(board[k][k]==2){
            flag2 ++ ;
        } 
    }
    if( flag1 == 3  || flag2 == 3 ){
        return true;
    }

    flag1 = 0;
    flag2 = 0;
    for ( i = 0,j=2; i<3; i++,j--) {
       
        
            if(board[i][j]==1){
                flag1 ++ ;
            } 
            if(board[i][j]==2){
               flag2 ++ ;
            } 
        
    }
    if( flag1 == 3  || flag2 == 3 ){
        return true;
    }else{
        return false;
    }
    
}

