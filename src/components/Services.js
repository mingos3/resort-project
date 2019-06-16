import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail />,
                title: 'Free Cocktails',
                info: 'get a cocktail while you are sitting on the beach taking the sunlight'

            },
            {
                icon:<FaHiking />,
                title: 'Endless Hiking',
                info: 'go for a walk and breeze fresh air'

            },
            {
                icon:<FaShuttleVan />,
                title: 'Shuttle and Shut',
                info: 'sit down and shut the fuck up'

            },
            {
                icon:<FaBeer />,
                title: 'Beer & Bears',
                info: 'take a beer in solitude or in company with drunks'

            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
