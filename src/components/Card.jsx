import React from "react"
import { FaStar } from 'react-icons/fa'
import '../index.css'

export default function Card(props) {
  
  let badgeText
  if (props.res.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.res.location === "Online") {
      badgeText = "ONLINE"
  }
    return (
        <section className="card">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <img className="card--img" src={`../public/images/${props.res.coverImg}`}alt="vghoom" />
          <div className="card--title">
            <p><i style={{color:"#FE395C"}}><FaStar/></i> {props.res.stats.rating} <span> ({props.res.stats.reviewCount}) . {props.res.location}</span></p>
            <p>{props.res.title}</p>
            <p className="card--money"><b>From DA {props.res.price}</b> /person</p>
          </div>
        </section>
    )
}