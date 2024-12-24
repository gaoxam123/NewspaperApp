import "./menusidebarwindow.css"
export default function SidebarWindow({ visible, title, closeSidebarWindow, hover }) {
    return (
        <>
            {((visible || hover) && !closeSidebarWindow) && (
                <div className="popup">
                    <h2>{title}</h2>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
            )}
        </>
    )
}