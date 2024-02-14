import React from 'react';
import './Profile.css';

function Profile({name, image, color, tag}) {
    const style = {
        boxShadow: `5px 5px 5px 5px rgba(${color}, 0.75)`
    }

    const maincolor = {
        color: `rgb(${color})`
    }

    return (
        <div className="profile_info" style={style}>
            <img src={image} alt={name} className="char"/>
            <div className="bottom_cover"></div>
            <img className="cover" src="img/cover.png" alt="cover"/>
            <div className="name_tag" style={maincolor}>{name}</div>
            <img src="img/name_tag.png" alt="name_tag" className="tag_container" />
            <div className="tag_name">{tag}</div>
        </div>
    )
}

export default Profile;