import { Span } from "next/dist/trace"

const Header2 = () => {
    const List = [
        {name:'Banglore'},
        {name:'Mumbai'},
        {name:'Dehli'},
        {name:'Dehradun'},
        {name:'Srinagar'}
    ]
  return (
    <div>
        <div className="flex px-10 py-3 bg-gray-100 justify-between">
           {
            List.map((e)=>{
                 return(<span key={e.name}>{e.name}</span>)
            })
           }
        </div>
    </div>
  )
}

export default Header2