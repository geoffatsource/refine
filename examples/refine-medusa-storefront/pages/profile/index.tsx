import { LayoutWrapper, useGetIdentity } from "@pankod/refine-core";
import { Container, Text } from "@components/ui";

const SearchPage: React.FC = () => {
    const { data } = useGetIdentity();

    return (
        <LayoutWrapper>
            <Container className="pt-4">
                <Text variant="pageHeading">My Profile</Text>
                <div className="grid grid-cols-4">
                    {data && (
                        <div className="flex flex-col divide-accent-2 divide-y">
                            <div className="flex flex-row items-center space-x-4 py-4">
                                <span className="text-lg font-medium text-accent-600 flex-1">
                                    Full Name
                                </span>
                                <span>
                                    {data.first_name} {data.last_name}
                                </span>
                            </div>
                            <div className="flex flex-row items-center space-x-4 py-4">
                                <span className="text-lg font-medium text-accent-600 flex-1">
                                    Email
                                </span>
                                <span>{data.email}</span>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </LayoutWrapper>
    );
};

export default SearchPage;
