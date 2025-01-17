/* eslint-disable react/prop-types */
const Header = ({ course }) => {

  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <>
    <p>
      {part} {exercises}
    </p>
    </>
  )
}
const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};
 
  const Total = ({ total }) => {

    return (
      <div>
              <p>Number of exercises {total}</p>
      </div>
    )
  }
const App = () => {

  const course = {
    name: 'Half Stack application development', 
    parts: [
    {
      name: 'Fundamentals of React', 
      exercises: 10 
    },
    {
      name: 'Using props to pass data', 
      exercises: 7 
    },
    {
      name: 'State of a component', 
      exercises: 14 
    }
  ]
}
  
 
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total total={total}/>
    </div>
  )
}

export default App