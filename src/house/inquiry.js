import { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onChange = (e) => {
        setContactInfo({...contactInfo, [e.target.id]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
        //send
    };

    return(
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={contactInfo.name}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email"> Email Address </label>
                <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={contactInfo.email}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email"> Remarks </label>
                <input
                    id="remarks"
                    type="text"
                    className="form-control"
                    placeholder="Remarks"
                    value={contactInfo.remarks}
                    onChange={onChange}
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                disabled={!contactInfo.name || contactInfo.email}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
};

export default Inquiry;