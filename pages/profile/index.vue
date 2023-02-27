<template>
  <div>
    <div v-if="loading">
      <v-progress-circular indeterminate color="green"></v-progress-circular>
    </div>
    <div v-else>
      <li v-for="user in state.profiles" :key="user.id">
        <NuxtLink :to="`/profile/${user.id}`"> {{ user.username }} </NuxtLink>
      </li>
    </div>
  </div>
</template>
<script setup>
const { getAllUsers } = useProfiles();

const loading = ref(false);
const state = reactive({ profiles: [] });
// get all profiles
async function getProfiles() {
  loading.value = true;
  try {
    const response = await getAllUsers();
    state.profiles = response;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  getProfiles();
});
useDynamicHeader("Profiles Page", 'Welcome to the Profiles Page')
</script>
<style></style>
