
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
    </>

)



function Navbar() {
    return (
        <nav>
            <h1 className="logo">Airbnb</h1>
        </nav>
    )
}

function Hero() {
    return (
        <>
            <div className="imgbox">
                <img src="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="content">
                <h1>Online Expriences</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, sapiente placeat ipsam rerum delectus corrupti amet.</p>
            </div>
        </>
    )
}

function Cards() {
        let cardelemet = data.map(e=>{
            return <Card key={e} src = {e.src} rating={e.rating}
             counter ={e.counter} country = {e.country} 
             title ={e.title} fee = {e.fee}  />
        })
       
    return (
        <div className="cards">
           {cardelemet}
        </div>
    )
}
function Card(props) {
    return (
        <div className="card">
            <div className="img-box">
                <img src={props.src} alt="" />
            </div>
            <div className="data">
                <span className="star">★</span>
                <span className="rating">{props.rating}</span>
                <span className="counter">({props.counter})</span>
                <span className="country">・{props.country}</span>
                <h5 className="title">{props.title}</h5>
                <p className="price"> <span className="fee">From {props.fee}</span> / person </p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <p>@All right Reserved 2022</p>
        </div>
    )
}

var data = [
    {
        src: 'https://images.pexels.com/photos/6204538/pexels-photo-6204538.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: '5.0',
        counter: '123+',
        country: 'END',
        title: 'LEARN SURVIVAL SKILLS',
        fee: '1200 INR',
    },
    {
        src: 'https://images.pexels.com/photos/6172483/pexels-photo-6172483.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: '4.8',
        counter: '500+',
        country: 'AMR',
        title: 'ART OF POLITICS',
        fee: '1500 INR',
    },
    {
        src: 'https://images.pexels.com/photos/9489589/pexels-photo-9489589.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: '4.5',
        counter: '700+',
        country: 'NTL',
        title: 'MAGIC 101',
        fee: '500 INR',
    }, {
        src: 'https://images.pexels.com/photos/5463113/pexels-photo-5463113.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: '5.0',
        counter: '5000+',
        country: 'IND',
        title: 'FIND YOUR INNERSELF',
        fee: '2000 INR',
    },
    {
        src: 'https://images.pexels.com/photos/8244710/pexels-photo-8244710.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: '4.3',
        counter: '350+',
        country: 'ROC',
        title: 'HOW TO BE PICTURE PERFECT',
        fee: '1100 INR',
    },
    {
        src: 'https://images.pexels.com/photos/7955074/pexels-photo-7955074.jpeg?auto=compress&cs=tinysrgb&w=600',
        rating: '4.6',
        counter: '200+',
        country: 'AMR',
        title: 'RAP MASTERCLASS',
        fee: '1500 INR',
    },
]