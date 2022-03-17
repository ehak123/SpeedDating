import styles from './adminongoing.module.css'

export default function DisplayMatch({ children, group1, group2 }) {


    return (
        <>
        <div id={'group1'}>
            <div id={'man1'}>0</div>
            <div id={'man2'}>2</div>
            <div id={'man3'}>4</div>
            <div id={'man4'}>6</div>
            <div id={'man5'}>8</div>
        </div>

        <div id={'group2'}>
            <div id={'woman1'}>1</div>
            <div id={'woman2'}>3</div>
            <div id={'woman3'}>5</div>
            <div id={'woman4'}>7</div>
            <div id={'woman5'}>9</div>
        </div>
        </>
    )
}