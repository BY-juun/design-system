import type { Meta, StoryObj } from "@storybook/react";
import CategoryButton from "../components/CategoryButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Text/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: "",
    },
    text: {
      control: "text",
      description: "버튼에 표시될 텍스트",
      defaultValue: "카테고리",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "/vite.svg",
    text: "카테고리",
    onClick: fn,
  },
};
