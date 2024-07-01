<!-- src/components/CustomButton.vue -->
<template>
  <v-btn :color="color" :variant="variant" @click="onClick">
    <slot />
  </v-btn>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { VBtn } from 'vuetify/components';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'Tonal',
  },
});

const emits = defineEmits(['click']);

const onClick = (event) => {
  emits('click', event);
};
</script>

<style scoped>
/* Add any additional styles for your custom button here */
</style>
