/*
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-04-02 08:55:38
 * @LastEditTime: 2019-04-02 14:39:03
 */

if(!window.indexedDB){
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

var indexDB = window.indexedDB.open('pipi',1);

indexDB.onerror = function (event) {
    console.log('Failure');
    console.log(event);
}

var db;
indexDB.onsuccess = function (event){
    db = indexDB.result;
    console.log('Success');
    console.log(event);
}

indexDB.onupgradeneeded = function(event){
    db = event.target.result;
    var objectStore;
    if(!db.objectStoreNames.contains('pipi')){
        objectStore = db.createObjectStore('pipi',{keyPath: 'id'});
        // objectStore = db.createObjectStore('person',{ autoIncrement: true });
        objectStore.createIndex('name','name',{ unique: false });
        objectStore.createIndex('email','email',{ unique: false });
    }
}

function add(){
    var request = db.transaction(['pipi'],'readwrite').objectStore('pipi')
    .add({id:1,name:'name',age:24,email:'@gmail.com'});
    request.onsuccess = function (event){
        console.log(event);
        console.log('Success');
    }
    request.onerror = function(event){
        console.log(event);
        console.log('Failure');
    }
}

function read(){
    var transaction = db.transaction(['pipi']);
    var objectStore = transaction.objectStore('pipi');
    var request = objectStore.get(1);

    request.onerror = function(event){
        console.log('Failure');
        console.log(event);
    }
    request.onsuccess = function (event){
        if(request.result){
            console.log(request.result);
        }else{
            console.log('Failure');
            console.log(event);
        }
    }
}
function readAll(){
    var objectStore = db.transaction('pipi').objectStore('pipi');
    objectStore.openCursor().onsuccess = function (event){
        var cursor = event.target.result;
        if(cursor){
            console.log(cursor);
            console.log('Success');
        }else{
            console.log('No data');
        }
    }
}

function update(){
    var request = db.transaction(['pipi'],'readwrite').objectStore('pipi')
    .put({id: 1,name:"pipi",age:100,email:"pipi@gmail.com"});
    request.onsuccess = function (event) { 
        console.log("Success")
    }
    request.onerror = function(event){
        console.log("Failure");
    }
}

function remove(){
    var request = db.transaction(['pipi'],'readwrite')
    .objectStore('pipi')
    .delete(1);
    request.onsuccess = function(event){
        console.log("Success");
    }
}
