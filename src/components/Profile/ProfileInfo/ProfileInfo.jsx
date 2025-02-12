import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://marketplace.canva.com/EAFSUH0EweU/1/0/1600w/canva-black-elegant-personal-linkedin-banner-eEN5zzEf5VA.jpg'/>
            </div>

            <div className={s.descBlock}>ava+desc</div>
        </div>
    )
}

export default ProfileInfo;