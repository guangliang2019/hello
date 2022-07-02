<script lang="tsx">
import {
  Button,
  Input,
  LayoutContent,
  LayoutFooter,
  Form,
  FormItem,
  Comment,
} from '@arco-design/web-vue';
import { IconSend } from '@arco-design/web-vue/es/icon';
import { defineComponent, reactive, ref } from 'vue';
import { fetchQuestion } from '../utils/fetch';
import { scrollToBottom } from '../utils/dom';
export default defineComponent({
  setup() {
    const commentList = ref<any[]>([]);
    const form = reactive({
      question: '',
    });

    const sendQuestion = () => {
      commentList.value.push(
        <Comment class="dialog-comment-user" content={form.question} />,
      );
      const dialogBox = document.querySelector('.dialog-box') as Element;
      scrollToBottom(dialogBox);
      fetchQuestion(form.question).then((res) => {
        commentList.value.push(
          <Comment class="dialog-comment" content={(res as any).data} />,
        );
        scrollToBottom(dialogBox);
      });
    };
    const handleSubmit = () => {
      if (!form.question) return;
      sendQuestion();
      form.question = '';
    };
    return () => (
      <>
        <div class="dialog-mask" />
        <div class="dialog-box">{commentList.value}</div>
        <div class="dialog-input-box">
          <Form
            labelColProps={{ span: 0 }}
            wrapperColProps={{ span: 24 }}
            model={form}
          >
            <FormItem field="question">
              <Input
                size="large"
                placeholder="随便问点什么吧"
                modelValue={form.question}
                onInput={(args: string) => {
                  form.question = args;
                }}
              ></Input>
              <Button
                onClick={handleSubmit}
                htmlType="submit"
                size="large"
                type="primary"
              >
                {{ default: () => '发送', icon: () => <IconSend /> }}
              </Button>
            </FormItem>
          </Form>
        </div>
      </>
    );
  },
});
</script>

<style lang="less">
.dialog {
  &-box {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    position: relative;
    padding: 24px 12px;
    box-sizing: border-box;
    height: 496px;
    max-height: 496px;
  }
  &-mask {
    width: var(--hello-width);
    position: absolute;
    top: calc(var(--hello-width) * 0.8);
    height: 24px;
    background: linear-gradient(
      180deg,
      var(--color-bg-1) 0%,
      rgba(var(--gray-1), 0) 100%
    );
    z-index: 1000;
  }
  &-input-box {
    .arco-form-item {
      margin: 0;
      margin-right: 4px;
    }
    height: 60px;
    background-color: var(--color-bg-1);
    display: flex;
    flex-direction: row;
    align-items: center;
    //border-top: 1px solid var(--color-border);
    padding: 0px 12px;
    .arco-input-wrapper {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .arco-btn {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
  &-comment {
    z-index: 10;
    align-self: flex-start;
    border: 1px solid var(--color-border);
    border-radius: 0 8px 8px 8px;
    padding: 8px 12px;
    max-width: 75%;
    &-user {
      z-index: 10;
      align-self: flex-end;
      border-radius: 8px 0px 8px 8px;
      padding: 8px;
      max-width: 75%;
      background: rgb(var(--primary-6));
      .arco-comment-content {
        color: #fff;
      }
    }
  }
}
</style>
