<script setup lang="ts">
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

const onClick = (event: Event) => {
  emits('click', event);
};
</script>

<template>
  <v-btn :color="color" :variant="variant" @click="onClick">
    <slot />
  </v-btn>
</template>


<style scoped>
/* Add any additional styles for your custom button here */
</style>
