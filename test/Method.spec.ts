import { shallowMount } from '@vue/test-utils'
import MethodFile from '@/pages/methods/index.vue'

describe('Testing Methods', () => {
  const wrapper = shallowMount(MethodFile)

  afterEach(() => {
    // ? after each test, the mocks must be cleared
    jest.clearAllMocks()
  })

  it('Should test that the component is rendering', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Should test convertToNumber method', () => {
    expect((wrapper.vm as any).convertToNumber(19)).toBe(19)
    expect((wrapper.vm as any).convertToNumber('hello')).toBe(0)
    expect((wrapper.vm as any).convertToNumber('82349')).toBe(82349)
  })

  it('Should test add method', () => {
    // ? mock the method
    const mockConvertToNumber = jest.spyOn((wrapper.vm as any), 'convertToNumber')

    // ? test initial value
    expect((wrapper.vm as any).result).toBe(null);
    
    // ? call the method
    (wrapper.vm as any).add(5, 8)

    // ? test the result
    expect((wrapper.vm as any).result).toBe(13)

    // ? check if the method that has been mocked was called
    expect(mockConvertToNumber).toHaveBeenCalled()
  })
})