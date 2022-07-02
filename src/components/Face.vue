<script lang="tsx">
import { Button, LayoutHeader } from '@arco-design/web-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const changeEye = (action: string, timeout: number, keep = 0) => {
      changeLeftEye(action, timeout, keep);
      changeRightEye(action, timeout, keep);
    };
    const changeRightEye = (action: string, timeout: number, keep = 0) => {
      const rightEye = document.querySelector(
        '.face-right-eye',
      ) as HTMLDivElement;
      rightEye.classList.add(`face-right-eye-${action}`);
      setTimeout(() => {
        rightEye.classList.remove(`face-right-eye-${action}`);
      }, timeout + keep);
    };
    const changeLeftEye = (action: string, timeout: number, keep = 0) => {
      const leftEye = document.querySelector(
        '.face-left-eye',
      ) as HTMLDivElement;
      leftEye.style.transition = `${timeout}ms all`;
      leftEye.classList.add(`face-left-eye-${action}`);
      setTimeout(() => {
        leftEye.classList.remove(`face-left-eye-${action}`);
      }, timeout + keep);
    };

    const blink = () => changeEye('blink', 40);
    const wink = () => changeLeftEye('blink', 100, 400);
    return () => (
      <LayoutHeader class="face-root">
        <div class="face-box">
          <div class="face-left-eye"></div>
          <div class="face-right-eye"></div>
        </div>
        <Button onClick={blink}>眨眼</Button>
        <Button onClick={wink}>Wink</Button>
      </LayoutHeader>
    );
  },
});
</script>

<style lang="less">
.face {
  &-root {
    height: calc(var(--hello-width) * 0.8);
  }
  &-box {
    position: relative;
  }

  &-left-eye {
    position: absolute;
    top: 80px;
    left: 200px;
    width: 46px;
    height: 84px;
    box-sizing: border-box;
    border-radius: 24px;
    background-color: var(--color-text-2);
    transition: all 40ms;
    &-blink {
      .blink;
      left: 184px;
    }
  }
  &-right-eye {
    position: absolute;
    width: 46px;
    top: 80px;
    right: 200px;
    height: 84px;
    box-sizing: border-box;
    border-radius: 24px;
    transition: all 40ms;
    background-color: var(--color-text-2);
    &-blink {
      .blink;
      right: 184px;
    }
  }
}
.blink {
  width: 72px;
  height: 8px;
  top: 120px;
}
</style>
