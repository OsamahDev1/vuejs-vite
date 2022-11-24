

<template>
    <div>
        <span class="bg-grey-200">
            <ul>
                <li style="color:white" v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
        </span>

    </div>
</template>

<script>
export default {
    data() {
        return {
            "name": "mazin"
        }
    },
    props: ['users']
}
</script>