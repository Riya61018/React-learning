import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (elem) => {
  return (
    <div className="card">
  <div>
    <div className="top">
      <img src={elem.brandLogo} alt={elem.companyName} />
      <button>
        Save <Bookmark size={10} />
      </button>
    </div>

    <div className="center">
      <h3>
        {elem.companyName} <span>{elem.datePosted}</span>
      </h3>

      <p>{elem.post}</p>

      <div className="tag">
        <h4>{elem.tag1}</h4>
        <h4>{elem.tag2}</h4>
      </div>
    </div>
  </div>

  <div className="bottom">
    <div>
      <h3>${elem.pay}/hr</h3>
      <p>{elem.location}</p>
    </div>

    <button>Apply Now</button>
  </div>
</div>

  )
}

export default Card