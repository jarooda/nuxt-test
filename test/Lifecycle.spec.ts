import { shallowMount } from '@vue/test-utils'
import LifecycleFile from '@/pages/lifecycle/index.vue'

const $router = {
  push: jest.fn()
}

describe('Testing Lifecycle', () => {
  jest.useFakeTimers()
  //const spyBeforeDestory = jest.spyOn(LifecycleFile as any, 'beforeDestroy')
  
  const wrapper = shallowMount(LifecycleFile, {
    mocks: {
      $router
    }
  })
  
  it('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
  it('Interval must have defined value after mounting', () => {
    expect((wrapper.vm as any).interval).toBeDefined()
  })
  
  it('Test the counter', () => {
    expect((wrapper.vm as any).counter).toBe(0)
    jest.advanceTimersByTime(1000)
    expect((wrapper.vm as any).counter).toBe(1)
  })
  
  it('Check beforeDestroy', () => {
    jest.advanceTimersByTime(9000)
    expect((wrapper.vm as any).counter).toBe(10)
    //expect(spyBeforeDestory).toHaveBeenCalled()
  })

  it('Must be destroyed', () => {
    expect(wrapper.exists()).toBe(false)
  })
})