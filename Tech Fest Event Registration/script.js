let events=[];

function addEvent(){
    let event = document.getElementById("event").value.trim();
    
    if (event == ""){
        alert("Please enter an event name");
        return;
    }
    
    events.push(event);

    if(event.lenghth>=3){
        alert("You can join maximum of 3 events");
        return;
    }

    document.getElementById("event").value == "";
    alert("Event Added")  
}

function confirmRegistration(){
    let name = document.getElementById("studentName").value.trim();

    if( name == "" ){
        alert("Enter your name!");
        return;
    }

    if(events.length == ""){
        alert("No events has been added.");
        return;
    }

}