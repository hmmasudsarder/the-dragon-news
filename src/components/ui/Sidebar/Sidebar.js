import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sidebar from "@/assets/side-top-news.png";

const Sidebar = () => {
    return (
        <Box className="my-5">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={sidebar} alt='top news image' width={800} />
                    </CardMedia>
                    <CardContent>
                        <p
                            className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
                        >
                            Tecnology
                        </p>
                        <Typography gutterBottom>
                            By Masud Sarder - Mar 18 2023
                        </Typography>
                        <Typography gutterBottom>
                            By Masud Sarder  18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='my-2'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at
                            its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default Sidebar;