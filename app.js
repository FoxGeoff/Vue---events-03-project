/**
 * File app.js 
 */
const app = Vue.createApp({
  data() {
    return {
      counter:0
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    subtract() {
      this.counter--;
    }
  } 
});

app.mount('#events');