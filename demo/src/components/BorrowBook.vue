<template>
    <div class="app">


        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="name" label="图书名字" width="150">
            </el-table-column>
            <el-table-column prop="position" label="位置" width="120">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="120">
            </el-table-column>
            <el-table-column prop="type" label="类别" width="120">
            </el-table-column>
            <el-table-column prop="state" label="状态" width="300">
            </el-table-column>
            <el-table-column prop="userid" label="唯一ID" width="300">
            </el-table-column>
        </el-table>


    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            tableData: [],
        }
    },
    methods: {

        getbooks() {
            axios.get('http://127.0.0.1:7001/borrowbook').then((res) => {
                this.tableData = res.data;
            })
        },
    },
    created() {
        //从后台拿数据
        this.getbooks()
    },

}
</script>


<style>
</style>