document.getElementById('myButton').addEventListener('click', function () {
    alert('You got that first badge: "cliked the button"!')
    })
body{
    
    color: blue;
}
.primariybutton {
    background-color: rgb(124, 191, 210);
    border-radius: 10px;
    border: 5px solid;
    border-color: aqua;
    cursor: pointer;
}
.primariybutton:hover {
    background-color:rgb(20, 133, 220);
}
.mix-button {
    background: linear-gradient(to right, #3498db, #e74c3c);
    color: #fff;
    padding: 10px 20px;
    border: 5px solid rgb(223, 196, 160);
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s; /* Add a transition for smooth effect */
}
  
  /* Define styles for the button when hovered */
.mix-button:hover {
    background: linear-gradient(to left, #6eb7e8, #cc6459);
    transition: background 3s;
    background: linear-gradient(to left, #69bbf3, #da594b);
    transition: background 3s;
    background: linear-gradient(to left, #51b0f0, #e34d3c);
}
