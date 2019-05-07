/*
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-05-06 16:43:50
 * @LastEditTime: 2019-05-06 18:06:20
 */
//检测浏览器是否支持
if(!window.indexedDB){
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

class indexedDBpipi{
    databaseOpen(){
        const indexDB = window.indexedDB.open("pipi",1);
        var json = {
            onerror : indexDB.onerror = function(event) {
                console.log(event);
                return event
            },
            onsuccess : indexDB.onsuccess = function(event) {
                console.log(event);
                return event
            }
        }
        return json;
    }
    tableOpen(){
        
    }
}

// function indexedDBpipi(databaseName,version){
//     const indexDB = window.indexedDB.open("pipi",1);
    
// }