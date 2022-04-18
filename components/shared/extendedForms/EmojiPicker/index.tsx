import React from "react";
import 'emoji-mart/css/emoji-mart.css'
import {CategoryName, I18n, Picker} from 'emoji-mart';
import {PickerProps} from "emoji-mart/dist-es/utils/shared-props";


export type EmojiPickerProps = PickerProps & {};

const pickerI18n: Partial<Pick<I18n, "search" | "notfound"> & { categories: Partial<Record<CategoryName, string>> }> = {
  search: 'Recherche',
  categories: {
    search: 'Résultats de recherche',
    recent: 'Récents',
    activity: 'Activités',
    flags: 'Drapeaux',
    foods: 'Nourriture',
    nature: 'Nature',
    objects: 'Objets',
    people: 'Personnes',
    places: 'Endroits',
    symbols: 'Symboles'
  }
}

export const EmojiPicker: React.VFC<EmojiPickerProps> = ({...options}: EmojiPickerProps) => {

  return <Picker set='twitter' theme={'light'} i18n={pickerI18n} {...options} />
}

export default EmojiPicker;