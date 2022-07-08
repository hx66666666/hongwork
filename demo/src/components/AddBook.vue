<template>
    <div class="app">

        <el-button type="success" @click="dialogVisible = true" >***增加图书***</el-button>
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
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deleted(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="图书名字">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="位置">
                    <el-input v-model="form.position"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.author"></el-input>
                </el-form-item>
                <el-form-item label="类别">
                    <el-input v-model="form.type"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button @click="dialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>


    </div>
</template>

<script>
import axios from 'axios'

export default {
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
            }
        }
    },
    methods: {
        onSubmit() {
            axios.post('http://127.0.0.1:7001/addbooks', {
                book: this.form
            }).then((res) => {
                this.getbooks()
            })
        },
        getbooks() {
            axios.get('http://127.0.0.1:7001/addbooks').then((res) => {
                this.tableData = res.data;
                this.dialogVisible = false;
            })
        },
        deleted(row) {
            axios.delete(`http://127.0.0.1:7001/addbooks/${row.id}`).then((res) => {
                this.getbooks()
            })
        }
    },
    created() {
        //从后台拿数据
        this.getbooks()
    },

}
</script>


<style>

</style>