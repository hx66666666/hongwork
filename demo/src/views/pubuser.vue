<template>
    <div class="app">
        <!-- 导航条 -->
        <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="doshow1">首页</el-menu-item>
            <el-menu-item index="2" @click="doshow">图书查询</el-menu-item>
            <el-menu-item index="3" @click="doshow2">个人中心</el-menu-item>
            <el-menu-item index="4" @click="exitdocument">退出</el-menu-item>
        </el-menu>

        <!-- 轮播图 -->
        <BannerFiguer v-if="show1"></BannerFiguer>

        <!-- 图书列表 -->
        <SelectBook v-if="show"></SelectBook>

        <!-- 个人界面 -->
        <PersonalView v-if="show2"></PersonalView>

    </div>
</template>
<script>
//import axios from 'axios';
import SelectBook from '../components/SelectBook.vue';
import BannerFiguer from '../components/BannerFiguer.vue';
import PersonalView from '../components/PersonalView.vue';
export default {
    components: {
        SelectBook: SelectBook,
        BannerFiguer: BannerFiguer,
        PersonalView: PersonalView,
    },
    data() {
        return {
            show: false,
            show1: true,
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
            this.show2 = true;
            this.show = false;
            this.show1 = false;
        },
        exitdocument() {
            localStorage.clear();
            this.$router.push('/');
        },
    },

    created() {

    },
    computed: {

    }
}
</script>
<style>
</style>  
