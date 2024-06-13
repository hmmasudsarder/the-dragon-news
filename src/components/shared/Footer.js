import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {

    const navItem = [
        {
            route: "Home",
            pathname: "/"
        },
        {
            route: "Pages",
            pathname: "/pages"
        },
        {
            route: "Category",
            pathname: "/category"
        },
        {
            route: "About",
            pathname: "/About"
        },
        {
            route: "Contact",
            pathname: "/contact"
        },
    ];

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="text-center" sx={{
                    "& svg": {
                        color: "white"
                    }
                }}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>

                </Box>
                <Box className="w-full text-center">
                    {navItem.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>
                                {item.route}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant='body2' color="gray" textAlign="center">@2024 Dragon News Masud Sarder</Typography>
            </Container>

        </Box>
    );
};

export default Footer;