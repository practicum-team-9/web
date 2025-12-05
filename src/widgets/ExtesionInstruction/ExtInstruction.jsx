import './ExtensionInstruction.css'


function ExtInstructions({ instructions }) {

  return (
      <div className="instructions-container">
        <div className="instructions-header">
          <div className="instructions-logo">
            <img
              src={instructions.header.logo.img}
              className="logo-img"
              alt={instructions.header.logo.alt}
            />
          </div>
          <h1 className="instructions-h1">{instructions.header.title}</h1>
        </div>
        <div className="instructions-body">
          <ul className="instructions-steps">{
              instructions.steps.map((step, index) => {
                return (
                  <li key={index} className="instructions-step">
                    <p className="step-text">{step.text}</p>
                    <img className="step-img" src={step.img.src} alt={step.img.alt}/>
                  </li>  
                )              
              })
            }
          </ul>
        </div>
      </div>
  );
}

export default ExtInstructions;
