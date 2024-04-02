<script setup>
  import { API_URL } from '@/services/snacks';
  const { data: snacks } = await useFetch(API_URL);
</script>

<template>
  <ul class="space-y-4 w-full">
    <SnackItem v-for="snack of snacks.data" :snack="snack">{{ snack.name }}</SnackItem>
  </ul>
</template>
~/services/services