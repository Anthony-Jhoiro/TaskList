import React, {useCallback, useState} from "react";
import {Input} from "../Input";
import dynamic from "next/dynamic";
import {Button} from "../Button";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {IEmojiData} from 'emoji-picker-react';
import EditorJS, {OutputData} from "@editorjs/editorjs";
import {CombinedError} from "urql";
import {Task} from "../../types/task";


const Editor = dynamic(() => import("../CustomEditor"), {ssr: false});
const EmojiPicker = dynamic(() => import("../EmojiPicker"), {ssr: false});


export interface TaskEditorProps {
  onSubmit: (title: string, icon: string, content: OutputData) => void,
  onCancel: () => void,
  defaultTask?: Task,
  error?: CombinedError,
  isLoading?: boolean
}

export const TaskEditor: React.VFC<TaskEditorProps> = ({
                                                         onSubmit,
                                                         onCancel,
                                                         defaultTask,
                                                         error,
                                                         isLoading
                                                       }: TaskEditorProps) => {
  const [icon, setIcon] = useState(defaultTask ? defaultTask.icon : "🤷‍");
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [title, setTitle] = useState(defaultTask ? defaultTask.title : "");
  const editorCore = React.useRef<EditorJS>(null);

  const isCreation = !!defaultTask;


  const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
    setIcon(emojiObject.emoji);
    setEmojiPickerOpen(false);
  };

  const isValid = useCallback(() => icon.length > 0 && title.length > 0 && !isLoading, [icon, title, isLoading])

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = useCallback(async (_e) => {
    if (editorCore.current && isValid()) {
      const savedData = await editorCore.current.save();
      onSubmit(title, icon, savedData)
    }
  }, [icon, title, isValid, onSubmit]);

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value)
  }

  const handleInitialize = React.useCallback((instance) => {
    //@ts-ignore
    editorCore.current = instance;
  }, []);


  return (
    <div className={"relative"}>
      <div className={isLoading ? "britness-0" : ""}>
        <div className={"bg-white p-5 shadow flex items-center group relative h-16"}>

          {/* Icon left side */}
          <div className={""}>
            <Button variant={"PRIMARY"} onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
                    disabled={isLoading}>{icon}</Button>
            {emojiPickerOpen && !isLoading && <div className={"absolute z-50"}>
                <EmojiPicker onEmojiClick={onEmojiClick} native={true}/>
            </div>
            }
          </div>

          {/* Title Middle */}
          <div className={"flex-1 ml-5"}>
            <Input placeholder={"Aller à Chamonix"} onChange={handleTitleChange} value={title} disabled={isLoading}/>
          </div>

        </div>
        <div className={"overflow-hidden bg-gray-100 text-center p-2"}>
          {error && <p className={"text-error"}>{error.message}</p>}
          <div className={"bg-gray-50 container max-h-64 overflow-y-scroll"}>
            <Editor onInitialize={handleInitialize} blocks={defaultTask ? defaultTask.content : {}}
                    readonly={!!isLoading}/>
          </div>

          <div className={"mt-2 text-right"}>
            <Button className={"mr-2"} variant={'SECONDARY'} icon={faTimes} onClick={onCancel}
                    disabled={isLoading}>Annuler</Button>
            <Button variant={'PRIMARY'} icon={faCheck} disabled={!isValid()}
                    onClick={handleSubmit}>{isCreation ? 'Créer' : 'Sauvegarder'}</Button>
          </div>
        </div>
      </div>

      {isLoading && <div className={"absolute top-0 left-0 w-full h-full"}>
          <div className="text-center mt-10">
              <div className="spinner-border text-primary-400 animate-spin inline-block w-36 h-36 border-4 rounded-full"
                   role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-xl mt-5 text-primary">Chargement...</p>
          </div>
      </div>}
    </div>
  )
}
