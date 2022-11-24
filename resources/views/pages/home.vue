<template>
    <div>
        <div class="mx-52 mt-20 overflow-x-auto relative sm:rounded-lg">
            <!-- start of table -->
            <dataTable :users="users" />
            <!-- end of table -->

            <!-- start of pagenation -->
            <pagination class="mt-6" :links="users.links" />
            <!-- end of pagenation -->

            <!-- add button -->
            <Link href="create"
                class="inline-block focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 mt-10 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Add
            </Link>
            <!-- end of add button -->
        </div>

        <!-- start of footer -->
        <FooterComponent />
        <!-- end of footer -->
    </div>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
import dataTable from "@/views/components/dataTable.vue"
import FooterComponent from "@/views/components/FooterComponent.vue"


export default {
    components: {
        Link,
        dataTable,
        FooterComponent,
    },
    props: {
        users: Object
    },
}
</script>
