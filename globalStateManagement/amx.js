import { pipi_localStorage } from './localStorage.js'

export class Amx {
  constructor(data) {
    localStorage.setItem(data.name, JSON.stringify(data.store))
  }
  read(key) {
    let data = {}
    data[key] = JSON.parse(localStorage.getItem(key))
    var watch = JSON.parse('{"'+key+'": 5}', function (k, v) {
      if(k === '') return v;
      return {
        handler(val, oldVal){
          localStorage.setItem(key,JSON.stringify(val))
        },
        deep:true
      }
    });
    console.log(watch)
    return {
      data(){
        return data
      },
      mounted(){
        window.addEventListener('storage',(e)=>{
          if(e.key==key){
            this[key] = JSON.parse(e.newValue)
          }
        })
      },
      watch:watch
    }
  }
}

