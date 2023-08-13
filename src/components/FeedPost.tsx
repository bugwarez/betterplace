import React from 'react'
import {
    Box,
    Stack,
    Avatar,
    Typography,
    IconButton,
    Card,
    useTheme
} from "@mui/material"

//!Icons
import VerifiedIcon from '@mui/icons-material/Verified';
import Image from 'next/image';

interface FeedPostProps {
    type: "media" | "text" | "poll" | "event"
    user: any
    text: any
    media?: any
    mediaType?: "video" | "photo"
}

function FeedPost(props: FeedPostProps) {

    const { type, user, text, media, mediaType } = props

    const theme = useTheme()
    return (
        <>
            <Card sx={{
                marginY: 3,
                width: "100%",
                height: "fit-content",
                paddingX: 2,
                paddingY: 5,
                // backgroundColor: "red",
                border: "2px solid #E0E0E0",
            }} elevation={0}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start"
                }} gap={3}>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        // background: "red",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        justifyContent: "start"
                    }} gap={3}>
                        <Avatar src='' sx={{ width: "45px", height: "45px", borderRadius: "10px" }} variant='rounded' />
                        <Box sx={{ width: "100%", heigth: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start" }}>
                            <Box sx={{ width: "100%", heigth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
                                <Typography variant='body2' fontSize={"1.2em"} fontWeight={600}>John Doe</Typography>
                                {true ? <VerifiedIcon color='primary' fontSize='small' sx={{ marginLeft: 1 }} /> : null}
                                <Typography color={theme.palette.text.secondary} variant='body1' sx={{ ml: 1 }}>@johndoe</Typography>
                                <Typography color={theme.palette.text.secondary} variant='body1' sx={{ ml: 1 }}>•&nbsp;10m</Typography>
                            </Box>
                        </Box>

                    </Box>
                    <Box sx={{ width: "100%", heigth: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start" }}>
                        <Typography variant='body2' fontSize={"1em"} fontWeight={400}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et at laborum sunt. Sint, repellat. Aliquid, dignissimos minima alias quaerat temporibus, enim aut autem ea, optio recusandae eaque vero placeat?
                        </Typography>
                        {
                            type == "media" ? <Card sx={{ width: "100%", height: "435px", minHeight: "300px", maxHeight: "550px", borderRadius: "10px", mt: 4 }}>
                                {mediaType == "photo" ? <img src={media} width={"100%"} height={"auto"} alt='post' /> : "video"}
                            </Card> : null
                        }
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default FeedPost