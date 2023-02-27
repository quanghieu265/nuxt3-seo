<template>
  <div>
    <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form v-model="state.validate" @submit.prevent="onSubmit">
          <v-text-field variant="outlined" v-model="state.username" :readonly="state.loading" :rules="[required]"
            class="mb-2" clearable label="Username"></v-text-field>

          <v-text-field variant="outlined" v-model="state.email" :readonly="state.loading" :rules="[validateEmail]"
            class="mb-2" clearable label="Email"></v-text-field>

          <v-text-field variant="outlined" v-model="state.password" :readonly="state.loading" :rules="[required]"
            clearable label="Password" placeholder="Enter your password"></v-text-field>

          <br />

          <v-btn :disabled="!state.validate" :loading="state.loading" block color="success" size="large" type="submit"
            variant="elevated">
            Sign Up
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const { openAlert } = useAlert();
const state = reactive({
  username: "",
  password: "",
  email: "",
  loading: false,
  validate: false
});

const required = v => {
  return !!v || "Field is required";
};

const validateEmail = v => {
  if (/^[a-z.0-9-]+@[a-z.-]+\.[a-z]+$/i.test(v)) return true;
  return "Must be a valid e-mail.";
};

const onSubmit = async () => {
  if (!state.validate) return;

  state.loading = true;

  // call api login
  const { signUp } = useAuth();

  await signUp({
    username: state.username,
    password: state.password,
    email: state.email
  });
  openAlert({
    message: "Register successful",
    isOpen: true,
    type: "success"
  });
  return navigateTo("/login");
};

definePageMeta({
  layout: "custom",
})
useDynamicHeader("Sign Up Page", 'Welcome to the Sign Up Page')
</script>
<style></style>
