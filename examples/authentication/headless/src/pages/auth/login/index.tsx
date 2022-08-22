import { AuthPage } from "@pankod/refine-core";
export const LoginPage: React.FC = () => {
    return (
        <AuthPage
            type="login"
            registerLink="/auth/register"
            forgotLink="/auth/forgot-password"
        />
    );
};