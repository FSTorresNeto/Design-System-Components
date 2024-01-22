import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './index';

const meta = {
	title: 'Components/Buttons/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Button',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Button',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button',
	},
};
