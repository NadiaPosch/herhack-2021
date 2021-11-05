import { GetStaticProps } from "next";
import { Heading1 } from "../../components/Heading1";
import List from "../../components/List";
import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";

type Props = {
    users: User[];
};

const Users = ({ users }: Props) => (
    <div>
        <Heading1>Users List</Heading1>
        <List items={users} />
    </div>
);

export const getStaticProps: GetStaticProps = async () => {
    const users: User[] = sampleUserData;

    return { props: { users } };
};

export default Users;
