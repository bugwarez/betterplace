import CreatePostCard from '@/components/CreatePostCard'
import FeedPost from '@/components/FeedPost'
import Spacer from '@/components/Spacer'
import { Box, Card, Divider, Chip, Typography } from '@mui/material'
import React from 'react'

function Home() {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // background: "red"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "space-between",
                }}>
                    <Box sx={{
                        width: "68%",
                        height: "100%",
                    }}>
                        <CreatePostCard />
                        <Spacer size={15} />
                        <Divider variant='fullWidth'>

                            <Chip label={<Typography variant="h6">Feed</Typography>} color='primary' sx={{ width: 150, height: "2rem" }} />

                        </Divider>
                        {
                            [1].map((post, index) => {
                                return (
                                    <FeedPost type='media' media={"https://source.unsplash.com/TCpfPxKPOvk/1000x600"} mediaType='photo' key={index} />
                                )
                            })
                        }
                    </Box>
                    <Box sx={{
                        width: "30%",
                        height: "100%",
                    }}>
                        <Card sx={{
                            width: "100%",
                            height: "55vh",
                            border: "2px solid #E0E0E0",
                            borderRadius: "10px"
                        }}>
                            a
                        </Card>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Home