import { useState } from "react";
import { Heading1 } from "../components/Heading1";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";
import { LinkButton } from "../components/LinkButton";

const IndexPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Layout title="Landing Page - Mrs. Robot">
            <Heading1>Welcome 🖖🏽</Heading1>
            <form className="flex flex-col items-center gap-8">
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(value) => setUsername(value)}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={(value) => setPassword(value)}
                    type="password"
                />
                <LinkButton href={`/users/${username}`}>Login</LinkButton>
            </form>
        </Layout>
    );
};

export default IndexPage;
