import { Card, Divider } from 'antd';
import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SvgIcon from '@mui/material/SvgIcon';

const MedicalDetail = (props) => {
    const { medicalName, location, time, review, link } = props.data

    return (
        <Card hoverable className="doctor-card"
            title={<h3 className="card-title"><SvgIcon component={HealthAndSafetyIcon} style={{ fontSize: '36px', marginRight: '8px' }} /> {medicalName}</h3>}
            style={{ width: 290, height: 350, marginLeft: 10, border: '1px solid black', textDecoration: 'none', marginTop: 15, cursor: 'pointer' }}>

            <div>
                <p style={{ fontSize: 20, color: 'black' }}><b>Timing : </b> {time}</p>
                <Divider style={{ borderColor: 'black' }}></Divider>
                <p style={{ fontSize: 20, color: 'black' }}><b>Review : </b> {review}</p>
                <Divider style={{ borderColor: 'black' }}></Divider>
                <p style={{ fontSize: 20, color: 'black' }}><b>Location : </b> {location}</p>
                <Divider style={{ borderColor: 'black' }}></Divider>
                <h3 className='text-center'><a href={link} target='_blank' rel = "noreferrer"><SvgIcon component={FmdGoodIcon} style={{ fontSize: '36px', marginRight: '8px' }} />Google-Map</a></h3>
                <Divider style={{ borderColor: 'black' }}></Divider>
            </div>
        </Card>
    );
}

export default MedicalDetail;