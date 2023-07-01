import React from 'react'
import Card from "../Card/Card"

const Publications = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        <Card 
        title={"AIDE-AI and IoT Enabled Home Automation for Disabled and Elderly"}
        view={"https://link.springer.com/chapter/10.1007/978-981-15-9927-9_23?error=cookies_not_supported&code=fc1c8f94-3db5-4ff2-9c40-5a95e1a03a13"}
        publisher={"Springer-2nd International Conference on Emerging Technologies in Data mining and Information Security IEMIS 2020"}
        publication_date={"7/27/2021"}
        authors={"Sunita Sahu, Smruti Kshirsagar, Srushti Sachdev, Navjyot Singh & Anushka Tiwari "}
        />
        <Card 
        title={"IoT Enabled Gesture-Controlled Home Automation for Disabled and Elderly"}
        view={"https://ieeexplore.ieee.org/abstract/document/9076488"}
        publisher={"IEEE-2020 Fourth International Conference on Computing Methodologies and Communication (ICCMC)"}
        publication_date={"4/23/2020"}
        authors={"Smruti Kshirsagar, Srushti Sachdev, Navjyot Singh, Anushka Tiwari & Sunita Sahu"}
        />
    </div>
  )
}

export default Publications