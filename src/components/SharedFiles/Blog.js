import React from 'react';

const Blog = () => {
    return (
        <div style={{marginBottom: "160px"}} className="accordion container" id="accordionExample">
        <h2 className='text-center py-5'>Questions and Answers</h2>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Difference between javascript and nodejs
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Javascript is a high level and dynamic programming language sometimes it is called scripting language. it is used specially for web development.
                        Node js is the open source javascript run time environment to run javascript browser outside. It's also run server side. node js has a lots of modules and mostly used in web development.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    When should you use nodejs and when should you use mongodb
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Node js is mostly used for non-blocking and event driven serves. it is used for real time applications. Traditionally used for bank-end API's. it can be easily handled.
                        Mongodb is a No-sql database and it's used for friendly choice for database. it's more flexible to use. mongodb has a scale-out architecture which is popular to developers. mongodb uses json like format database. Mongodb was also built for people building internet and business.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Differences between sql and nosql databases.
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        SQl database for relational database. sql for Structured Query Language it is a collection of tables that stores a specific set of structured data.
                        No-sql database stores data in document style. it is more friendly than sql. it has verity to control and save data in document style.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What is the purpose of jwt and how does it work
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Json web token is the standard used to share security information between client and server. it is used for encrypting data before saving to database and sending client. it uses a cryptographic algorithm to ensure that claims.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;