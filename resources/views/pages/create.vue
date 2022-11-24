<template>
    <div>
        <!-- start of back button -->
        <back />
        <!-- end of back button -->

        <!-- start of header -->
        <h1 class="text-center text-3xl mt-20 font-extrabold dark:text-white">
            Create New User
        </h1>
        <!-- end of header -->

        <!-- start of from -->
        <Form />
        <!-- end of form -->
    </div>
</template>
<script setup lang="ts">
import Form from "@/views/components/form.vue";
import back from "@/views/components/back.vue";
</script>
