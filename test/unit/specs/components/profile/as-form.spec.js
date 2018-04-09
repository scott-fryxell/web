import {shallow} from 'vue-test-utils'
import as_form from '@/components/profile/as-form'

describe('as-form.vue', () => {

  it('should render form to set user profile info', () => {
    const person = {
      first_name: 'Scott',
      last_name: 'Fryxell',
      mobile: '4151234356'
    }
    let wrapper = shallow(as_form, { propsData: { person: person } })
    expect(wrapper.element).toMatchSnapshot()
  })

  describe("#mobile", () =>{
    let input, stub
    beforeEach(() => {
      const person = { mobile: null }
      let wrapper = shallow(as_form, { propsData: { person: person } })
      input = wrapper.find('#mobile')
      stub = jest.fn()
    })
    it('should allow number to be entered', () => {
      input.trigger('keypress', {
        key: '2',
        preventDefault: stub
      })
      expect(stub).not.toBeCalled()
    })
    it('should stop an letter from being added', () => {
      input.trigger('keypress', {
        key: 'a',
        preventDefault: stub
      })
      expect(stub).toBeCalled()
    })
    it('should validate a phone number when pasted in', () => {
      input.trigger('paste', {
        clipboardData: {
          getData: function(){ return '4151234567'}
        },
        preventDefault: stub

      })
      expect(stub).not.toBeCalled()
    })
    it('should invalidate non phone number when pasted in', () => {
      input.trigger('paste', {
        clipboardData: {
          getData: function(){ return 'abc-123-1234'}
        },
        preventDefault: stub
      })
      expect(stub).toBeCalled()
      // expect(stub).toBeCalled()
    })

    it('should show the authorize button when valid mobile number is entered', () => {

      // <a href="tel:+13174562564">
    })
    it('authorize an account via the mobile number')
  })
})
