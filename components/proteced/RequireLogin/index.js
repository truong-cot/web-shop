import { Fragment } from "react";

function RequireLogin({children}) {
    return <Fragment>{children}</Fragment>
}

export default RequireLogin;