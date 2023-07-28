<template>
  <client-only>
    <div class="flex w-full py-5 px-4 flex-col justify-start gap-10">
      <navbar-search />
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
      <!-- <div
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
      </div> -->


  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="text-sm text-left w-full text-gray-500 dark:text-gray-400">
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
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item,i) in dataStrip" :key="i">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.id }}
                </th>
                <td class="px-6 py-4">
                  {{ item.first_name }}  {{ item.last_name }} {{ currentPage2 }}
                </td>
                <td class="px-6 py-4">
                    {{ item.gender }}
                </td>
                <td class="px-6 py-4">
                    {{ item.email }}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<el-pagination background layout="prev, pager, next" :current-page.sync="currentPage2" :total="tableData.length"> </el-pagination>

      <!-- <div class="flex items-start p-5 rounded-md w-full bg-white">
          <div class="flex flex-col gap-5">
            <p class="sub-header">Title</p>
            <div class="flex flex-col" v-for="(item, i) in dataStrip" :key="i">
              {{ i+1 }}
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <p class="sub-header">Title</p>
            <div class="flex flex-col" v-for="(item, i) in dataStrip" :key="i">
              {{ item.first_name }}
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <p class="sub-header">Title</p>
            <div class="flex flex-col" v-for="(item, i) in dataStrip" :key="i">
              {{ item.email }}
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <p class="sub-header">Title</p>
            <div class="flex flex-col" v-for="(item, i) in dataStrip" :key="i">
              {{ item.gender }}
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <p class="sub-header">Title</p>
            <div class="flex flex-col" v-for="(item, i) in dataStrip" :key="i">
              {{ item.created_at }}
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <p class="sub-header">Title</p>
            <div class="flex flex-col" v-for="(item, i) in dataStrip" :key="i">
              <button class="edit-btn"><i class="el-icon-edit"></i></button>
            </div>
          </div>
      </div> -->
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
  computed:{
    dataStrip(){
      let arr = [...this.tableData]
      if(this.currentPage2==1){
        return arr.splice(0,10)
      }else{
        return arr.splice((this.currentPage2-1) * 10,10)
      }
    }
  },
  data() {
    return {
      tableData: [{
  "id": 1,
  "first_name": "Taber",
  "last_name": "Uman",
  "email": "tuman0@ft.com",
  "gender": "Male",
  "ip_address": "233.126.54.13",
  "created_at": "Europe/Simferopol"
}, {
  "id": 2,
  "first_name": "Leta",
  "last_name": "Beer",
  "email": "lbeer1@pinterest.com",
  "gender": "Female",
  "ip_address": "6.3.72.45",
  "created_at": "Asia/Chongqing"
}, {
  "id": 3,
  "first_name": "Violet",
  "last_name": "Eusden",
  "email": "veusden2@prlog.org",
  "gender": "Female",
  "ip_address": "133.175.238.203",
  "created_at": "Europe/Warsaw"
}, {
  "id": 4,
  "first_name": "Klara",
  "last_name": "Backs",
  "email": "kbacks3@admin.ch",
  "gender": "Genderqueer",
  "ip_address": "183.26.67.99",
  "created_at": "America/Havana"
}, {
  "id": 5,
  "first_name": "Sallyanne",
  "last_name": "Renehan",
  "email": "srenehan4@dot.gov",
  "gender": "Female",
  "ip_address": "247.52.119.68",
  "created_at": "Africa/Douala"
}, {
  "id": 6,
  "first_name": "Gwenore",
  "last_name": "Boakes",
  "email": "gboakes5@goo.gl",
  "gender": "Agender",
  "ip_address": "24.168.124.139",
  "created_at": "Asia/Chongqing"
}, {
  "id": 7,
  "first_name": "Dawn",
  "last_name": "Blakesley",
  "email": "dblakesley6@youtu.be",
  "gender": "Female",
  "ip_address": "64.21.246.28",
  "created_at": "Asia/Manila"
}, {
  "id": 8,
  "first_name": "Karil",
  "last_name": "Couvet",
  "email": "kcouvet7@hostgator.com",
  "gender": "Agender",
  "ip_address": "125.201.8.149",
  "created_at": "Europe/Lisbon"
}, {
  "id": 9,
  "first_name": "Nobie",
  "last_name": "Kitchingman",
  "email": "nkitchingman8@hostgator.com",
  "gender": "Male",
  "ip_address": "70.149.95.10",
  "created_at": "Asia/Harbin"
}, {
  "id": 10,
  "first_name": "Leslie",
  "last_name": "Johl",
  "email": "ljohl9@dmoz.org",
  "gender": "Female",
  "ip_address": "22.250.176.53",
  "created_at": "Asia/Manila"
}, {
  "id": 11,
  "first_name": "Jarred",
  "last_name": "Apps",
  "email": "jappsa@indiatimes.com",
  "gender": "Male",
  "ip_address": "127.225.55.216",
  "created_at": "Africa/Lagos"
}, {
  "id": 12,
  "first_name": "Berte",
  "last_name": "Sallter",
  "email": "bsallterb@cnet.com",
  "gender": "Female",
  "ip_address": "193.152.103.121",
  "created_at": "Asia/Tokyo"
}, {
  "id": 13,
  "first_name": "Verne",
  "last_name": "Orringe",
  "email": "vorringec@scientificamerican.com",
  "gender": "Male",
  "ip_address": "241.181.18.216",
  "created_at": "Europe/Warsaw"
}, {
  "id": 14,
  "first_name": "Franciska",
  "last_name": "Boobier",
  "email": "fboobierd@sina.com.cn",
  "gender": "Female",
  "ip_address": "84.186.30.6",
  "created_at": "Asia/Almaty"
}, {
  "id": 15,
  "first_name": "Stu",
  "last_name": "Woods",
  "email": "swoodse@bravesites.com",
  "gender": "Male",
  "ip_address": "120.66.144.62",
  "created_at": "Asia/Chongqing"
}, {
  "id": 16,
  "first_name": "Kettie",
  "last_name": "Ervin",
  "email": "kervinf@canalblog.com",
  "gender": "Female",
  "ip_address": "128.138.11.172",
  "created_at": "Asia/Harbin"
}, {
  "id": 17,
  "first_name": "Rica",
  "last_name": "McKinstry",
  "email": "rmckinstryg@about.me",
  "gender": "Female",
  "ip_address": "149.232.126.214",
  "created_at": "Asia/Damascus"
}, {
  "id": 18,
  "first_name": "Kristoffer",
  "last_name": "Crosson",
  "email": "kcrossonh@ocn.ne.jp",
  "gender": "Male",
  "ip_address": "113.75.97.91",
  "created_at": "Europe/Dublin"
}, {
  "id": 19,
  "first_name": "Klaus",
  "last_name": "Fowler",
  "email": "kfowleri@histats.com",
  "gender": "Male",
  "ip_address": "195.203.16.55",
  "created_at": "America/Bogota"
}, {
  "id": 20,
  "first_name": "Jennee",
  "last_name": "Tomadoni",
  "email": "jtomadonij@g.co",
  "gender": "Female",
  "ip_address": "159.93.64.147",
  "created_at": "Asia/Harbin"
}, {
  "id": 21,
  "first_name": "Kimball",
  "last_name": "Abbotson",
  "email": "kabbotsonk@domainmarket.com",
  "gender": "Male",
  "ip_address": "76.38.113.152",
  "created_at": "Europe/Lisbon"
}, {
  "id": 22,
  "first_name": "Akim",
  "last_name": "Paterson",
  "email": "apatersonl@wufoo.com",
  "gender": "Male",
  "ip_address": "45.5.164.81",
  "created_at": "Asia/Jakarta"
}, {
  "id": 23,
  "first_name": "Jaquelin",
  "last_name": "Paquet",
  "email": "jpaquetm@berkeley.edu",
  "gender": "Female",
  "ip_address": "106.209.46.183",
  "created_at": "Europe/Prague"
}, {
  "id": 24,
  "first_name": "Celestia",
  "last_name": "Joseff",
  "email": "cjoseffn@icq.com",
  "gender": "Female",
  "ip_address": "101.211.185.142",
  "created_at": "Asia/Jakarta"
}, {
  "id": 25,
  "first_name": "Matthiew",
  "last_name": "Eisikowitz",
  "email": "meisikowitzo@topsy.com",
  "gender": "Male",
  "ip_address": "242.58.92.164",
  "created_at": "Asia/Jakarta"
}, {
  "id": 26,
  "first_name": "Minne",
  "last_name": "Texton",
  "email": "mtextonp@free.fr",
  "gender": "Female",
  "ip_address": "176.215.116.184",
  "created_at": "Europe/Moscow"
}, {
  "id": 27,
  "first_name": "Burtie",
  "last_name": "Cumpsty",
  "email": "bcumpstyq@desdev.cn",
  "gender": "Male",
  "ip_address": "88.15.12.35",
  "created_at": "Europe/Moscow"
}, {
  "id": 28,
  "first_name": "Igor",
  "last_name": "Verbrugge",
  "email": "iverbrugger@state.tx.us",
  "gender": "Male",
  "ip_address": "5.152.21.69",
  "created_at": "Asia/Kolkata"
}, {
  "id": 29,
  "first_name": "Hymie",
  "last_name": "Matterson",
  "email": "hmattersons@cnet.com",
  "gender": "Male",
  "ip_address": "139.58.168.124",
  "created_at": "Europe/Dublin"
}, {
  "id": 30,
  "first_name": "Collin",
  "last_name": "Bartle",
  "email": "cbartlet@cisco.com",
  "gender": "Male",
  "ip_address": "17.133.211.56",
  "created_at": "Asia/Chongqing"
}, {
  "id": 31,
  "first_name": "Omar",
  "last_name": "MacDougall",
  "email": "omacdougallu@state.gov",
  "gender": "Male",
  "ip_address": "91.125.113.3",
  "created_at": "Asia/Chongqing"
}, {
  "id": 32,
  "first_name": "Antonie",
  "last_name": "Dance",
  "email": "adancev@elegantthemes.com",
  "gender": "Polygender",
  "ip_address": "139.174.72.28",
  "created_at": "Europe/Lisbon"
}, {
  "id": 33,
  "first_name": "Dosi",
  "last_name": "Long",
  "email": "dlongw@bloomberg.com",
  "gender": "Female",
  "ip_address": "237.165.50.240",
  "created_at": "Europe/Oslo"
}, {
  "id": 34,
  "first_name": "Fernandina",
  "last_name": "Kumaar",
  "email": "fkumaarx@reference.com",
  "gender": "Bigender",
  "ip_address": "91.76.147.203",
  "created_at": "Asia/Chongqing"
}, {
  "id": 35,
  "first_name": "Garik",
  "last_name": "Catley",
  "email": "gcatleyy@edublogs.org",
  "gender": "Male",
  "ip_address": "232.65.200.48",
  "created_at": "Asia/Omsk"
}, {
  "id": 36,
  "first_name": "Thorin",
  "last_name": "Leadbitter",
  "email": "tleadbitterz@google.nl",
  "gender": "Male",
  "ip_address": "98.56.68.236",
  "created_at": "Asia/Manila"
}, {
  "id": 37,
  "first_name": "Beryle",
  "last_name": "Crichley",
  "email": "bcrichley10@economist.com",
  "gender": "Female",
  "ip_address": "16.247.148.250",
  "created_at": "Asia/Shanghai"
}, {
  "id": 38,
  "first_name": "Inna",
  "last_name": "Degli Abbati",
  "email": "idegliabbati11@google.nl",
  "gender": "Female",
  "ip_address": "158.200.98.129",
  "created_at": "Europe/Stockholm"
}, {
  "id": 39,
  "first_name": "Keelby",
  "last_name": "Grealy",
  "email": "kgrealy12@blogs.com",
  "gender": "Agender",
  "ip_address": "80.97.117.143",
  "created_at": "Europe/Belgrade"
}, {
  "id": 40,
  "first_name": "Rorke",
  "last_name": "Marryatt",
  "email": "rmarryatt13@cpanel.net",
  "gender": "Male",
  "ip_address": "10.130.39.205",
  "created_at": "Europe/Helsinki"
}],
currentPage2:1
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
.sms-title_number{
  width: 20px;
}
.message{
  max-height: 2.5rem;
  color: #2B3674;
   font-family: DM Sans;
   font-size: 14px;
   font-style: normal;
   font-weight: 700;
   line-height: 24px;
  .sms-title{
    &.m-0{
      margin: 0;
    }
  }
    &:hover{
      cursor: pointer;
    }
   }
   .message-title{
    color: #A3AED0;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    border-bottom: 1px solid #E9EDF7;
    margin-bottom: 10px;
    padding-bottom: 10px;
   }
</style>
