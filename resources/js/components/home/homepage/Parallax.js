import React from 'react'

const Parallax = (props) => (
    <div style={{backgroundImage: `url(${props.url})`}} className="section-parallax"></div>
)

export default Parallax