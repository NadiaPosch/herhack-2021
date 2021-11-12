import { GetServerSideProps, NextPage } from "next";
import { Layout } from "../../../components/Layout";
import { AdminScreen } from "../../../components/screens/AdminScreen";
import { EXAMPLE_MEETING, EXAMPLE_USERS } from "../../../data";
import { Meeting, User } from "../../../types";

type Props = {
    meeting: Meeting;
    users: User[];
};

const AdminMeeting: NextPage<Props> = ({ meeting, users }) => {
    const { name } = meeting;

    return (
        <Layout title={name} heading="Create new meeting">
            <AdminScreen users={users} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // const meeting = await getMeetingById(params?.id);
    const meeting = EXAMPLE_MEETING;
    const users = EXAMPLE_USERS;

    return { props: { meeting, users } };
};

export default AdminMeeting;
