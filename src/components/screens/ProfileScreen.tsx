import { FC, useState } from "react";
import { Heading3 } from "../Heading3";

export const ProfileScreen: FC = () => {
    const [code, setCode] = useState("");

    return (
        <div className="flex flex-col gap-4">
            <Heading3>Please insert Meeting Code</Heading3>
            <input
                className="max-w-[160px] border-b-2 border-indigo-800 p-4 text-4xl text-indigo-800 outline-none"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                maxLength={6}
                size={6}
            />
        </div>
    );
};
