import React from "react";

interface CircleAvatarProp {
    url: string,
    title: string
}

const CircleAvatar = ({url, title}: CircleAvatarProp) => {
    return (
        <div className="truncate ...">
            <img  className="w-10 h-10 my-4 rounded-full inline border-slate-800 border-2" src={url} alt=""/>
            <label className="text-center ml-1" >{title}</label>
        </div>
    );
}

export default CircleAvatar;