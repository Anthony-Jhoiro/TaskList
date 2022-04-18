import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {TaskEditor, TaskEditorProps} from "./index"

export default {
  title: "Tasks/TaskEditor",
  component: TaskEditor,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<TaskEditorProps> = (args) => <TaskEditor {...args} />

const defaultArgs = {
  defaultTask: {
    id: "1234",
    title: "Visit this place",
    icon: "⛰️",
    created_at: "2022-02-22",
    updated_at: "2022-02-23",
    updatedByUser: {
      name: "John Doe",
      image: "/woman_1.jpg"
    },
    createdByUser: {
      name: "Chuck Noris",
      image: "/woman_1.jpg"
    },
    content: {
      "time": 1645536532230,
      "blocks": [{
        "id": "88-rqdKeFp",
        "data": {"text": "Such a beautiful day isn't it?"},
        "type": "paragraph"
      }, {
        "id": "4rlA5t4Oe7",
        "data": {
          "file": {"url": "/woman_1.jpg"},
          "caption": "Sample picture",
          "stretched": false,
          "withBorder": false,
          "withBackground": false
        },
        "type": "image"
      }],
      "version": "2.22.2"
    }
  }
}

// Default scenario
export const Default = Template.bind({});
export const Update = Template.bind({});
export const Loading = Template.bind({});


Update.args = defaultArgs;
Loading.args = {...defaultArgs, isLoading: true};
