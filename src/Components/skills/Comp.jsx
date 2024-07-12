import React from 'react'

const Comp = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Competive Programming</h3>
        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                <i class='bx bxl-c-plus-plus skills_icon'></i>
                <div>
                    <h3 className="skills_name">C</h3>
                        <span className="skills_level">Advanced</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-c-plus-plus skills_icon'></i>
                <div>
                    <h3 className="skills_name">C++</h3>
                        <span className="skills_level">Advanced</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-python skills_icon'></i>
                <div>
                    <h3 className="skills_name">Python</h3>
                        <span className="skills_level">Intermediate</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-java skills_icon' ></i>
                <div>
                    <h3 className="skills_name">Java</h3>
                        <span className="skills_level">Basic</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Comp
