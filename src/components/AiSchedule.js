import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../redux/CountReducer";
import { fetchMonthApi } from '../redux/CurrentMonthApiReducer';

import "./AiSchedule.css";

import { Text } from '@chakra-ui/react';

import AiSechduleComponent from './AiScheduleComponent';


function AiSechdule() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.CountReducer.count);

    const data = useSelector(state => state.CurrentMonth);
    console.log(data);

    console.log(data?.data?.days);


    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const month = months[count];

    useEffect(() => {
        dispatch(fetchMonthApi({ month }));
    }, [dispatch, month])


    function handleNext() {
        dispatch(next());
    }

    function handlePrev() {
        dispatch(prev());
    }


    const bannerStyle = {
        backgroundImage: `url(${data.data.calendar_banner_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100vw",
        height: "400px",
        display: "flex",
        justifyContent: " center",
        alignItems: "center",
        color: "white",
    }


    return (
        <div>
            <div style={bannerStyle}>
                <div style={{
                    width: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <button className='circular-button' onClick={handlePrev}>&lt;</button>
                    <Text fontSize={"40px"}>
                        {data.data.calendar_banner_text}
                    </Text>
                    <button className='circular-button' onClick={handleNext}>&gt;</button>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
                {data?.data?.days?.map((m) => {
                    return <AiSechduleComponent
                        dow={m.day_of_the_month}
                        mow={m.day_of_the_week}
                        heading={m.card_header}
                        text={m.card_body}
                        img={m.card_image}
                        clr={m.month_week_color}
                    />
                })}
            </div>
        </div >
    )
}

export default AiSechdule
