import React from 'react'
import "../assets/css/skill.css"
import line from "../assets/images/underline.png"
const Skills = () => {

  const SkillCard=({skill})=>{
    return(
      <div className='SkillCard'>
        <p>{skill}</p>
      </div>
    )
  }    
  // const SkillCard2=({skill})=>{
  //   return(
  //     <div style={{position: "relative"}}>
  //   <div className="parallelogram">
  //   </div>
  //    <p className='pp'> {skill}</p>
  //   </div>
  //   )
  // }  
  const SkillCardRow=({s1,s2,s3})=>{
    return(
      <div className='SkillCardRow'>
        <SkillCard skill={s1} />
        <SkillCard skill={s2}/>
       {s3&&<SkillCard skill={s3}/>     }   
      </div>
    )
  }

  return (
    <div className='skill_main'>
      <h1 className='skill_heading'>SKILLS</h1>
      <div style={{display:"flex",justifyContent:"center",height:"200px",marginTop:"-50px",marginBottom:"-40px"}}>
      <img src={line} width="500px" alt='line'/>
      </div>
    <div className='skill_cards'>
    <SkillCardRow s1="HTML/CSS" s2="C++" s3="JAVASCRIPT" />
    <SkillCardRow  s1="REACTJS" s2=" NODEJS" />
    <SkillCardRow s1="BOOTSTRAP" s2="MONGO DB" s3="GIT/GITHUB" />
    </div>
  
    </div>
  )
}

export default Skills