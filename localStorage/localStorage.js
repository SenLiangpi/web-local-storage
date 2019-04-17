/*
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-04-01 14:31:42
 * @LastEditTime: 2019-04-13 22:32:53
 */

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
 