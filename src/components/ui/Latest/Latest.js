import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import topnews from "@/assets/top-news.png"
import topnews2 from "@/assets/top-news2.png"

const LatestNews = () => {
    return (
        <Box className="my-5">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topnews} alt='top news image' width={800} />
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
                        <Typography gutterBottom variant="h5" component="div">
                            By Masud Sarder - Mar 18 2023
                        </Typography>
                        <Typography gutterBottom>
                            By Masud Sarder - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='my-2'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at
                            its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid className='mt-4' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topnews2} alt='top news image' width={800} />
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
                                    By Masud Sarder - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='my-2'>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topnews2} alt='top news image' width={800} />
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
                                    By Masud Sarder - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='my-2'>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topnews2} alt='top news image' width={800} />
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
                                    By Masud Sarder - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='my-2'>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topnews2} alt='top news image' width={800} />
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
                                    By Masud Sarder - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='my-2'>
                                    It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at
                                    its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </Box>
    );
};

export default LatestNews;