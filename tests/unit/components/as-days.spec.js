import { shallow } from 'vue-test-utils'
import as_days from '@/components/as-days'
import get_item from '@/modules/item'
const fs = require('fs')
const statements_html = fs.readFileSync('./tests/unit/html/statements.html', 'utf8')
const person = get_item(statements_html)
describe('@/components/as-days', () => {
  it('Renders though is provided nothing', () => {
    const wrapper = shallow(as_days)
    expect(wrapper.element).toMatchSnapshot()
  })
  it.only('Renders a list of statements sorted into the days they were created', () => {
    const wrapper = shallow(as_days, { propsData: { statements: person.statements } })
    expect(wrapper.element).toMatchSnapshot()
    expect([...wrapper.vm.days.entries()].length).toBe(5)
  })
})
