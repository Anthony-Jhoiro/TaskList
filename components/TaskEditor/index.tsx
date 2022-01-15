import React, {useState} from "react";
import {Input} from "../Input";
import dynamic from "next/dynamic";
import {Button} from "../Button";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {IEmojiData} from 'emoji-picker-react';
import EditorJS, {OutputData} from "@editorjs/editorjs";
import {PublicTaskFragment} from "../../generated/data-schemas";


const Editor = dynamic(() => import("../CustomEditor"), {ssr: false});
const EmojiPicker = dynamic(() => import("../EmojiPicker"), {ssr: false});


export interface TaskEditorProps {
  onSubmit: (title: string, icon: string, content: OutputData) => void,
  onCancel: () => void,
  defaultTask?: PublicTaskFragment
}

export const TaskEditor: React.VFC<TaskEditorProps> = ({onSubmit, onCancel, defaultTask}: TaskEditorProps) => {
  const [icon, setIcon] = useState(defaultTask ? defaultTask.icon : "🤷‍");
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [title, setTitle] = useState(defaultTask ? defaultTask.title : "");
  const editorCore = React.useRef<EditorJS>(null);

  const isCreation = !!defaultTask;


  const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
    setIcon(emojiObject.emoji);
    setEmojiPickerOpen(false);
  };

  const isValid = () => icon.length === 1 && title.length > 0;

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (editorCore.current && isValid()) {
      const savedData = await editorCore.current.save();
      onSubmit(title, icon, savedData)
    }
  }

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value)
  }

  const handleInitialize = React.useCallback((instance) => {
    //@ts-ignore
    editorCore.current = instance
  }, []);

  // useEffect(() => {
  //   if (defaultTask) {
  //     setTitle(defaultTask.title)
  //     setIcon(defaultTask.icon)
  //
  //     if (editorCore.current) {
  //       editorCore.current.render(defaultTask.content).then();
  //     }
  //   }
  // }, [defaultTask, editorCore])



  return (
    <div>
      <div className="bg-white p-5 shadow flex items-center group relative h-16">

        {/* Icon left side */}
        <div className={""}>
          <Button variant={"PRIMARY"} onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}>{icon}</Button>
          {emojiPickerOpen && <div className={"absolute z-50"}>
              <EmojiPicker onEmojiClick={onEmojiClick} native={true}/>
          </div>
          }
        </div>

        {/* Title Middle */}
        <div className={"flex-1 ml-5"}>
          <Input placeholder={"Aller à Chamonix"} onChange={handleTitleChange} value={title}/>
        </div>

      </div>
      <div className={"overflow-hidden bg-gray-100 text-center p-2"}>
        <div className={"bg-gray-50 container max-h-64 overflow-y-scroll"}>
          <Editor instanceRef={handleInitialize} blocks={defaultTask ? defaultTask.content : {}} readonly={false}/>
        </div>

        <div className={"mt-2 text-right"}>
          <Button className={"mr-2"} variant={'SECONDARY'} icon={faTimes} onClick={onCancel}>Annuler</Button>
          <Button variant={'PRIMARY'} icon={faCheck} disabled={icon.length === 0 || title.length === 0} onClick={handleSubmit}>{isCreation ?'Créer' : 'Sauvegarder'}</Button>
        </div>
      </div>
    </div>
  )
}
