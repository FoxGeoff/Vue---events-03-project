/**
 * File app.js
 */
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "test",
    };
  },
  watch: {
    //exe when 'name' prop changes. no return.
    // watch has name(newNameVal, oldNameVal) built in
    // This would replace the computed property 'fullName'
    name(val) {
     this.fullName = val + " Shwali";
    },
  },
  // These are funtion wihich act like methods. Avoiding reloads
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " Fox";
    },
  },
  methods: {
    myFormSubmitBeter() {
      alert("A better form submit");
    },
    myFormSubmit(event) {
      alert("mySubmit");
      // stops form submit to server
      event.preventDefault();
    },
    setName(event) {
      // this straight Javascript '$event' is being passed
      // note dev tool  F12 shows 'fashing' changes in code
      this.name = event.target.value;
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
