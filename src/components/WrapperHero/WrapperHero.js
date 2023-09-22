export default function WrapperHero(props) {
    return <div style={{
        //border: "2px solid red",
        display: "flex",
        width: "70rem",
        alignItems: "center",
        gap: "2rem"
    }}> {props.children}</div >
}