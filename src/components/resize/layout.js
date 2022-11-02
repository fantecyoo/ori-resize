import Vue from "vue"

export default {
  name: "Layout",

  render(h) {
    console.log(this.$slots.default)
    return h("div", this.$slots.default)
  },

  props: {
    visible: Boolean
  },

  computed: {
    parent() {
      return this.$parent
    }
  },

  data() {
    return {}
  }
}
