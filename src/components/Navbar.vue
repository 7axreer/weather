<template>
    <nav class="nav">
        <a href="#" class="logo">
            <img src="@/assets/images/Logo.svg" alt="" />
            <span class="logo__span">weather</span>
        </a>

        <div class="nav__search">
            <img src="@/assets/images/kaplya.svg" alt="" @click="darkMode" />
            <input type="text" class="nav__search-input" placeholder="Выбрать город" v-model="city" @keydown.enter="getWeather(city), (city = '')" />
        </div>
    </nav>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        data() {
            return {
                city: "",
            };
        },

        methods: {
            ...mapActions(["getWeather"]),

            darkMode() {
                let value = document.body.style.getPropertyValue("--bg");
                // console.log(value);

                if (value == "white") {
                    document.body.style.setProperty("--border", "#2e2e2e");
                    document.body.style.setProperty("--back", "#091621");
                    document.body.style.setProperty("--bg", "#091621");
                    document.body.style.setProperty("--text", "white");
                    document.body.style.setProperty("--cardBack", "transparent");
                    document.body.style.setProperty("--borderSec", "#8d8d8d");
                } else {
                    document.body.style.setProperty("--border", "#e7e7e7");
                    document.body.style.setProperty("--back", "white");
                    document.body.style.setProperty("--bg", "white");
                    document.body.style.setProperty("--text", "black");
                    document.body.style.setProperty("--cardBack", "#4793FF33");
                    document.body.style.setProperty("--borderSec", "#e7e7e7");
                }
            },
        },

        created() {
            document.body.style.setProperty("--bg", "white");
            document.body.style.setProperty("--text", "black");
        },
    };
</script>
