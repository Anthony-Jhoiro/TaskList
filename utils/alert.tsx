import {toast} from "react-hot-toast";
import {Alert} from "../components/shared/overlays/Alert";
import {AlertType} from "../types/alerts";
import {ReactNode} from "react";



export function alert(type: AlertType, title: string, content: ReactNode) {
  toast.custom(<Alert alertType={type} title={title} className={'w-80'} >{content}</Alert>, {position: 'top-right'});

}