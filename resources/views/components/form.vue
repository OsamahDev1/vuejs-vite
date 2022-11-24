<template>
  <div>
    <div class="container w-6/12 mx-auto mt-10">
      <form @submit.prevent="submit">
        <!-- name input -->
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
          <input type="text" id="name" v-model="form.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ahmed">
          <span className="text-red-600" v-if="form.errors.name">
            {{ form.errors.name }}
          </span>

        </div>

        <!-- email input -->
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
          <input type="text" id="email" v-model="form.email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com">
          <span className="text-red-600" v-if="form.errors.email">
            {{ form.errors.email }}
          </span>
        </div>

        <!-- age input -->
        <div class="mb-6">
          <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Age</label>
          <input type="text" id="age" v-model="form.age"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="18">
          <span className="text-red-600" v-if="form.errors.age">
            {{ form.errors.age }}
          </span>
        </div>

        <!-- city input -->
        <div class="mb-6">
          <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
          <input type="text" id="city" v-model="form.city"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Riyadh">
          <span className="text-red-600" v-if="form.errors.city">
            {{ form.errors.city }}
          </span>
        </div>

        <button type="submit"
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  </div>
</template>
<script setup>
// import { useForm } from '@inertiajs/inertia-vue3'
// export default {
  // setup() {
  //   const form = useForm({
  //     name: '',
  //     email: '',
  //     age: '',
  //     city: '',
  //   });
  //   return { form };
  // },
//   setup(props){
//     const form = useForm({
//       name: props.users.name,
//       email: props.users.email,
//       age: props.users.age,
//       city: props.users.city,
//   }
//   methods: {
//     submit() {
//       // this.form.post('user/store');
//     },
//   },
//   props: {
//     users: Object,
//   }
// };
import { reactive } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/inertia-vue3'

const form = useForm({
  name: '',
  email: '',
  age: '',
  city: '',
});

const submit = () => {
  form.post('user/store');
};
</script>