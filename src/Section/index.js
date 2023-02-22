import { Header, ListName, StyledSection } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <ListName>
                {title}
            </ListName>
            {extraHeaderContent}
        </Header>
            {body}  
    </StyledSection>
);

export default Section;