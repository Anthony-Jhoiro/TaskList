import {toast} from "react-hot-toast";
import {Alert} from "../components/Alert";
import {AlertType} from "../types/alerts";
import {ReactNode} from "react";



export function alert(type: AlertType, title: string, content: ReactNode) {
  toast.custom(<Alert alertType={type} title={title} className={'w-1/4'} >{content}</Alert>, {position: 'top-right'});

}