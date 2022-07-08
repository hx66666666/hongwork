<template>
    <div class="login">
        <h2>登陆</h2>
        <div class="login1">
            <!--  element-ui重写  label-width="80px"-->
            <el-form ref="form" :model="sub" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="sub.username"></el-input>
                </el-form-item>
                <el-form-item label="唯一ID">
                    <el-input v-model="sub.userid"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="sub.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="sub.sex" placeholder="请选择性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="角色">
                    <el-select placeholder="请选择角色" v-model="sub.role">
                        <el-option label="后台工作人员" value="后台工作人员"></el-option>
                        <el-option label="用户" value="用户"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="dologin">登录</el-button>
                    <el-button>
                        <router-link to="/Sign">注册</router-link>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            sub: {
                username: '',
                password: '',
                sex: '',
                role: '',
                userid: ''
            },
            get: '',

        }
    },
    methods: {
        dologin() {
            axios.post('http://127.0.0.1:7001/login', {
                login: this.sub
            }).then(res => {
                if (res.data == '用户') {
                    localStorage.setItem('username', this.sub.username);
                    localStorage.setItem('sex', this.sub.sex);
                    localStorage.setItem('role', this.sub.role);
                    localStorage.setItem('userid', this.sub.userid);
                    this.$router.push('/PubUser');
                }
                else if (res.data == '后台工作人员') {
                    localStorage.setItem('username', this.sub.username);
                    localStorage.setItem('sex', this.sub.sex);
                    localStorage.setItem('role', this.sub.role);
                    localStorage.setItem('userid', this.sub.userid);
                    this.$router.push('/AddBooks');
                }
                else if (res.data == '系统管理员') {
                    localStorage.setItem('username', this.sub.username);
                    localStorage.setItem('sex', this.sub.sex);
                    localStorage.setItem('role', this.sub.role);
                    localStorage.setItem('userid', this.sub.userid);
                    this.$router.push('/');
                }
                else if (res.data == '没有') {
                    alert('查无此人，请重新输入');
                }
            });
        },
        //退出当前页面
        exitdocument() {
            this.$router.push('/');
        },
    }
}
</script>
<style>
.login {
    text-align: center;
    margin: 0 auto;
    width: 600px;
    height: 520px;

}

.login h2 {
    margin-top: 40px;
    color: aliceblue;
    font-weight: 100;
}

.login1 {
    width: 90%;
}
</style>