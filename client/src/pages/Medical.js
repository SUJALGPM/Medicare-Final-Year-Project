import React, { useState } from 'react';
import Layout from '../components/Layout';
import MedicalDetail from '../components/MedicalDetail';
import medicalData from '../Data/MedicalData';

const Medical = () => {
    const [select, setSelect] = useState("Select-Your-City"); // Set initial state

    const filterData = medicalData.filter(data => data.location.toLowerCase() === select.toLowerCase());

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <section className="blogs my-5" id="BlogContaint">
                    <h2 style={{ display: "inline", marginRight: '30px', marginLeft: '370px' }}>{'<<<'}{select}{'>>>'}</h2>
                    <select value={select} onChange={(e) => setSelect(e.target.value)} style={{ width: '250px', height: '40px', background: 'linear-gradient(to right,#dddddd, #ffffff)' }}>
                        <option value="">Select</option>
                        <option value="Virar">Virar</option>
                        <option value="Kharghar">Kharghar</option>
                    </select>
                    <div className="container">
                        <div className="card-deck">
                            <div className="mt-5 d-flex justify-content-center">
                                <div className="row w-80">
                                    {filterData.map(data => (
                                        <MedicalDetail key={data.id} data={data} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Medical;
