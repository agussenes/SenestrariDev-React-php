
import { Link } from 'react-router-dom';

import './BannerContact.css'

const BannerContact = () => {
    return (
        <section className="banner-contact text-center py-5">
            <div className="container">
                <h2 className="text-light mb-3">¿Querés que tu proyecto esté acá?</h2>
                <p className="text-white mb-4">Trabajemos juntos y llevemos tu idea a la web</p>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                    Contactame
                </Link>
            </div>
        </section>
    );
};

export default BannerContact;
