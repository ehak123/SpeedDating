import layout from '../../styles/layout.module.css'

export default function Content({ children }) {
    return (
        <main className="layout.content">
            {children}
        </main>
    )
}