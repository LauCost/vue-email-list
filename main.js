const root = new Vue({

    el: "#app",

    data: {

        emails: [],

    },

    mounted() {

        for (i = 0; i < 10; i++) {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(resp => {
                    console.log(resp.data.response);

                    const email = resp.data.response

                    this.emails.push(email)
                })
        }

    }
})