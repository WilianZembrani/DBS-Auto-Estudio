import "./AuthLayout.css";

function AuthLayout({ children, title, subtitle, icon }) {
    return (
        <div className="auth-page">
            <div className="auth-container">

                {icon && <img className="auth-icon" src={icon} alt="" />}

                {title && <h1 className="auth-title">{title}</h1>}
                {subtitle && <p className="auth-subtitle">{subtitle}</p>}

                <div className="auth-content">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default AuthLayout;