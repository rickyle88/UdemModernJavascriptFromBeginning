// Library
// ES5

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
    // 1)
    this.http.open('GET', url, true);

    // 2)
    let self = this;

    this.http.onload = function () {
        if (self.http.status === 200) {
            // return self.http.responseText;
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    // 3)
    this.http.send();
}

// Make an HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
    // 1)
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');


    // 2)
    let self = this;

    this.http.onload = function () {

        callback(null, self.http.responseText);
    }

    // 3)
    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT request
easyHTTP.prototype.put = function (url, data, callback) {
    // 1)
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');


    // 2)
    let self = this;

    this.http.onload = function () {

        callback(null, self.http.responseText);
    }

    // 3)
    this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE request - RETURN empty object
easyHTTP.prototype.delete = function (url, callback) {
    // 1)
    this.http.open('DELETE', url, true);

    // 2)
    let self = this;

    this.http.onload = function () {
        if (self.http.status === 200) {
            // return self.http.responseText;

            // callback(null, self.http.responseText);
            // Since reponseTest is just empty object, we can generate a message
            callback(null, 'Post deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    // 3)
    this.http.send();
}


