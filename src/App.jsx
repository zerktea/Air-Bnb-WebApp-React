import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


export default function App(){
  const dataElement = data.map((res) =>
    <Card 
      key = {res.id}
      res= {res}
    />
  )
  
  return(
    <>
        <Header />
        <Hero />
        <div className="card--list">
            {dataElement}
        </div>
        
        
    </>
  )


}