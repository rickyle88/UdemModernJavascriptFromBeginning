document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create-instantiate XHR Object
    const xhr = new XMLHttpRequest();

    // 1) Open
    // 3rd para : asyn true or false
    xhr.open('GET', 'data.txt', true);

    // readyState = 1
    console.log('Get READY STATE ', xhr.readyState);

    // 1.5) Optional - Used for spinners / loaders
    xhr.onprogress = function(){

        // readyState = 3;
        console.log('Get READY STATE ', xhr.readyState);
    }


    // 2) On load
    // We don't need to check from readyState === 4, onLoad() already included it
    xhr.onload = function(){

        // readyState = 4;
        console.log('Get READY STATE ', xhr.readyState);

        if(this.status === 200){
            console.log("Get XHR response text from text file: " + this.responseText);
        }

        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;


    }

    // 2) Old way: display readyState from 1 to -4
    // xhr.onreadystatechange = function(){

    //     console.log('Get READY STATE ', xhr.readyState);

    //     if(this.status === 200 & this.readyState === 4){
    //         console.log("Get XHR response text from text file: " + this.responseText);
    //     }
    // }

    // 2.5 Check Error
    xhr.onerror = function(){
        console.log('Request error...');
    }

    // 3) Send
    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Status
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not found"
}