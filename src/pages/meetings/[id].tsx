import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Heading3 } from "../../components/Heading3";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Layout } from "../../components/Layout";
import { EXAMPLE_MEETING } from "../../data";
import { Star } from "../../icons/Star";
import { WarningIcon } from "../../icons/Warning";
import { Meeting } from "../../types";

type Props = {
    meeting: Meeting;
};

const getIconClassNames = (active: boolean, activeColor: string) =>
    `mx-auto cursor-pointer rounded-full p-4 text-white ${active ? activeColor : "bg-indigo-800  hover:bg-indigo-700"}`;

const MeetingPage: NextPage<Props> = ({ meeting }) => {
    const [suggestion, setSuggestion] = useState("");
    const [question, setQuestion] = useState("");
    const [alertActive, setAlertActive] = useState(false);
    const [contributionActive, setContributionActive] = useState(false);
    const { name, score } = meeting;

    return (
        <Layout title={name} heading={name}>
            <div className="relative flex flex-col gap-8">
                <div className="text-center flex flex-col gap-4">
                    <Heading3>Your Personal Score</Heading3>
                    <div className="mx-auto rounded-full h-28 w-28 bg-gradient-to-b from-green-300 to bg-green-600">
                        <div className="flex justify-center items-center w-full h-full text-4xl font-medium text-white">
                            {score}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>I have a suggestion</Label>
                    <div className="flex gap-4">
                        <Input value={suggestion} onChange={(value) => setSuggestion(value)} />
                        <Button onClick={() => setSuggestion("")}>send</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>I have a question</Label>
                    <div className="flex gap-4">
                        <Input value={question} onChange={(value) => setQuestion(value)} />
                        <Button onClick={() => setQuestion("")}>send</Button>
                    </div>
                </div>

                <div className="flex justify-center gap-10 mt-12">
                    <div className="flex flex-col gap-4">
                        <Label>Language alert</Label>
                        <button className="mx-auto" onClick={() => setAlertActive(!alertActive)}>
                            <div className={getIconClassNames(alertActive, "bg-red-500")}>
                                <WarningIcon />
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label>Good contribution</Label>
                        <button className="mx-auto" onClick={() => setContributionActive(!contributionActive)}>
                            <div className={getIconClassNames(contributionActive, "bg-yellow-400")}>
                                <Star />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // const meeting = await getMeetingById(params?.id);
    const meeting = EXAMPLE_MEETING;

    return { props: { meeting } };
};

export default MeetingPage;
