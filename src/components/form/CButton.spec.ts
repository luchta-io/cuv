import {describe, it} from 'vitest'

import {render} from '@testing-library/vue'
import CButton from "@/components/form/CButton.vue";

describe('CButton', () => {
    it('すべてのprops,slotsが受け取れること', () => {
        const result = render(CButton, {
            props: {
                color: 'white',
                outlined: true,
            },
            slots: {
                default: 'WhiteOutlinedボタン'
            }
        });
        // result.getByText('WhiteOutlinedボタン')
        result.getByText('NG')
        result.unmount()
    })
    it('デフォルトのpropsが正常に動作すること', () => {
        const result = render(CButton, {
            slots: {
                default: 'デフォルトPropsボタン'
            }
        });
        result.getByText('デフォルトPropsボタン')
        result.unmount()
    })
})