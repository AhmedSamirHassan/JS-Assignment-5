
var websitName = document.getElementById('bookName');
var websitUrl = document.getElementById('WebSite-Url');
var websiteList;
if(localStorage.getItem('webList')==null) {
    websiteList = [];
}
else {
    websiteList = JSON.parse(localStorage.getItem('webList'));
    display();
}

function display() {
    var trs = ''
    for(var i=0 ; i<websiteList.length ; i++){
        trs += `
            <tr class="">
            <td>${i+1}</td>
            <td>${websiteList[i].webName}</td>
            <td><a href="${websiteList[i].webUrl}" id="websiteLink" target="_blank"><button class="btn btn-info"><i class="fas fa-eye"></i>  Visit</button></a></td>
            <td><button class="btn btn-info" onclick="deleteWebsit(${i})"><i class="fas fa-trash"></i>  Delete</button></td>
            </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=trs;
}

var buttonSubmit = document.getElementById('but');
buttonSubmit.onclick = addWebsit;

function addWebsit() {
    if(validationUrl()===true) {
        var websiteObj = {
            webName : websitName.value,
            webUrl : websitUrl.value
        }
        websiteList.push(websiteObj);
        localStorage.setItem('webList', JSON.stringify(websiteList));
        display();
    }
    else {
        alert("Invalid")
    }
}

function deleteWebsit(index) {
    websiteList.splice(index, 1);
    localStorage.setItem('webList', JSON.stringify(websiteList));
    display();
}

function validationUrl() {
    var validateUrl = /^(https:)\/\/[w]{3}\.[a-zA-Z0-9]+\.(com)$/;
    var websittUrl = websitUrl.value;
    if(validateUrl.test(websittUrl)) {
        return true;
    }
    else {
        return false;
    }
}