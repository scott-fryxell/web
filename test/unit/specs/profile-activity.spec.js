import Vue from 'vue'
import ProfileActivity from '@/components/profile-activity'

describe('profile-activity.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ProfileActivity)
    const vm = new Constructor().$mount()
    expect(vm.$el).toMatchSnapshot()
  })
})
