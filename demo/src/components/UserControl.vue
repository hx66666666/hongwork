<template>
    <div class="app">

        <el-button type="success" @click="dialogVisible = true">***增加人员***</el-button>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="username" label="名字" width="150">
            </el-table-column>
            <el-table-column prop="role" label="角色" width="120">
            </el-table-column>
            <el-table-column prop="userid" label="唯一ID" width="120">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="120">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deleted(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="名字">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <!-- <el-form-item label="角色">
                    <el-input v-model="form.role"></el-input>
                </el-form-item> -->
                <el-form-item label="角色">
                    <el-select v-model="form.role" placeholder="角色">
                        <el-option label="用户" value="用户"></el-option>
                        <el-option label="后台工作人员" value="后台工作人员"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="唯一ID">
                    <el-input v-model="form.userid"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <!-- <el-form-item label="性别">
                    <el-input v-model="form.sex"></el-input>
                </el-form-item> -->
                <el-form-item label="性别">
                    <el-select v-model="form.sex" placeholder="性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
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
                username: '',
                role: '',
                password: '',
                sex: '',
                userid: '',
            }
        }
    },
    methods: {
        onSubmit() {
            axios.post('http://127.0.0.1:7001/sign', {
                sign: this.form
            }).then((res) => {
                this.getusers()
            })
        },
        getusers() {
            axios.get('http://127.0.0.1:7001/login').then((res) => {
                this.tableData = res.data;
                this.dialogVisible = false;
            })
        },
        deleted(row) {
            axios.delete(`http://127.0.0.1:7001/sign/${row.id}`).then((res) => {
                this.getusers();
            })
        }
    },
    created() {
        //从后台拿数据
        this.getusers()
    },

}
</script>


<style>
</style>