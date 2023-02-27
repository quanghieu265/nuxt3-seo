<template>
  <div>
    <div>profile {{ route.params.id }}</div>
    <div>Username: {{ state.profiles.username }}</div>
    <div>email: {{ state.profiles.email }}</div>
  </div>
</template>

<script setup>
const route = useRoute();
const { getUserById } = useProfiles();
const state = reactive({ profiles: {} });

const getProfileById = async id => {
  const response = await getUserById(id);
  state.profiles = response;
};

onMounted(() => {
  getProfileById(route.params.id);
});

definePageMeta({
  validate: async route => {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id);
  },
});
</script>

<style></style>
