import React, { Component } from 'react'
import content from '../content/home.md';
import newContent from '../content/contact/_index.md';
export default class Home extends Component {
    render() {
        console.log(newContent);
        let { html , attributes:{ title, cats } } = content;
        return (
            <article>
                <h1>{title}</h1>
                <img src={newContent.attributes.logo}></img>
                <div dangerouslySetInnerHTML={{ __html: html }}/>
                <ul>
                    { cats.map((cat, k) => (
                        <li key={k}>
                            <h2>{cat.name}</h2>
                            <p>{cat.description}</p>
                        </li>
                    ))}
                </ul>
            </article>
        )
    }
}