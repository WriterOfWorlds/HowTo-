var vuerray = [];
var inp = "";
while (inp != null) {
  var inp = prompt("Array entry");
  if (inp != null) {
    vuerray.push({message:inp});
  }
}

Vue.createApp({
  data() {
    return {
      message: 'How to make your website look like it was made after 2001'
    }
  }
}).mount('#title')

// Vue.createApp({
//   data() {
//     return {
//       items: vuerray
//     }
//   }
// }).mount('#array-rendering')

Vue.createApp({
  data() {
    return {
      selected: 'Enabled',
      items: vuerray
    }
  }
}).mount('#v-model-select-dynamic')