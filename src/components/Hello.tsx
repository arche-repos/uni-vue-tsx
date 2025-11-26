import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hello',
  setup() {
    return () => <view>Hello JSX!</view>;
  },
});