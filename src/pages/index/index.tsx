import { defineComponent, ref } from 'vue'
import { Fragment } from 'vue/jsx-runtime'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const title = ref('Hello TSX')
    
    const handleClick = () => {
      title.value = 'TSX Button Clicked!'
    }

    return () => (
      <>
        <div class="content">
          <img 
            class={{ logo: true }} 
            src="/static/logo.png" 
            alt="logo"
          />
          <div class={{ 'text-area': true }}>
            <span class={{ title: true }}>{title.value}</span>
          </div>
          <button class={{ btn: true }} onClick={handleClick}>
            点击测试TSX
          </button>
        </div>
      </>
    )
  }
})