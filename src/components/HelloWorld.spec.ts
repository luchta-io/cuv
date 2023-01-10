import {describe, it} from 'vitest'

import {render} from '@testing-library/vue'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
    it('renders properly', () => {
        const {getByText} = render(HelloWorld, {props: {msg: 'Hello Vitest'}})
        getByText('Hello Vitest')
    })
})
