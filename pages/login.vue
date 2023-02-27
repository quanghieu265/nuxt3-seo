<template>
  <div>
    <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form v-model="state.validate" @submit.prevent="onSubmit">
          <v-text-field variant="outlined" v-model="state.username" :readonly="state.loading" :rules="[required]"
            class="mb-2" clearable label="Username"></v-text-field>

          <v-text-field variant="outlined" v-model="state.password" :readonly="state.loading" :rules="[required]"
            clearable label="Password" placeholder="Enter your password"></v-text-field>

          <br />

          <v-btn :disabled="!state.validate" :loading="state.loading" block color="success" size="large" type="submit"
            variant="elevated">
            Sign In
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
  loading: false,
  validate: false
});

const required = v => {
  return !!v || "Field is required";
};

const onSubmit = async () => {
  if (!state.validate) return;

  state.loading = true;

  // call api login
  const { login } = useAuth();

  try {
    await login({
      username: state.username,
      password: state.password
    });
    return navigateTo("/");
  } catch (error) {
    openAlert({
      type: "error",
      message: error.response._data.message,
      isOpen: true
    });
  } finally {
    state.loading = false;
  }
};

definePageMeta({
  layout: "custom",
})
useDynamicHeader("Login Page", 'Welcome to the Login Page')
</script>
<style></style>
