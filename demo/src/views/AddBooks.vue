<template>
    <div class="app">
        <!-- 导航条 -->
        <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="doshow">图书管理</el-menu-item>
            <el-menu-item index="2" @click="doshow1">以借阅的图书</el-menu-item>
            <el-menu-item index="3" @click="doshow2">人员管理中心</el-menu-item>
            <el-menu-item index="4" @click="exitdocument">退出</el-menu-item>
        </el-menu>

        <AddBook v-if="show"></AddBook>
        <BorrowBook v-if="show1"></BorrowBook>
        <UserControl v-if="show2"></UserControl>
    </div>
</template>

<script>
//import axios from 'axios'
import AddBook from '@/components/AddBook.vue'
import BorrowBook from '@/components/BorrowBook.vue'
import UserControl from '@/components/UserControl.vue'

export default {
    components: {
        AddBook: AddBook,
        BorrowBook: BorrowBook,
        UserControl: UserControl
    },
    data() {
        return {
            dialogVisible: false,
            tableData: [],
            form: {
                name: '',
                position: '',
                author: '',
                type: '',
                state: '未借出',
            },
            show: true,
            show1: false,
            show2: false,
        }
    },
    methods: {
        doshow() {
            this.show = true;
            this.show1 = false;
            this.show2 = false;
        },
        doshow1() {
            this.show = false;
            this.show1 = true;
            this.show2 = false;
        },
        doshow2() {
            this.show = false;
            this.show1 = false;
            this.show2 = true;
        },
        exitdocument() {
            localStorage.clear();
            this.$router.push('/');
        },
        // onSubmit() {
        //     axios.post('http://127.0.0.1:7001/addbooks', {
        //         book: this.form
        //     }).then((res) => {
        //         this.getbooks()
        //     })
        // },
        // getbooks() {
        //     axios.get('http://127.0.0.1:7001/addbooks').then((res) => {
        //         this.tableData = res.data;
        //         this.dialogVisible = false;
        //     })
        // },
        // deleted(row) {
        //     axios.delete(`http://127.0.0.1:7001/addbooks/${row.id}`).then((res) => {
        //         this.getbooks()
        //     })
        // }
    },
    created() {
        //从后台拿数据
        // this.getbooks()
    },

}
</script>


<style>
</style>