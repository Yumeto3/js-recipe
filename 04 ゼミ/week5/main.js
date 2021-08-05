new Vue({
    el: "#app",
    data: {
      count: 0,
    },
  
    cretaed: function() {
        this.count = 100
    },
    methods: {
        countUp: function() {
            this.count += 1
        },
    },
    computed: {
        count: function() {
            let count = 0
            for (let i = 0;i<=count; i++) {
                if (i%3 === 0) {
                  console.log (i+ "!!!!!!!");
                }
                else {
                  console.log (i)
           }
          return count  
        }
    }
 }


})