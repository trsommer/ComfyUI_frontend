import type { Meta, StoryObj } from '@storybook/vue3-vite'

import NodeBadge from './NodeBadge.vue'

const meta: Meta<typeof NodeBadge> = {
  title: 'Website/Common/NodeBadge',
  component: NodeBadge,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div class="bg-primary-comfy-ink p-8"><story /></div>'
    })
  ]
}

export default meta
type Story = StoryObj<typeof meta>

export const TextOnly: Story = {
  args: {
    segments: [{ text: 'COMFY' }]
  }
}

export const MultipleSegments: Story = {
  args: {
    segments: [{ text: 'HOW' }, { text: 'IT' }, { text: 'WORKS' }]
  }
}

export const WithLogo: Story = {
  args: {
    segments: [
      { logoSrc: '/icons/logo.svg', logoAlt: 'Comfy' },
      { text: 'NODES' }
    ]
  }
}

export const ComfyLocal: Story = {
  args: {
    segments: [
      { logoSrc: '/icons/logo.svg', logoAlt: 'Comfy' },
      { text: 'LOCAL' }
    ]
  }
}

export const WithCustomSegmentClass: Story = {
  args: {
    segments: [
      {
        logoSrc: '/icons/logo.svg',
        logoAlt: 'Comfy',
        class: 'lg:py-8 lg:px-10'
      },
      { text: 'LOCAL' }
    ]
  }
}
