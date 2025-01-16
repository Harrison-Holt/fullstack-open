/* eslint-disable react/prop-types */
const Header = ({ course }) => {

  return (
    <div>
      <h1>{course}</h1>
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
const Content = ({ content }) => {
  return (
    <>
      <Part part={content[0].part1} exercises={content[0].exercises1} />
      <Part part={content[1].part2} exercises={content[1].exercises2} />
      <Part part={content[2].part3} exercises={content[2].exercises3} />
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

  const course = 'Half Stack application development'

  const content = [
    { part1: 'Fundamentals of React', exercises1: 10 }, 
    { part2: 'Using props to pass data', exercises2: 7 }, 
    { part3: 'State of a component', exercises3: 14 }
  ]
  
  const total = content[0].exercises1 + content[1].exercises2 + content[2].exercises3

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total total={total}/>
    </div>
  )
}

export default App