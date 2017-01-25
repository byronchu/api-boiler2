
var event = {
  age: 33,
  name: "Ruegen",
  hobbies: ['outdoors', 'video games'],
  sayMyName: function() {
    console.log(this.name)
  },
  preventDefault() {
    console.log('stopped submission')
  },
  event: {
    target: {
      name: {
        value: 'Aschenbrenner'
      }
    }
  }
}
var Button = {
  props: {
    cities: ['Melbourne', 'Bendigo', 'Ballarat']
    state: 'Victoria'
  },
  state: {}
  propTypes: {

  }
  didComponentMount: function() {

  },
  setState: function() {

  }

}

event.sayMyName()
event.preventDefault()
console.log(event.target.name.value)
