<script lang="tsx">
import { Button, LayoutHeader } from '@arco-design/web-vue';
import { defineComponent, onBeforeUnmount, onMounted } from 'vue';
import { blink, wink, surprise, smile } from '../utils/expression';
import { changeTheme } from '@/utils/UI';

export default defineComponent({
  setup() {
    // 自动眨眼的注册与注销
    let blinkIntervalToken: number;
    onMounted(() => {
      blinkIntervalToken = setInterval(blink, 6000);
    });
    onBeforeUnmount(() => {
      clearInterval(blinkIntervalToken);
    });

    // 返回渲染函数
    return () => (
      <LayoutHeader class="face-root">
        <div class="face-box">
          <div class="face-left-eye">
            <div class="face-left-eye-inner"></div>
          </div>
          <div class="face-right-eye">
            <div class="face-right-eye-inner"></div>
          </div>
          <div class="face-mouse-box">
            <div class="face-mouse-box-mask"></div>
            <svg width="200" height="56" viewBox="0 0 200 56">
              <path
                id="face-mouse"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.4853 22.6812C24.799 17.9949 24.799 10.3969 29.4853 5.71064C34.1716 1.02435 41.7696 1.02435 46.4558 5.71064C76.1357 35.3905 124.256 35.3905 153.936 5.71064C158.622 1.02435 166.22 1.02435 170.907 5.71064C175.593 10.3969 175.593 17.9949 170.907 22.6812C131.854 61.7336 68.5377 61.7336 29.4853 22.6812Z"
                fill="var(--color-text-2)"
              />
            </svg>
          </div>
        </div>
        <Button onClick={changeTheme}>换个主题</Button>
        <Button onClick={blink}>眨眼</Button>
        <Button onClick={wink}>Wink</Button>
        <Button onClick={surprise}>震惊</Button>
        <Button onClick={smile}>微笑</Button>
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
  &-mouse {
    &-box {
      position: absolute;
      width: 200px;
      height: 56px;
      box-sizing: border-box;
      left: 175px;
      top: 184px;
      overflow: hidden;
      &-mask {
        position: absolute;
        width: 200px;
        height: 56px;
        background-color: var(--color-bg-1);
        opacity: 1;
      }
    }
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    background-color: var(--color-bg-1);
    border: 24px solid var(--color-text-2);
  }

  &-left-eye {
    position: absolute;
    top: 100px;
    left: 200px;
    width: 46px;
    height: 84px;
    box-sizing: border-box;
    border-radius: 24px;
    background-color: var(--color-text-2);
    transition: all 40ms;
    &-inner {
      position: absolute;
      width: 0px;
      height: 0px;
      top: 42px;
      left: 23px;
      background: var(--color-bg-1);
      &-surprise {
        width: 48px;
        height: 48px;
        border-radius: 36px;
        top: 12px;
        left: 12px;
      }
    }
    &-blink {
      .blink;
      left: 184px;
    }
    &-surprise {
      .surprise;
      left: 180px;
    }
    &-smile {
      .smile;
    }
  }
  &-right-eye {
    position: absolute;
    width: 46px;
    top: 100px;
    right: 200px;
    height: 84px;
    box-sizing: border-box;
    border-radius: 24px;
    transition: all 40ms;
    background-color: var(--color-text-2);
    &-inner {
      position: absolute;
      width: 0px;
      height: 0px;
      top: 42px;
      right: 23px;
      background: var(--color-bg-1);
      &-surprise {
        width: 48px;
        height: 48px;
        border-radius: 36px;
        top: 12px;
        right: 12px;
      }
    }
    &-blink {
      .blink;
      right: 184px;
    }
    &-surprise {
      .surprise;
      right: 180px;
    }
    &-smile {
      .smile;
    }
  }
}
.blink {
  width: 72px;
  height: 8px;
  top: 140px;
}
.surprise {
  border-radius: 40px;
  width: 72px;
  height: 72px;
  top: 108px;
}
.smile {
  width: 46px;
  height: 46px;
}
</style>
