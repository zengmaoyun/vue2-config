import Vue from "vue"
import App from "./App"
import router from './Router'

new Vue({
	el: "#app",
	router,
	template: '<App/>',
    components: {App}
});

