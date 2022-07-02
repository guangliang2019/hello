<script lang="tsx">
import { Layout } from '@arco-design/web-vue';
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import DialogVue from './components/Dialog.vue';
import FaceVue from './components/Face.vue';

export default defineComponent({
  setup() {
    /**
     * 根据屏幕实际宽高对主要区域进行缩放
     */
    const resizeLayout = () => {
      const targetHight = window.innerHeight;
      const targetWidth = window.innerWidth;
      const layoutWidth = 550;
      const layoutHeight = 986;
      const scaleX = targetWidth / layoutWidth;
      const scaleY = targetHight / layoutHeight;
      const layoutDom = document.querySelector('.app-layout') as HTMLElement;
      if (layoutDom) {
        layoutDom.style.transform = `scale(${Math.min(scaleX, scaleY)})`;
      }
    };
    // resize事件的注册与注销
    onMounted(() => {
      resizeLayout();
      window.addEventListener('resize', resizeLayout);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('resize', resizeLayout);
    });

    // 返回渲染函数
    return () => (
      <div class="app-root">
        <Layout class="app-layout">
          <FaceVue />
          <DialogVue />
        </Layout>
      </div>
    );
  },
});
</script>

<style lang="less">
.app {
  &-root {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg);
  }
  &-layout {
    display: block;
    width: var(--hello-width);
    height: var(--hello-height);
    background-color: var(--color-bg);
    transform: scale(0.5);
    position: relative;
  }
}
</style>
