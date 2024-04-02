<script setup lang="ts">
  const props = defineProps(['snack']);
</script> 

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ snack.name }}</CardTitle>
    </CardHeader>
    <CardContent class="flex justify-between">
      <CardDescription>{{ snack.description }}</CardDescription>
      <div class="flex">
        <EditIcon />
        <DeleteIcon :id="snack.id" />       
      </div>
    </CardContent>
  </Card>
</template>
