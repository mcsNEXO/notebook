function Layout(props) {
    return (
        <>
            <div>{props.header}</div>
            <div>{props.content}</div>
            <div>{props.menu}</div>
            <div>{props.footer}</div>
        </>
    )
}

export default Layout