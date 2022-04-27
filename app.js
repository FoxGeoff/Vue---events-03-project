/**
 * File app.js
 */
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods: {
    setName(event) {
      // this straight Javascript '$event' is being passed
      // note dev tool  F12 shows 'fashing' changes in code
      this.name = event.target.value
    },
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
