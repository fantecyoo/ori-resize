<template>
  <div>
    <Layout :visible.sync="resizeProxyVisible"
            class="layout">
      <Col width="100px"
           :dragging.sync="isDragging">
      <div>123</div>
      </Col>
      <Col width="100px">
      <div>456</div>
      </Col>
      <Col width="100px">
      <div>789</div>
      </Col>
    </Layout>
    <div class="el-table__column-resize-proxy"
         ref="resizeProxy"
         v-show="resizeProxyVisible"></div>
  </div>
</template>

<script>
import Layout from './layout'
import Col from './col'
export default {
  components: {
    Layout,
    Col
  },

  data () {
    return {
      resizeProxyVisible: false,
      isDragging: false
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 1000px;
}
</style>