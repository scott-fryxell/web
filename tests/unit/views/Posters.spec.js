import { shallow } from 'vue-test-utils'
import { Poster } from '@/persistance/Storage'
import Posters from '@/views/Posters'
import get_item from '@/modules/item'
import itemid from '@/helpers/itemid'
const fs = require('fs')
const poster_html = fs.readFileSync('./tests/unit/html/poster.html', 'utf8')
const poster = get_item(poster_html)

const events = [{
  id: new Date(2020, 1, 1).getTime(),
  poster: poster.id
}]

describe ('@/views/Posters.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Posters)
    wrapper.vm.posters = [poster]
    wrapper.vm.events = events
  })
  describe ('Rendering', () => {
    it ('Renders ui for posters', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  describe ('methods', () => {
    describe ('get_id', () => {
      it ('gets the poster id from the directory listing on hte network', () => {
        wrapper.vm.get_id(`${poster.id}.html`)
      })
    })
    describe ('newer_first', () => {
      it ('Sorts a list by newer first', () => {
        const earlier = '/+16282281824/posters/1582074363603'
        const later = '/+16282281824/posters/1582074400500'
        expect(wrapper.vm.newer_first(earlier, later)).toBeTruthy()
        expect(wrapper.vm.newer_first(later, earlier)).toBeTruthy()
      })
    })
    describe ('vectorize_image', () => {
      it ('executes the method', () => {
        wrapper.vm.vectorize_image()
      })
    })
    describe ('get_poster_list', () => {
      it ('executes the method', async () => {
        jest.spyOn(itemid, 'as_directory').mockImplementationOnce(() => {
            return { items: [] }
        })
        await wrapper.vm.get_poster_list({})
      })
    })
    describe ('brand_new_poster', () => {
      it ('gets the poster from the worker', () => {
        const event = {
          data: poster
        }
        wrapper.vm.working = true
        wrapper.vm.brand_new_poster(event)
        expect(wrapper.vm.working).toBe(false)
        expect(wrapper.vm.new_poster.id).toBe(poster.id)
      })
    })
    describe ('cancel_poster', () => {
      it ('executes the method', () => {
        wrapper.vm.cancel_poster(poster.id)
      })
    })
    describe ('add_poster', () => {
      it ('executes the method', async () => {
        await wrapper.vm.add_poster(poster.id)
      })
    })
    describe ('remove_poster', () => {
      it ('executes the method', async () => {
        await wrapper.vm.remove_poster(poster.id)
      })
    })
  })
})
