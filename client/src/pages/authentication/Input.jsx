export default function Input({ id, error, icon, ...props }) {
    return (
        <div className="input-container">
            <div className="input-wrapper">
                <label htmlFor={id}>{icon}</label>
                <input
                    {...props}
                    className={id}
                    id={id} />
            </div>
            <div className="control-error">{error && <p>{error}</p>}</div>
        </div>
    )
}
