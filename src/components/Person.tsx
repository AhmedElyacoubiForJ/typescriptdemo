import { useState } from "react";
interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: Array<string>; // string[]
}

const Person = (props: Props) => {
  // howto typescript w. useState
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isMarried, setIsMarried] = useState<boolean>(false);
  const [friends, setFriends] = useState<string[]>([]);


  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
      {props.friends.map((friend: string) => (
        <h1 key={friend}>{friend}</h1>
      ))}
    </div>
  );
};

export default Person;
