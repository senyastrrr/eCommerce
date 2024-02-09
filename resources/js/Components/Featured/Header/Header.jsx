import Container from "./Container";

const Header = ({ children }) => {
    return (
        <header className="sm:flex sm:justify-between py-2 px-4 sticky top-0 z-30 w-full bg-white">
            <Container>
                {children}
            </Container>
        </header>
    );
};

export default Header;