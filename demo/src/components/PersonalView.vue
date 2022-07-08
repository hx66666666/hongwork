<template>
    <div class="app">
        <el-descriptions class="margin-top" title="个人中心" :column="1" border>
            <template slot="extra">
                <el-button type="primary" size="small" @click="dialogVisible = true">修改密码</el-button>
                <el-button type="primary" size="small" @click="getuser">显示个人信息</el-button>
                <el-button type="primary" size="small" @click="hide">隐藏个人信息</el-button>
            </template>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                </template>
                {{ user.username }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    唯一ID
                </template>
                {{ user.userid }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    角色
                </template>
                {{ user.role }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    性别
                </template>
                {{ user.sex }}
            </el-descriptions-item>
        </el-descriptions>


        <!-- 修改密码 -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="新密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onsubmit">立即创建</el-button>
                    <el-button @click="dialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: {
                username: '****',
                sex: '****',
                role: '****',
                userid: '****'
            },
            dialogVisible: false,
            form: {
                name: '',
                sex: '',
                role: '',
                password: '',
                userid: '',
            },
        }
    },
    methods: {
        getuser() {
            this.user.username = localStorage.getItem('username');
            this.user.sex = localStorage.getItem('sex');
            this.user.role = localStorage.getItem('role');
            this.user.userid = localStorage.getItem('userid');
            return this.user;
        },
        hide() {
            this.user.username = '****';
            this.user.sex = '****';
            this.user.role = '****';
            this.user.userid = '****';
            return this.user;
        },
        onsubmit() {
            this.form.username = localStorage.getItem('username');
            this.form.sex = localStorage.getItem('sex');
            this.form.role = localStorage.getItem('role');
            this.form.userid = localStorage.getItem('userid');
            axios.put(`http://127.0.0.1:7001/login/${0}`, {
                sublist: this.form
            }).then((res) => {
                localStorage.clear();
                this.$router.push('/');
            })
        }
    },
    computed: {

    },
    watch: {

    }

}
</script>


<style>
</style>
