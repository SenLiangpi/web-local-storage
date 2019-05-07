/*
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-05-06 16:43:50
 * @LastEditTime: 2019-05-07 17:04:31
 */
//检测浏览器是否支持
if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
var pipiIndexDB, pipidb;
class indexedDBpipi {
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
    read(name,key){
        var request = pipidb.transaction([name]).objectStore(name).get(key);
        request.onsuccess = function (event){
            
        }
    }
}

// function indexedDBpipi(databaseName,version){
//     const indexDB = window.indexedDB.open("pipi",1);

// }