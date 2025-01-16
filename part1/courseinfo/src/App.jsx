const Header = (course) => {

  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}


const Content = (content) => {

    return (
      <div>
           <p>
        {content.content[0].part1} {content.content[0].exercises1}
      </p>
      <p>
        {content.content[1].part2} {content.content[1].exercises2}
      </p>
      <p>
        {content.content[2].part3} {content.content[2].exercises3}
      </p>
      </div>
    )
  }
 
  const Total = (total) => {

    return (
      <div>
              <p>Number of exercises {total.total}</p>
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