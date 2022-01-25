import { shallowMount } from '@vue/test-utils'
import WatcherFile from '@/pages/watcher/index.vue'

describe('Testing Watcher', () => {
  const wrapper = shallowMount(WatcherFile)

  it('Should test that the component is rendering', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Should test watcher', async () => {
    // ? set the myPet value and test if the leg value is changed
    await wrapper.setData({ myPet: 'dog' })
    expect((wrapper.vm as any).leg).toBe(4)
    
    // ? set the myPet value with other value than in options
    await wrapper.setData({ myPet: 'John Doe' })
    expect((wrapper.vm as any).leg).toBe(0)
  })
})