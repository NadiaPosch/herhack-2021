import { FC, useState } from "react";
import { User } from "../../types";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { RadioPill } from "../RadioPill";

type Props = {
    users: User[];
};

export const AdminScreen: FC<Props> = ({ users }) => {
    const [name, setName] = useState("");
    const [localDateTime, setLocalDateTime] = useState("");
    const [invitationLink, setInvitationLink] = useState("");
    const [score, setScore] = useState("");
    const [userIds, setUserIds] = useState([]);

    const isActive = (id: number) => userIds.includes(id);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <Label>Meeting Name</Label>
                <Input value={name} onChange={(value) => setName(value)} />
            </div>
            <div className="flex flex-col gap-2">
                <Label>Meeting Date</Label>
                <Input value={localDateTime} onChange={(value) => setLocalDateTime(value)} type="date" />
            </div>
            <div className="flex flex-col gap-2">
                <Label>Add Users to Meeting</Label>
                <div className="flex flex-wrap gap-4">
                    {users.map(({ id, firstName, lastName }) => (
                        <RadioPill key={id} onClick={() => setUserIds([...userIds, id])} active={isActive(id)}>
                            {firstName} {lastName}
                        </RadioPill>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <Button onClick={() => alert("implement createMeeting function")}>Create Meeting</Button>
            </div>
        </div>
    );
};
