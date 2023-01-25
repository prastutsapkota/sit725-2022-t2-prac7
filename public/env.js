const testButtonFunction=()=>{
    alert('Thank you for clicking')
  }
  
  // connect to the socket
  
  let socket = io();
  
  
  socket.on('number', (msg) => {
      console.log('Generating Random Number: ' + msg);
  })
  
  console.log('test function')
  $(document).ready(function(){
    console.log('Ready')
    
    //bind the button
    $('#testButton').click(testButtonFunction)
  
    //test get call
    $.get('/test?user_name="Fantastic User"',(result)=>{
      console.log(result)
    })
  
  
  })