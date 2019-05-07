/*
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-05-06 16:43:50
 * @LastEditTime: 2019-05-07 10:55:15
 */
//检测浏览器是否支持
if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
var pipiIndexDB, pipidb;
class indexedDBpipi {
    databaseOpen(databaseName, version) {
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
        }
    }
    tableOpen(name,key) {
        if (!pipidb.objectStoreNames.contains(name)) {
            pipidb.createObjectStore(name, { keyPath: key});
            console.log(name + "表创建成功");
        } else {
            console.log(name + "表名重复");
        }
    }
    add(){
        
    }
}

// function indexedDBpipi(databaseName,version){
//     const indexDB = window.indexedDB.open("pipi",1);

// }