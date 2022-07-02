<script lang="tsx">
import { Button, LayoutHeader } from '@arco-design/web-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return () => <LayoutHeader class="face-root">face</LayoutHeader>;
  },
});
</script>

<style lang="less">
.face {
  &-root {
    height: calc(var(--hello-width) * 0.8);
  }
}
</style>
