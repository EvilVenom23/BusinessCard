import {useNavigate} from 'react-router-dom'

export default function AppBar(){
  const navigate = useNavigate();

  
    return (
        <div>
            <button onClick={() => {
                navigate("/see");
            }}>See all Cards</button>
            <button onClick={() => {
                navigate("/add");
                }}>Create a Card</button>
        </div>
    )
}