interface Props {
    name: string,
    email: string,
    age: number,
    isMarried: boolean,
    friends: Array<string> // string[]
}

const Person = (props : Props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? 'is' : 'is not'} MARRIED</h1>
      {props.friends.map( (friend : string) => (
        <h1 key={friend}>{friend}</h1>
      ))}
    </div>
  )
}

export default Person
