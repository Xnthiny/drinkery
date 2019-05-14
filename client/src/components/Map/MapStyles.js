import React from "react";

export default function MapStyles(props) {
  return (
    <div>
        <div style={{

            color: 'black',
            background: 'grey',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
        }}>
            {props.text};
        </div>
    </div>
  )
}
