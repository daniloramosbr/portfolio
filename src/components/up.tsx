import { Link } from 'react-scroll';

export default function Up() {
  return (

 
      <Link to="header" smooth={true} duration={900} className="up-btn ">
      <ion-icon name="chevron-up-outline"></ion-icon>
      </Link>
  )
}
