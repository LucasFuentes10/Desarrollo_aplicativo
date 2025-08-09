export default function Button({
    childern,
    ...props
}){
    return(
        <button
            className="button"
            {...props}
        >
            {childern}
        </button>
    );
}