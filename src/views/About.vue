<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button color="#7232dd">单色按钮</van-button>
    <van-button color="#7232dd" plain>单色按钮</van-button>
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>

    <div class="nextstep">
      <router-link to="/demo">Demo</router-link>
    </div>
  </div>
</template>
<style lang="less">
.nextstep{
  font-size: 16px;
  width: 375px;
  height: 187.5px;
  background-color: violet;
}
</style>
