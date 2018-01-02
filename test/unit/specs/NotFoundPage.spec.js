import Vue from 'vue'
import NotFoundPage from '@/components/NotFoundPage'

describe('NotFoundPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NotFoundPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.not-found-container h1').textContent)
      .toEqual('Page not found!')
  })
})
