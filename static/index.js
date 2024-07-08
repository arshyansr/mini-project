function select() {
           
    

    var array = ['Paper' , 'Rock' , 'scissor'];

    var pc = array[Math.floor(Math.random()*array.length)];
    var show = document.getElementById("show");
    show.innerHTML = pc;

     


    // alert(pc);
    console.log(pc);




    // document.getElementById('game').src = pic;
}
