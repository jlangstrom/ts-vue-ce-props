import {defineCustomElement} from "vue";
import AppCe from "./App.ce.vue";

const AppComponent = defineCustomElement(AppCe);

customElements.define("app-ce", AppComponent);