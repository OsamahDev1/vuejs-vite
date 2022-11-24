<template>
    <div>
        <!-- start of search -->
        <div class="pb-4 bg-white dark:bg-gray-900 ml-1">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="table-search"
                    class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items" />
            </div>
        </div>
        <!-- end of search -->
        <!-- start of table -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">Name</th>
                    <th scope="col" class="py-3 px-6">Email</th>
                    <th scope="col" class="py-3 px-6">Age</th>
                    <th scope="col" class="py-3 px-6">City</th>
                    <th scope="col" class="py-3 px-6">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="user in users.data" :key="user.id">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ user.name }}
                    </th>
                    <td class="py-4 px-6">
                        {{ user.email }}
                    </td>
                    <td class="py-4 px-6">
                        {{ user.age }}
                    </td>
                    <td class="py-4 px-6">
                        {{ user.city }}
                    </td>
                    <td class="flex items-center py-4 px-6 space-x-3">
                        <Link :href="('update')" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                        </Link>
                        <button @click="destroy(user.id)" type="button"
                            class="font-medium text-red-600 dark:text-red-500 hover:underline">
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- end of table -->
    </div>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
    props: {
        users: Object,
    },
    methods: {
        destroy(user) {
            this.$inertia.delete(`home/delete/${user}`);
        },
    },
};
</script>
