<template>
    <div data-is-collapsed="false" class="css-154mebo-ResizeBar e1aolq223" style="position: relative; flex: 0 0 10px;" @mousedown="handleMouseDown" ref="dragBar">
      <svg width="4" height="27" xmlns="http://www.w3.org/2000/svg" class="css-12zvwx6-ArrowIndicator e1aolq222">
        <path d="M3.248 13.401c.012.06.013.123.002.186L.992 26.389a.5.5 0 1 1-.984-.173l2.257-12.803a.51.51 0 0 1 .002-.012.51.51 0 0 1-.002-.012L.008.587A.5.5 0 1 1 .992.413L3.25 13.216a.499.499 0 0 1-.002.185z" fill="rgba(var(--grey-5-rgb), 1)"></path>
      </svg>
      <div style="position: absolute; inset: 0px; cursor: col-resize; -webkit-tap-highlight-color: transparent; user-select: none;"></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        dragging:false,
        originalWidth:null,
        startPosition:null,
        endPosition:null
      }
    },
    computed:{
      dragBar(){
        return this.$refs.dragBar
      },
      target(){
        return this.$refs.dragBar.previousElementSibling||null
      }
    },
    methods:{
      handleMouseDown(event){
        this.dragging = true
        this.originalWidth = this.target.offsetWidth
        this.startPosition = event.pageX
        const handleMouseMove = (event) => {
          const width = this.originalWidth+event.pageX-this.startPosition
          this.target.style.width = Math.max(width,13) + 'px'
        };
        const handleMouseUp = () => {
          this.dragging = false;

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      },
      handleMouseMove(event){
        if(!this.dragging) return 
        if(this.originalWidth+this.startPosition-event.pageX>13){
          this.target.style.width = this.originalWidth+event.pageX-this.startPosition + 'px'
        }
      },
      handleMouseUp(){
        this.dragging = false
      }
    }
  }
</script>

<style scoped>
.css-154mebo-ResizeBar {
    z-index: 1;
    background: linear-gradient(to bottom, rgba(var(--grey-1-rgb), 1) 10%, rgba(var(--grey-0-rgb), 1) 90%);
    color: rgba(var(--grey-5-rgb), 1);
}
</style>