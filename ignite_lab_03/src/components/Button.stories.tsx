import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {};

export const Small: StoryObj<ButtonProps> = {
  args: {
  }
};

export const Large: StoryObj<ButtonProps> = {
  args: {
  }
} 

export const CustomComponent: StoryObj<ButtonProps> = {
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