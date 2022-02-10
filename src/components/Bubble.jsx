function Bubble(props) {
    const getClassNames = () => {
        let className = "bubble clickable"

        if (props.active) {
            className += " bubble-active"
        }

        return className
    }

    return (
        <div className={getClassNames()} onClick={props.onClick} />
    );
}

export default Bubble;