import { pipi_localStorage } from './localStorage.js'

export class Amx {
  constructor(data) {
    new pipi_localStorage.add(data.name, JSON.stringify(data.store))
  }
  read(key) {
    var data = {}
    var watch = {}
    for (let a = 0; a < key.length; a++) {
      data.key[a] = localStorage.getItem(key[0])
      watch.key[a] = (val, oldVal)=>{
        localStorage.setItem(key[a],JSON.stringify(val))
      }
    }
    return {
      data() {
        return data
      },
      mounted (){
        window.addEventListener('storage',(e)=>{
          console.log(e)
          for(let a = 0; a < key.length; a++){
            if(e.key == key[a]){
              'this'.key[a] = JSON.parse(e.newValue)
            }
          }
          // this.aaa = JSON.parse(e.newValue);
        })
      },
      watch: watch,
    }
  }
}


// new amx({
//   name: '',
//   store: {

//   }
// })

