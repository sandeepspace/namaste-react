export const Shimmer = (props) => {
    console.log(props);

    return (
        <div className={props?.count === 1 ? 'center-shimmer-card' : 'shimmer-container'}>
            {
                Array(props.count).fill().map(e => {
                    console.log(e);
                    return <div className="shimmer-card"></div>
                })
            }
        </div>
    )
}