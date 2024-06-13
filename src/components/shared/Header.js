import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headerlogo from "@/assets/The Dragon News.png";
import { getCurrentDay } from '@/utils/showCurrentDate';

const Header = () => {
    const current = getCurrentDay()
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headerlogo} width={500} height={500} alt='headerlog' className='mx-auto'/>
                <Typography variant='body2' color="gray" textAlign="center" className='py-2'>@2024 Dragon News Masud Sarder</Typography>
                <Typography textAlign="center">{current}</Typography>
            </Container>
        </Box>
    );
};

export default Header;