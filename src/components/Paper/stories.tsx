import { Story, Meta } from '@storybook/react'
import Paper from '.'

export default {
  title: 'Paper',
  component: Paper
} as Meta

export const Default: Story = (args) => <Paper {...args} />
