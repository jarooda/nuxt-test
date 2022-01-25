import { shallowMount } from '@vue/test-utils'
import ComputedFile from '@/pages/computed/index.vue'

describe('Testing Methods', () => {
  const wrapper = shallowMount(ComputedFile)

  it('Should test that the component is rendering', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Should test the nameWithoutVowel', async () => {
    // ? set the data is always asynchronous
    await wrapper.setData({ name: 'John Doe' })
    expect((wrapper.vm as any).nameWithoutVowel).toBe('Jhn D')
  })
})