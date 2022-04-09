import React from "react";
import {createReactEditorJS} from 'react-editor-js'
import {EDITOR_JS_TOOLS} from "./tools";


export interface CustomEditorProps {
  blocks: any,
  readonly: boolean,
  [key:string]: any
}

export const CustomEditor: React.VFC<CustomEditorProps> = ({blocks = {}, readonly = false, ...reactEditorOptions}: CustomEditorProps) => {

  const ReactEditorJS: any = createReactEditorJS()


  return (
    <div className={"text-left bg-white custom-editor pt-3"}>
      <ReactEditorJS defaultValue={blocks} tools={EDITOR_JS_TOOLS} readOnly={readonly}
                     placeholder={"Que souhaites-tu raconter ?"} {...reactEditorOptions} />
    </div>
  )
}

export default CustomEditor;
