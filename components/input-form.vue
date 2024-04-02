<script lang="ts">

import { createSnack } from '@/services/snacks';

export default {
    methods: {
        async handleSubmit(event) {
            const body = {
                name: event.target.name.value,
                description: event.target.description.value
            };
            
            await createSnack(body);
           
            event.target.reset();
        }
    }
}
</script>
<template>
    <form class="flex items-center gap-x-2" @submit.prevent="handleSubmit">
        <fieldset class="border border-black px-2 rounded">
            <label for="name" class="sr-only">Name</label>
            <input id="name" name="name" type="text" placeholder="snack name" required>
        </fieldset>
        <fieldset class="border border-black px-2 rounded">
            <label for="description" class="sr-only">Name</label>
            <input id="description" name="description" type="text" placeholder="snack description" required>
        </fieldset>
        <Button>Submit</Button>
    </form>
</template>~/services/services