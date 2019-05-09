/*
 * @Author: pipi(皮皮的皮卡丘)
 * @Email: pisenliang@gmail.com
 * @github: https://github.com/SenLiangpi/
 * @LastEditors: pipi
 * @Date: 2019-05-08 16:30:06
 * @LastEditTime: 2019-05-09 09:04:35
 * webStorage.js v1.0
 */

if(window.navigator.cookieEnabled){
    alert('not support');
}
class pipi_cookie {
    add(name, val, field, time) {
        if (new pipi_cookie().botain(name).success){
            return { success: false, message: "cookie name repeat" };
        }else{
            let date = new Date();
            date.setTime(date.getTime() + (1000 * 60 * time));
            document.cookie = name + '=' + val + ';Path=' + field + ';expires=' + date.toGMTString();
            return { success: true, message: "ok" };
        } 
    }
    botain(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return { success: true, message: unescape(arr[2]) };
        else
            return { success: false, message: "Not found" };
    }
    revise(name, val, field, time) {
        if (new pipi_cookie().botain(name).success) {
            let date = new Date();
            date.setTime(date.getTime() + (1000 * 60 * time));
            document.cookie = name + '=' + val + ';Path=' + field + ';expires=' + date.toGMTString();
            return { success: true, message: "ok" };
        } else {
            return { success: false, message: "Name does not exist" };
        }
    }
    delete(name){
        if (new pipi_cookie().botain(name).success) {
            let date = new Date();
            date.setTime(date.getTime());
            document.cookie = name + '=0;Path=/;expires=' + date.toGMTString();
            return { success: true, message: "ok" };
        } else {
            return { success: false, message: "Name does not exist" };
        }
    }
}

class pipi_localStorage {
    add(name,val) {
        if(localStorage.getItem(name)==null){
            localStorage.setItem(name,val);
            return { success: true, message: "ok" };
        }else{
            return { success: false, message: "cookie name repeat" };
        }
    }
    botain(name) {
        if(localStorage.getItem(name)==null){
            return { success: false, message: "Not found" };
        }else{
            return { success: true, message: localStorage.getItem(name) }
        }
    }
    revise(name,val) {
        if(localStorage.getItem(name)==null){
            return { success: false, message: "Name does not exist" };
        }else{
            localStorage.setItem(name, val);
            return { success: true, message: "ok" }
        }
    }
    delete(name){
        if(localStorage.getItem(name)==null){
            return { success: false, message: "Name does not exist" };
        }else{
            localStorage.removeItem(name);
            return { success: true, message: "ok" }
        }
    }
 }

if (!window.indexedDB) {
    alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
var pipiIndexDB, pipidb;
class pipi_indexedDB {
    databaseOpen(databaseName, version,tableOpenJson) {
        pipiIndexDB = window.indexedDB.open(databaseName, version);
        pipiIndexDB.onerror = event => {
            console.log('Failure');
            console.log(event);
        }
        pipiIndexDB.onsuccess = event => {
            console.log('Success');
            console.log(event);
            pipidb = pipiIndexDB.result;
        }
        pipiIndexDB.onupgradeneeded = event => {
            console.log('Upgrading...');
            console.log(event);
            pipidb = event.target.result;
            for(var a = 0;a<tableOpenJson.length;a++){
                if (!pipidb.objectStoreNames.contains(tableOpenJson[a].name)) {
                    pipidb.createObjectStore(tableOpenJson[a].name, { keyPath: tableOpenJson[a].key});
                    console.log(tableOpenJson[a].name + "表创建成功");
                } else {
                    console.log(tableOpenJson[a].name + "表名重复");
                }
            }
        }
    }
    add(name,key,val,onsuccess,onerror){
        let request = pipidb.transaction([name],'readwrite').objectStore(name).add({name:key,val:val});
        request.onsuccess = onsuccess;
        request.onerror = onerror;
    }
    read(name,key,onsuccess,onerror){
        var request = pipidb.transaction([name]).objectStore(name).get(key);
        request.onsuccess = onsuccess;
        request.onerror = onerror;
    }
    readAll(name,onsuccess,onerror){
        var request = pipidb.transaction([name],'readonly').objectStore(name).openCursor();
        request.onsuccess = onsuccess;
        request.onerror = onerror;
    }
    update(name,key,val,onsuccess,onerror){
        var request = pipidb.transaction([name],'readwrite').objectStore(name).put({name:key,val:val});
        request.onsuccess = onsuccess;
        request.onerror = onerror;
    }
    remove(name,key,onsuccess,onerror){
        var request = pipidb.transaction([name],'readwrite').objectStore(name).delete(key);
        request.onsuccess = onsuccess;
        request.onerror = onerror;
    }
}