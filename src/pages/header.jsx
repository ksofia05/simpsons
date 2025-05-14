import { Link } from "react-router-dom";
const header = () => {
return (
<div className="container">
    <div className="row">
    <div className="col">
        <Link><img
        src="https://th.bing.com/th/id/OIP.JoTau08BSEDi3Qfi701hgwHaE8?rs=1&pid=ImgDetMain"
        alt="The Simpsons"
        width={180}
        /></Link>
    </div>
    <div className="col">
        <ul className="nav justify-content-end py-3 gap-1">
        <li className="btn btn-outline-primary">
            <Link to="/" className="nav-link active" aria-current="page">
            Home
            </Link>
        </li>
        <li className="btn btn-outline-primary">
            <Link to="/Family" className="nav-link">
            Family
            </Link>
        </li>
        <li className="btn btn-outline-primary">
            <Link to="/History" className="nav-link">
            History
            </Link>
        </li>
        </ul>
    </div>
    </div>
</div>
);
};
export default header;
