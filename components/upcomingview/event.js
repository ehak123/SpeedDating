import utilStyles from '../../styles/utils.module.css'

export default function Event(props) {
    const date = props.date;
    const title = props.title;
    const descr = props.descr;

    return (
        <div className={utilStyles.calendercard}>
            <p className={utilStyles.lighttext}> {date} </p>
            <h3>{title}</h3>
            <p>{descr}</p>
        </div>
    )
}