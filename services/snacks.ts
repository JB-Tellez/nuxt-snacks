export const API_URL = 'http://localhost:8000/snacks/'

interface Snack {
    readonly id?: number | string,
    name: string,
    description: string,
}

export async function deleteSnack(id: Number) {
    await $fetch(API_URL + id, {
        method: 'delete'
    });

    await refreshNuxtData();
}

export async function createSnack(body: Snack) {
    await $fetch(API_URL, {
        method: 'POST',
        body,
        headers: {
            'content-type': 'application/json'
        },
    });
    await refreshNuxtData();
}
