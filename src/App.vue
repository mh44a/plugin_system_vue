<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';

const result = ref(0);

const instance = getCurrentInstance();
if (!instance) throw new Error("Instance not available");

function calculateMultiplication() {
  if (instance?.proxy?.$multiply) {
    result.value = instance.proxy.$multiply(5, 3);
  } else {
    console.error("Multiply plugin is not loaded");
  }
}
</script>

<template>
  <div class="container mx-auto p-4">
    <p class="text-xl font-bold">{{ result }}</p>
    <button @click="calculateMultiplication">multiply</button>
  </div>
</template>