import { describe, it, expect } from 'vitest'

import { mount, VueWrapper } from '@vue/test-utils'
import App from '../App.ce.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App, { props: { foo: 0, bar: 1, baz: "something" } })
    const foo = findElement(wrapper, Selectors.FOO);
    const bar = findElement(wrapper, Selectors.BAR);
    const baz = findElement(wrapper, Selectors.BAZ);
    expect(foo.text()).toContain('number')
    expect(bar.text()).toContain('number')
    expect(baz.text()).toContain('string')
  })
})

const Selectors = {
  FOO: "propFoo",
  BAR: "propBar",
  BAZ: "propBaz",
}

function findElement(wrapper: VueWrapper, tid: string) {
  return wrapper.find(`[t-id="${tid}"]`);
}