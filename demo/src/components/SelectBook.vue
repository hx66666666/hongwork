<template>
    <div class="app">
        <!-- 图书搜索 -->
        <div style="margin-top: 15px;" class="select">
            <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择" width="150">
                    <el-option label="图书名字" value="1"></el-option>
                    <el-option label="作者" value="2"></el-option>
                    <el-option label="类别" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="doserch"></el-button>
            </el-input>
        </div>

        <!-- 图书显示 -->
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
                    <el-button type="text" size="small" @click="dobrrow(scope.row)">借阅</el-button>
                    <el-button type="text" size="small" @click="unsub(scope.row)">退订</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            tableData: [],
            tableData1: [],
            tableData2: [],
            books: {
                name: '',
                position: '',
                author: '',
                type: '',
                state: '',
                userid: '',
            },
            unsub1: {
                name: '',
                userid: '',
            },
            input1: '',
            select: '',
        }
    },
    methods: {
        getbooks() {
            axios.get('http://127.0.0.1:7001/addbooks').then((res) => {
                this.tableData = res.data;
                this.tableData2 = res.data;
            })
        },
        dobrrow(row) {
            row.state = '以借阅';
            this.books.userid = localStorage.getItem('userid');
            this.books.name = row.name;
            this.books.position = row.position;
            this.books.author = row.author;
            this.books.state = row.state;
            this.books.type = row.type;

            console.log(row);

            axios.put(`http://127.0.0.1:7001/borrowbook/${row.id}`, {
                book: row
            }).then((res) => {
                console.log(res.data);

                //将借阅的图书放入借阅表
                if (res.data != '以借阅') {
                    axios.post('http://127.0.0.1:7001/borrowbook', {
                        book: this.books
                    }).then((res) => {
                        console.log(this.books);
                    })
                } else {
                    alert('此书以借阅');
                }
                this.getbooks()
            })
        },
        unsub(row) {
            this.unsub1.userid = localStorage.getItem('userid');
            this.unsub1.name = row.name;

            //先拿借阅书籍表中的退订书籍的id
            axios.post(`http://127.0.0.1:7001/unsub`, {
                unsub1: this.unsub1
            }).then((res) => {
                console.log(res);
                //res有两个id，一个借阅书籍表中的id，一个原书籍表中的id
                axios.delete(`http://127.0.0.1:7001/unsub/${res.data[0]}`).then((res) => {
                    if (res.data == '未借出') {
                        alert('您未借阅该书籍');
                    }
                    console.log(res);
                });

                //修改退订后原始表书籍状态
                axios.put(`http://127.0.0.1:7001/unsub/${res.data[1]}`).then((res) => {
                    this.getbooks()
                });
            })

        },

        //搜索书籍
        doserch() {
            if (this.tableData.length != this.tableData2.length) {
                this.tableData = this.tableData2;
                this.tableData1 = [];
                this.tableData.forEach((item) => {
                    if (this.select == 1) {
                        if (this.input1 == item.name) {
                            this.tableData1.push(item);
                        }
                    } else if (this.select == 2) {
                        if (this.input1 == item.author) {
                            this.tableData1.push(item);
                        }
                    } else if (this.select == 3) {
                        if (this.input1 == item.type) {
                            this.tableData1.push(item);
                        }
                    }
                });
            } else {
                this.tableData1 = [];
                this.tableData.forEach((item) => {
                    if (this.select == 1) {
                        if (this.input1 == item.name) {
                            this.tableData1.push(item);
                        }
                    } else if (this.select == 2) {
                        if (this.input1 == item.author) {
                            this.tableData1.push(item);
                        }
                    } else if (this.select == 3) {
                        if (this.input1 == item.type) {
                            this.tableData1.push(item);
                        }
                    }
                });

            }
            console.log(this.tableData1);
            console.log(this.tableData);
            this.tableData = this.tableData1;
        }
    },
    created() {
        //从后台拿数据
        this.getbooks()
    },
}
</script>
<style>
.el-select .el-input {
    width: 200px;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
}

.select{
    margin-bottom: 5vh;
}
</style>
