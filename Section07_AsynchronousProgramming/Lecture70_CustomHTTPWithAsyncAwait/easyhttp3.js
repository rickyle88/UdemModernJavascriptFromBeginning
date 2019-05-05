/*
* Easy HTTP Library
* Library for making HTTP requests
*
* @ersion 3.0
* @author
* @license
* ES6
*
*/

class EasyHTTP {

    // Make an HTTP GET request
    async get(url) {

        const res = await fetch(url);

        const resData = await res.json();

        return resData;
    }

    // Make an HTTP POST request
    async post(url, data) {

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await res.json();

        return resData;

    }

    // Make an HTTP PUT request
    async put(url, data) {

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await res.json();

        return resData;


    }

    // Make an HTTP DELETE request
    async delete(url) {

        const res = await fetch(url, {
            method: 'DELETE',
            headers:{
                'Content-type': 'application/json'
            }
        });

        if (res.status > 204) {
            return `${res.status} error occured`
        } else {
            const resData = 'Resource Deleted';
            //Return response
            return resData;
        } 


    
    }


}