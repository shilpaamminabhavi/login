import React from 'react'

const MenuCard = ({ menuData }) => {
  return (
    <div>
        <section className='main-card--cointainer'>
        { menuData.map((curElem) => {
            return(
                <>
                <div className="card-container" key={curElem.id}>
         <div className="card">
           <div className="card-body">
               <span className="card-number card-circle sub" >{curElem.id}</span>
               <span className="card-author subtle" style={{color:"red"}}>{curElem.name}</span>
               <h2 className='card-tittle'>{curElem.name}</h2>
               <span className='card-discription subtle'>
                   I love Maggi, it tastes so yumm.. i ate it once in a week.. in our home every one like it so much..i like its masala.. i like it in spicy method..
               </span>
               <div className='card-read'>Read</div>
           </div>
           <img src={curElem.image} alt='images' className='card-media' />
           <span className='card-tag subtle'>Order Now</span>
       </div>
      
    </div>
                </>
            )
        }
        )
        }
        </section>
       
    </div>
  )
}

export default MenuCard
