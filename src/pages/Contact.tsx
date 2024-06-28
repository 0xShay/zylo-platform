import React from 'react';

const Contact: React.FC = () => {

    return (
        <>

            <div className="flex flex-col xl:flex-row p-8 xl:p-16">

                <div className="p-8 xl:w-1/3 flex flex-col justify-center">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-300">Zylo Clothing Company</h1>
                    <ul className="text-lg m-4 text-center">
                        <li><b>Address:</b> 123 Zylo Street, Cityville, State, Zip Code</li>
                        <li><b>Phone:</b> (555) 123-4567</li>
                        <li><b>Email:</b> info@zyloclothing.com</li>
                    </ul>
                </div>

                <div className="p-8 xl:w-1/3 flex flex-col justify-center border-t border-b xl:border-t-0 xl:border-b-0 xl:border-l xl:border-r border-black">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-200">Business Hours</h1>
                    <ul className="text-lg m-4 text-center">
                        <li><b>Monday - Friday:</b> 9:00 AM - 5:00 PM</li>
                        <li><b>Saturday:</b> 10:00 AM - 4:00 PM</li>
                        <li><b>Sunday:</b> Closed</li>
                    </ul>
                </div>

                <div className="p-8 xl:w-1/3 flex flex-col justify-center">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-400">Social Platforms</h1>
                    <ul className="text-lg m-4 text-center">
                        <li><b>Facebook:</b> ZyloClothing</li>
                        <li><b>Instagram:</b>  @zyloclothing</li>
                        <li><b>Twitter:</b> @zyloclothing</li>
                    </ul>
                </div>

            </div>

        </>
    )

}

export default Contact;