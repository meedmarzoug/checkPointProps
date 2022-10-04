import FullName from "./Profile/Component/FullName";
import Bio from "./Profile/Component/Bio"
import "./styles.css";
import image from "./Profile/image/imageprof.jpg"
export default function App() {
     const handleName=e =>
  { e.preventDefault();
   alert(props.name);
  };
  return (
    <>
    <section>
    <div className="card">
<div className="card-header"> </div>
<div className="card-body"> 

<FullName name="Yasmine Souissi">
<img src={image} alt="PhotoProfil"
     width="220" className="img"/>
  </FullName>  
  <Bio text="Web Developer"/>


</div>

<div className="card-footer">

  <div className="a1"> 
    <h4 className="nombre">800</h4>
<h5 className="text"> Followers</h5>
    </div>

    <div className="a1"> 
    <h4 className="nombre">800</h4>
<h5 className="text">Likes</h5>
    </div>

    <div className="a1"> 
    <h4 className="nombre">50</h4>
<h5 className="text">Photos</h5>
    </div>


  </div>


  </div>
    </section>
     
    </>
  );
}
