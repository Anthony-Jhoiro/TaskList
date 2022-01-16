import React, {useEffect, useRef, useState} from "react";
import {Dialog, DialogProps, DialogTitle} from "../Dialog";
import {Button} from "../Button";
import {faCheck, faTimes, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Input} from "../Input";
import {UserPossibility} from "./UserPossibility";
import {Profile, useAddUserToGroupMutation, useSearchUserQuery} from "../../generated/data-schemas";


export type AddUserToGroupDialogProps = DialogProps & {
  groupId: string
}

export const AddUserToGroupDialog: React.VFC<AddUserToGroupDialogProps> = ({
                                                                             groupId,
                                                                             onClose,
                                                                             ...dialogProps
                                                                           }: AddUserToGroupDialogProps) => {
  const [searchText, setSearchText] = useState("");
  const [{fetching, data}, search] = useSearchUserQuery({variables: {pattern: `%${searchText}%`}});
  const [selected, setSelected] = useState<string | null>(null);
  const [, addUserToGroup] = useAddUserToGroupMutation();

  const addUser = (user: Profile) => {
    setSelected(user.id ?? null)
  }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.length > 0) {
      setTimeout(() => {
        setSelected(null)
        search()
      }, 1000);
    }
  }

  const onSubmit = () => {
    if (selected) {
      addUserToGroup({groupId, userId: selected}).then(() => {
        alert("L'utilisateur a bien été ajouté au groupe !");
        if (onClose) {
          onClose()
        }
      })
    }
  }

  return (
    <Dialog {...dialogProps} >
      <DialogTitle className={'text-primary'} closable={true}> <FontAwesomeIcon icon={faUserPlus}
                                                                                className={"mr-2"}/> Ajouter un
        Utilisateur</DialogTitle>
      <div className={'divide-y grid-cols-1'}>
        <div className={'p-1 my-5'}>
          <Input label={"Rechercher un utilisateur"} placeholder={"Ex : Anthony"} value={searchText}
                 onChange={handleSearch}/>
          {fetching && <p>Recherche en cours...</p>}
          <div>
            {data && data.profile.map(profile =>
              <UserPossibility key={profile.id} user={profile} onAdd={addUser} selected={selected === profile.id}/>
            )}

          </div>
        </div>
        <div className={'text-right mt-5 p-2'}>
          <Button variant={'SECONDARY'} className={'mx-2'} icon={faTimes} onClick={onClose}>Anuler</Button>
          {selected && <Button variant={'SUCCESS'} className={'mx-2'} icon={faCheck} onClick={onSubmit}>Valider</Button>}
        </div>

      </div>
    </Dialog>
  )
}
