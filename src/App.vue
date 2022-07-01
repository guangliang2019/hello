<script lang="tsx">
import { Button } from '@arco-design/web-vue';
import { defineComponent } from 'vue';
import { fetchQuestion } from './utils/fetch';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <Button
          onClick={() => {
            console.log(fetchQuestion('冯老师的学生是'));
          }}
        >
          冯老师的学生是
        </Button>
      </div>
    );
  },
});
</script>


