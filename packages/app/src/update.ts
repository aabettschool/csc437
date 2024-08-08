import {Auth, Update} from "@calpoly/mustang";
import {Msg} from "./messages";
import {Model} from "./model";
import {Profile, Endorsement} from "server/models";

export default function update(
    message: Msg,
    apply: Update.ApplyMap<Model>,
    user: Auth.User
) {
    switch( message[0]){
        case "profile/save":
            saveProfile(message[1], user)
            .then((profile) =>
              apply((model) => ({ ...model, profile }))
            )
            .then(() => {
              const { onSuccess } = message[1];
              if (onSuccess) onSuccess();
            })
            .catch((error: Error) => {
              const { onFailure } = message[1];
              if (onFailure) onFailure(error);
            });
            

        break;
        case "profile/select":
            selectProfile(message[1], user).then((profile) =>
                apply((model) => ({...model, profile})) 
        );
        
        break;
        
        default:
            const unhandled: never =  message[0];
            throw new Error(`Unhandled Auth message "${unhandled}"` );
    }
}

    function saveProfile(
        msg: {
            id: string;
            profile: Profile;
        },
        user: Auth.User
    ) {
        return fetch(`/api/profiles/${msg.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...Auth.headers(user)
            },
            body: JSON.stringify(msg.profile)
        }).then((response: Response) =>{
            if(response.status === 200)
                return response.json;
            throw new Error(
                `Failed to save profile for ${msg.id}`
              );
        }).then((json: unknown) =>{
            if (json) 
                return json as Profile;
            return undefined;
            }
        );
    }
    
    function selectProfile(
        msg: {id: string},
        user: Auth.User
    ) {
        return fetch(`/api/profiles/${msg.id}`,
        {
            headers: Auth.headers(user)
        }).then((response: Response) => {
            if (response.status === 200){
                return response.json();
            }
            return undefined;
        }).then((json: unknown) => {
            if(json) {
                console.log("Profile:", json);
                return json as Profile
            }
            return undefined
        });
    }


