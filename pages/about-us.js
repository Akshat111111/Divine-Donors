import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Footer from "../src/components/Footer";

export default function Contact() {

    return (<div>
        <div className="public-wrap container ab text-center">
        <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="#">
                {/* <img > </img> */}
            </a>
        </nav>


        <h1 className="display-1"><strong>DIVINE DONORS</strong>
        </h1>
        <p className="p-4">Divine Donors is a transformative crowdfunding platform dedicated to supporting educational initiatives through the power of collective giving. By connecting alumini with their schools, Divine Donors makes it easy for people to donate money that directly funds the purchase of essential books and educational materials. This platform empowers communities to invest in the education of their future generations, ensuring that every child has access to the knowledge and resources they deserve. With a focus on transparency and impact, Divine Donors bridges the gap between donors and students, fostering a spirit of compassion and generosity that uplifts entire communities.</p>

    </div>
    <Footer />
    </div>)
};
