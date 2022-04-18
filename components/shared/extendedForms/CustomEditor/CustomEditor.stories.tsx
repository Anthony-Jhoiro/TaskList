import React from "react"
import {Story, Meta} from "@storybook/react/types-6-0"
import {CustomEditor, CustomEditorProps} from "./index"

export default {
  title: "Shared/Actions/CustomEditor",
  component: CustomEditor,
  argTypes: {
    //...
  }
} as Meta

const Template: Story<CustomEditorProps> = (args) => <CustomEditor {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  readonly: false,
  blocks: {
    "time": 1649497152561,
    blocks: [
      {
        "id": "p8SZgd_GDZ",
        "type": "header",
        "data": {
          "text": "Editor.js",
          "level": 2
        }
      },
      {
        "id": "aloTlCJavR",
        "type": "paragraph",
        "data": {
          "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
        }
      },
      {
        "id": "7jxHz7FvE-",
        "type": "header",
        "data": {
          "text": "Key features",
          "level": 3
        }
      },
      {
        "id": "Nplq6eb7Tk",
        "type": "header",
        "data": {
          "text": "What does it mean «block-styled editor»",
          "level": 3
        }
      },
      {
        "id": "bLbzayPnl9",
        "type": "paragraph",
        "data": {
          "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
        }
      },
      {
        "id": "3S2uKtFYvG",
        "type": "paragraph",
        "data": {
          "text": "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
        }
      },
      {
        "id": "XGOJPpusyu",
        "type": "header",
        "data": {
          "text": "What does it mean clean data output",
          "level": 3
        }
      },
      {
        "id": "Tr-ABUUq54",
        "type": "paragraph",
        "data": {
          "text": "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
        }
      },
      {
        "id": "JL-6qdFeiw",
        "type": "paragraph",
        "data": {
          "text": "Clean data is useful to sanitize, validate and process on the backend."
        }
      },
      {
        "id": "_8489haFX_",
        "type": "paragraph",
        "data": {
          "text": "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
        }
      },
      {
        "id": "zZ4MFXowvt",
        "type": "image",
        "data": {
          "file": {
            "url": "https://codex.so/public/app/img/external/codex2x.png"
          },
          "caption": "",
          "withBorder": false,
          "stretched": false,
          "withBackground": false
        }
      }
    ],
    version : "2.23.1"
  }
}
