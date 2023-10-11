import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import BlogDetail from './BlogDetail';
import './Blog.css';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your health',
        description: 'Nargis Shaikh in Wadala East, Mumbai is a top player in the category General Physician Doctors in the Mumbai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mumbai.',
        author: 'Dr. Nargis',
        authorImg: ema,
        date: '23 April 2019'
    },
    {
        title: 'Keep your child safe and healthy',
        description: 'The person earned their M.B.B.S. degree at Krishna Institute of Medical Science, Karad (2005-2010), followed by internships at K. J. Somaiya Hospital, Sion (2010-11), and B.J. Wadia Hospital for Children, Parel, Mumbai (2013-2015). These experiences likely paved the way for a career in healthcare.',
        author: 'Dr. Prerna',
        authorImg: watson,
        date: '23 April 2019'
    },
    {
        title: 'Restoring Health with Precision',
        description: 'Dr. Avinash Patil, a seasoned General Physician in Thane, with 21+ years of experience, specializes in MBBS and MD in General Medicine. He practices at Dhanwantari Multispeciality Hospital and offers diverse services like Nadi pariksha and specialized treatments.',
        author: 'Dr. Avinaash',
        authorImg: john,
        date: '23 April 2019'
    },
]



const Blog = () => {
    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;