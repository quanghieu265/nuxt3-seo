<template>
  <Teleport to="body">
    <v-alert id="alert-layout" v-model="useAlertData().value.isOpen" closable :text="useAlertData().value.message"
      :type="useAlertData().value.type" position="absolute"></v-alert>
  </Teleport>
</template>

<script setup>
const { useAlertData } = useAlert();
</script>

<style>
#alert-layout {
  z-index: 999;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
