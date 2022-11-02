import Vue from "vue"

export default {
  name: "Col",

  render(h) {
    console.log(this.$slots.default)

    return h(
      "div",
      {
        style: { ...this.rolStyle, ...this.defaultStyle },
        on: {
          mousemove: $event => this.handleMouseMove($event),
          mouseout: this.handleMouseOut,
          mousedown: $event => this.handleMouseDown($event)
        }
      },
      this.$slots.default
    )
  },

  props: {
    width: {
      default: "",
      type: String
    },
    dragging: {
      default: false,
      type: Boolean
    }
  },

  computed: {
    rolStyle() {
      if (this.width) {
        return { width: this.width }
      } else {
        return { flex: 1 }
      }
    }
  },

  data() {
    return {
      defaultStyle: {
        border: "1px solid black",
        "margin-right": "10px"
      }
    }
  },

  methods: {
    handleMouseMove(event) {
      if (!this.dragging) {
        let target = event.target
        let rect = target.getBoundingClientRect()
        console.log(target)
        const bodyStyle = document.body.style
        if (rect.width > 12 && Math.abs(rect.right - event.pageX) < 10) {
          bodyStyle.cursor = "col-resize"
          // if (hasClass(target, 'is-sortable')) {
          //   target.style.cursor = 'col-resize';
          // }
          // this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = ""
          // if (hasClass(target, 'is-sortable')) {
          //   target.style.cursor = 'pointer';
          // }
          // this.draggingColumn = null;
        }
      }
    },
    handleMouseOut() {},
    handleMouseDown() {
      console.log(1)
    }
  }
}
