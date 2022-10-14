import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {}
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {};

export const Small: StoryObj<CheckboxProps> = {
  args: {
  }
};

export const Large: StoryObj<CheckboxProps> = {
  args: {
  }
} 

export const CustomComponent: StoryObj<CheckboxProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with (p) tag</p>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} 