<template>
    <div class="login">
        <h2>注册</h2>
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
                <el-form-item>

                    <el-button type="primary" @click.native="dosign">注册</el-button>
                    <el-button type="primary" @click.native="exitdocument">返回</el-button>
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
                role: '用户',
                userid: '',
            },
            get: '',

        }
    },
    methods: {
        dosign() {
            axios.post('http://127.0.0.1:7001/sign', {
                sign: this.sub
            }).then(res => {
                alert('注册成功');
            });
        },
        //退出当前页面
        exitdocument() {
            this.$router.push('/login');
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