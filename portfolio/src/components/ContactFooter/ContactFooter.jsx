import SocialsBar from "../SocialsBar/SocialsBar";

function ContactFooter() {
    return (
        <div className="contact-footer">
            <div className="content flex-col bg-transparent gap-10">
                <h1>Want to collaborate ? Let's talk !</h1>
                <SocialsBar/>
            </div>
        </div>
    );
}

export default ContactFooter;