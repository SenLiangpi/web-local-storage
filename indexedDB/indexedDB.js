/*
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-04-02 08:55:38
 * @LastEditTime: 2019-05-05 16:59:17
 */
//浏览器是否支持
if(!window.indexedDB){
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

class pipi_indexedDB{
    databaseOpen(name,version){
        const indexDB = window.indexedDB.open(name,version);

        let data;

        indexDB.onerror = event => {
            console.log('Failure');
            console.log(event);
            data = {success:"Failure",message:event};
        }

        indexDB.onsuccess = event => {
            db = indexDB.result;
            console.log('Success');
            console.log(event);
            data = {success:"Success",message:{message:event,indexDB:indexDB.result}};
        }

        return data;
        
    }

    tableOpen(indexDB,){
        indexDB.onupgradeneeded = function(event){
            var db = event.target.result;
            var objectStore;
            if(!db.objectStoreNames.contains('pipi')){
                objectStore = db.createObjectStore('pipi',{keyPath: 'id'});
                // objectStore = db.createObjectStore('person',{ autoIncrement: true });
                objectStore.createIndex('name','name',{ unique: false });
                objectStore.createIndex('email','email',{ unique: false });
            }
        }
    }
    
    add(){

    }
}
//打开或创建一个数据库

//报错
indexDB.onerror = function (event) {
    console.log('Failure');
    console.log(event);
}
//成功
var db;
indexDB.onsuccess = function (event){
    db = indexDB.result;
    console.log('Success');
    console.log(event);
}

// 新建一个表
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

// 写入数据
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
// 读出数据
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
// 读出全部数据
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
// 修改数据
function update(){
    var request = db.transaction(['pipi'],'readwrite')
    .objectStore('pipi')
    .put({id: 1,name:"pipi",age:100,email:"pipi@gmail.com"});
    request.onsuccess = function (event) { 
        console.log("Success")
    }
    request.onerror = function(event){
        console.log("Failure");
    }
}
// 删除数据
function remove(){
    var request = db.transaction(['pipi'],'readwrite')
    .objectStore('pipi')
    .delete(1);
    request.onsuccess = function(event){
        console.log("Success");
    }
}
