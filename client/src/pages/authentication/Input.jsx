export default function Input({ containerClass = "input-container", wrapperClass = "input-wrapper", errorClass = "control-error", componentType, id, error, icon = "", ...props }) {
    const ComponentType = componentType
    return (
        <div className={containerClass}>
            <div className={wrapperClass}>
                <label htmlFor={id}>{icon}</label>
                <ComponentType
                    {...props}
                    id={id} />
            </div>
            <div className={errorClass}>{error && <p>{error}</p>}</div>
        </div>
    )
}
