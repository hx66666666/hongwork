<template>
    <div class="app">

        <!-- 轮播图 -->
        <el-carousel indicator-position="outside" height="600px">
            <el-carousel-item v-for="item in imgArray" :key="item">

                <img :src="item" class="rightImg">

            </el-carousel-item>
        </el-carousel>

    </div>
</template>
<script>
//import axios from 'axios';

export default {
    data() {
        return {
            show: false,
            imgArray: [
                require('../assets/1.jpg'),
                require('../assets/2.jpg'),
                require('../assets/3.jpg')
            ]

        }
    },
    methods: {

    },

    created() {

    },
    computed: {

    }
}
</script>
<style>
.el-carousel__item img {
    width:1000px;
    height: 600px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>  
