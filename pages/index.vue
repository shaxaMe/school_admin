<template>
  <client-only>
    <div class="flex w-full flex-col justify-start gap-20">
      <h1>Your holdings</h1>
      <!-- <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        White
                    </td>
                    <td class="px-6 py-4">
                        Laptop PC
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> -->
      <div
        class="flex items-start py-5 align-top rounded-md px-10 justify-center ver flex-nowrap bg-white w-full"
      >
        <div class="flex flex-col gap-5" :style="{ width: (1 / 5) * 100 + '%' }">
          <p class="sub-header justify-self-center w-full">Title</p>
          <div class="flex" v-for="(item, i) in tableData" :key="i">
            {{ item.name }}
          </div>
        </div>
        <div class="flex flex-col gap-5" :style="{ width: (1 / 5) * 100 + '%' }">
          <p class="sub-header w-full">Title</p>
          <div class="flex" v-for="(item, i) in tableData" :key="i">
            {{ item.date }}
          </div>
        </div>
        <div class="flex flex-col gap-5" :style="{ width: (1 / 5) * 100 + '%' }">
          <p class="sub-header w-full">Title</p>
          <div class="flex" v-for="(item, i) in tableData" :key="i">
            {{ item.city }}
          </div>
        </div>
        <div class="flex flex-col gap-5" :style="{ width: (1 / 5) * 100 + '%' }">
          <p class="sub-header w-full">Title</p>
          <div class="flex" v-for="(item, i) in tableData" :key="i">
            {{ item.tag }}
          </div>
        </div>
        <div class="flex flex-col gap-5" :style="{ width: (1 / 5) * 100 + '%' }">
          <p class="sub-header">Title</p>
          <div class="flex" v-for="(item, i) in tableData" :key="i">
            {{ item.zip }}
          </div>
        </div>
        <div class="flex flex-col gap-5" :style="{ width: (1 / 5) * 100 + '%' }">
          <p class="sub-header">Title</p>
          <div class="flex flex-col" v-for="(item, i) in tableData" :key="i">
            <button class="edit-btn"><i class="el-icon-edit"></i></button>
          </div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </client-only>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  middleware: "homepage",
  components: {
    Loading,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
        {
          date: "2016-05-02",
          name: "Harry",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          date: "2016-05-04",
          name: "Angel",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
        {
          date: "2016-05-01",
          name: "Mia",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
      ],
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "api/Organizations/Login?login=" +
            this.form.login +
            "&password" +
            this.form.password
        )
        .then((res) => {
          console.log("res");
        });
    },
  },
  head() {
    return {
      title: "Guider-design.uz",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: "Guider-design.uz",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://guider-design.uz",
        },
        {
          hid: "og-description",
          property: "og:description",
          content: " guider-design.uz",
        },
      ],
      link: [
        {
          rel: "alternate",
          hreflang: "la",
          href: "https://guider-design.uz/",
        },
        {
          rel: "alternate",
          hreflang: "uz",
          href: "https://guider-design.uz/uz",
        },
        {
          rel: "alternate",
          hreflang: "ru",
          href: "https://guider-design.uz/ru",
        },
        {
          rel: "alternate",
          hreflang: "en",
          href: "https://guider-design.uz/en",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>
