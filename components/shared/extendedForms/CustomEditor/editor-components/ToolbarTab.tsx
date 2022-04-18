import {IconProp} from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ToolbarTabOptions {
  isActive?: boolean,
  fontAwesomeIcon: IconProp,
  dispatcher: () => void,
  label: string
}

export const ToolbarTab = ({isActive = false, fontAwesomeIcon, dispatcher, label}: ToolbarTabOptions) => {
  return <button
    className={clsx('h-8 w-8 flex items-center justify-center text-center text-gray-700 rounded hover:bg-gray-300', isActive ? 'bg-gray-300' : 'bg-white')}
    onClick={dispatcher}
    aria-label={label}
  >
    <FontAwesomeIcon icon={fontAwesomeIcon}/>
  </button>
}