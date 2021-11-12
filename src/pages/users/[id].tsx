import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { FC } from "react";
import { Heading1 } from "../../components/Heading1";
import { Layout } from "../../components/Layout";
import { AdminScreen } from "../../components/screens/AdminScreen";
import { ProfileScreen } from "../../components/screens/ProfileScreen";
import { EXAMPLE_USER, EXAMPLE_USERS } from "../../data";
import { User } from "../../types";

type Props = {
    user: User | null;
    users: User[];
};

const Profile: FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center gap-x-2 text-white">
        <span>{name}</span>
        <Image src="/user.svg" height={40} width={40} alt="Logo" />
    </div>
);

const UserDetail: NextPage<Props> = ({ user, users }) => {
    if (!user) {
        return (
            <Layout title="404 - User not found">
                <p className="text-xl text-red-600">User not found</p>
            </Layout>
        );
    }

    const { admin, firstName, lastName } = user;
    const name = [firstName, lastName].join(" ");
    const title = ["Hello", admin ? "Admin" : "", name].join(" ");

    return (
        <Layout title={`${name}'s Page'`} heading={<Profile name={admin ? "Admin" : name} />}>
            <Heading1>{title} 👋🏼</Heading1>
            {admin ? <AdminScreen users={users} /> : <ProfileScreen />}
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // const user = await getUserByUsername(params?.id);
    // const users = await getAllUsers();
    const user = { ...EXAMPLE_USER, admin: params?.id === "admin" };
    const users = EXAMPLE_USERS;
    return { props: { user, users } };
};

export default UserDetail;
