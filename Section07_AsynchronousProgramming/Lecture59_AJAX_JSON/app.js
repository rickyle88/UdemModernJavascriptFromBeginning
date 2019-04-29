document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'customer.json', true);

    // Onload
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            // I would write a conditional. If customers.length == 0 then build the output. Else show some message.
            const output = `
                            <ul>
                                <li>ID: ${customer.id}</li>
                                <li>Name: ${customer.name}</li>
                                <li>Company: ${customer.company}</li>
                                <li>Phone: ${customer.phone}</li>
                            </ul>
                            `;
            document.getElementById('customer').innerHTML = output;
        }
    }

    // Send
    xhr.send();
}


//////////////////////////////////////////////////////////

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'customers.json', true);

    // Onload
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            // I would write a conditional. If customers.length == 0 then build the output. Else show some message.

            let output = '';

            customers.forEach(customer => {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                `;
            });

          
            document.getElementById('customers').innerHTML = output;
        }
    }

    // Send
    xhr.send();
}