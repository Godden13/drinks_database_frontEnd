import './SideBar.css';

export default function SideBar({ drinks, category, ingredients, glasses}) {
  return (
    <div className='sideBar'>
      <div className="creator">
        {
          drinks.map((drink) => {
            return (
              <div className="drinks" key={drink.id}>
                <img src={drink.src} alt={drink.name} id="image" />
                <p>{drink.description}</p>
                <button className="readMore">Read More</button>
              </div>
            );
          })
        }
      </div>
      <div className="categories">

      </div>
      <div className="ingredients">

      </div>
      <div className="glasses">

      </div>
    </div>
  )
}