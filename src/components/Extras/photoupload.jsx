import React from 'react';
function Upload(props) {
    const [img, setImg] = React.useState("Add Photo")
    React.useEffect(()=>{
        setImg(props.event)
    },[props.event])
    return (
        <div>
            {img ? img : "Add photo"}
        </div>
    );
}

export default Upload;