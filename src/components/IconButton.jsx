function IconButton(props) {
    return (
        <a href={props.href} className="icon-btn" target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
}

export default IconButton;