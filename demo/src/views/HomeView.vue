<template>
  <div class="home">
      <el-button type="primary">
        <router-link to="/Login">登录</router-link>
      </el-button>
    <router-view />
  </div>
</template>

<script>

export default {

}
</script>
<style>
a {
  text-decoration: none;
  color: black;
}

.router-link-active {
  text-decoration: none;
}

.press {

  color: #fafafa;

  letter-spacing: 0;

  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
}

.press1 {
  font-size: 20px;

  color: #fafafa;

  letter-spacing: 0;

  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
}
</style>