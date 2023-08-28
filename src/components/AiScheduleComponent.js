import React, { useEffect, useState } from 'react'

import { Text, Image } from '@chakra-ui/react';

function AiSechduleComponent({ dow, mow, heading, text, img, clr }) {
    const [color, setColor] = useState("lightgray");
    const styles = {
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        paddingRight: "10px",
        width: "300px",
    }


    const ltr = clr?.substring(17, 39);

    useEffect(() => {
        if (ltr?.length > 0) {
            setColor(ltr);
        } else {
            setColor("lightGray");
        }

    }, [ltr])

    return (
        <div style={styles}>
            <div className='one' style={{ color: color, display: "flex", flexDirection: "column" }}>

                <Text
                    fontSize={'20px'}
                    as={'b'}
                >{mow}</Text>
                <Text
                    fontSize={'40px'}
                    as={'b'}
                >{dow}</Text>
            </div>

            <div style={{ backgroundColor: ltr, paddingTop: "20px" }}>

                <div className='two'>
                    <Text
                        as={'b'}
                    >{heading}</Text>
                    <Text
                        style={{ marginTop: 0, paddingTop: 0 }}
                    >{text}</Text>
                </div>
                <div className='three' style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                    width: "300px",

                }}>
                    <button style={{
                        color: "#3966db",
                        border: "1px solid #3966db",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "150px",
                        marginTop: "30px"


                    }}>
                        <Text>Schedule Post</Text>
                    </button>

                    <Image
                        src={img}
                        boxSize='150px'
                        style={{ marginTop: 10, paddingTop: 10 }}
                    />

                </div>
            </div>
        </div >
    )
}

export default AiSechduleComponent
