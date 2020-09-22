const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        myFunction(this.responseText)
    }
};

xhr.open('GET', 'https://github.com/AlexeyMazheykin/ball/blob/master/index.html', true);
xhr.send();

function myFunction(data) {
    console.log(data);
}